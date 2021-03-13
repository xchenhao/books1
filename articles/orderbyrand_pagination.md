### 随机排序的一种优化实现 && 数据库分页的几种实现

[TOC]

#### 随机排序的一种优化实现

```sql
SELECT * FROM <table_name> ORDER BY RAND() LIMIT 50;

WITH a AS (
	SELECT id FROM <table_name> WHERE RAND() < (<expected_count> * N)/<row_count>
)
SELECT * FROM <table_name> WHERE id IN (SELECT id FROM a);
```

#### 数据库分页的几种实现

数据库的分页总体上有两种方式：

- limit/offset 方式
- 游标方式
- 滚动方式

##### SQL

```sql
-- 通过 LIMIT/OFFSET
-- MySQL
SELECT * FROM <table_name> LIMIT <offset>,<page_size> ORDER BY <field>;
-- PostgreSQL
SELECT * FROM <table_name> LIMIT <page_size>,OFFSET <offset> ORDER BY <field>;


-- hive 
-- 通过 ROW_NUMBER() >=5.7
-- window function
WITH t AS (
	SELECT *, ROW_NUMBER() OVER(ORDER BY <field> ASC) AS row_id FROM <table_name> 
)
SELECT * FROM t WHERE row_id BETWEEN <offset> AND <offset> + <page_size>;

-- variable
SELECT * FROM (
	SELECT *, @row_id := @row_id + 1 AS row_id
    FROM <table_name>, (SELECT @row_id := 0) AS t
    ORDER BY <field>
) AS tt 
WHERE row_id BETWEEN <offset> AND <offset> + <page_size>;


-- 游标 cursor: 存储过程/函数/触发器/事件
DELIMITER // -- 定义语法结束符号
CREATE PROCEDURE p2() -- 创建 p2 的存储过程
BEGIN
    DECLARE id, total INT; -- 创建 用于接收游标值的变量
    DECLARE name VARCHAR(20) CHARACTER SET utf8; -- 注意: 游标值为中文时需指定字符集
    DECLARE done INT DEFAULT 0;  -- 游标结束的标志

    DECLARE mycur CURSOR FOR SELECT stuId,stuName FROM student WHERE stuAge > 19; -- 声明游标
    DECLARE CONTINUE HANDLE FOR NOT FOUND SET done =1; -- 指定游标循环结束时的返回值 
    OPEN mycur;  -- 打开游标
    SET total = 0; -- 初始化 变量

    myCursorLabel:LOOP  -- loop 循环
        FETCH cur INTO id,name;  -- 根据游标当前指向的一条数据
        IF done = 1 THEN  -- 当游标的返回值为 1 时，退出 loop 循环 
            LEAVE myCursorLabel;
        END IF;
        -- DO YOU THING ...
        SET total = total + 1;
    END LOOP;

    CLOSE mycur;  -- 关闭游标

    SELECT total;  -- 输出结果
END //
DELIMITER ;
```

##### MongoDB

```js
# limit/offset
db.myCollection
    .find(<filter_condition>)
    .sort({"<field>":1})
    .skip(<offset>).limit(<page_size>);

# hasNext
var datas = db.myCollection.find(<filter_condition>).sort({"<field>":1});
while (datas.hasNext()) {
  var item = datas.next();
  print(
    'INSERT INTO <mytable>(`field1`, `field2`) VALUES'
    + ' ('
    + "'" + item.property1 + "',"
    + "'" + item.property2 + "'"
    + ');'
  );
}
```


##### Elasticsearch
```js
# from/size 方式
POST <index>/_search
{
  "query": {
    "bool": {
      "filter": [
        {
          "term": {
            "age": 28
          }
        }
      ]
    }
  },
  "from": <offset>,
  "size": <page_size>,
  "sort": [
    {
      "timestamp": {
        "order": "desc"
      },
      "_id": {
        "order": "desc"
      }
    }
  ]
}
# 对于 from + size > 10000 的数据量，再使用 from + size 方式，此时会遇到以下错误
{
  "error": {
    "root_cause": [
      {
        "type": "query_phase_execution_exception",
        "reason": "Result window is too large, from + size must be less than or equal to: [10000] but was [10005]. See the scroll api for a more efficient way to request large data sets. This limit can be set by changing the [index.max_result_window] index level setting."
      }
    ]
  }
}

## 原因
# ES 需要在各个分片上匹配得到 分片数 * (from + size) 条有效数据后做一次全局排序，然后在结果集中取最后 size 条数据返回
# 而当索引非常大时，是无法使用 from + size 做深分页的，分页越深则越容易 Out Of Memory，即使运气很好没有发生 Out Of Memory，也会非常消耗 CPU 和内存资源
# 为了保护机器，ES 使用 index.max_result_window:10000 这个设定作为保护措施 ，即默认 from + size < 10000（虽然 index.max_result_window 可以动态修改或在配置文件修改，但是不被建议这样做，因为查询方式是低效的）
# 此时应改用 ES 提供的 scroll 方法来取得数据

## scroll 原理
# scroll 类型于关系型数据库里的 cursor，因此 scroll 并不适合用来做实时搜索，而更适用于后台批处理任务
# 使用 scroll 可以增加性能的原因，是因为如果做深分页，每次搜索都必须重新排序，非常浪费，而使用 scroll 就是一次把要用的数据都排完了，分批取出

## scroll 使用方式
# （1）初始化：查询并获取第一次 scroll_id
# 初始化时将所有符合搜索条件的搜索结果缓存起来，可以想象成快照
# （2）遍历：通过上次的 scroll_id 查询
# 在遍历时，从这个快照里取数据（也就是说，在初始化后对索引插入、删除、更新数据都不会影响遍历结果）
POST <index>/_search?scroll=5m
{
  "query": {
    "bool": {
      "filter": [
        {
          "term": {
            "age": 28
          }
        }
      ]
    }
  },
  "size": <page_size>,
  "from": 0,
  "sort": [
    {
      "timestamp": {
        "order": "desc"
      },
      "_id": {
        "order": "desc"
      }
    }
  ]
}

# 得到结果
# scroll_id 用于下一次遍历使用
{
  "_scroll_id" : "DnF1ZXJ5VG.....................................hlbkZlR",
  "took" : 606,
  "timed_out" : false,
  "_shards" : {
    "total" : 20,
    "successful" : 20,
    "skipped" : 0,
    "failed" : 0
  },
  "hits" : {
    "total" : 694465,
    "max_score" : null,
    "hits" : [  # 第一页结果
      {
        "_index" : "...",
        "_type" : "doc",
        "_id" : "D-Gf43IB_wsSZvpG4VgT",
        "_score" : null,
        "_source" : {
          "message" : "...."
        },
        "sort" : [
          1592956801000
        ]
      }
      # ... ...
    ]
  }
}

# 第二页请求用上一次的 scroll_id 请求
POST _search/scroll
{
    "scroll": "5m",
    "scroll_id":"DnF1ZXJ5VG.....................................hlbkZlR"
}

# 得到结果
{
  "_scroll_id" : "DnF1ZXJ5VG.....................................hlbkZlR",
  "took" : 606,
  "timed_out" : false,
  "_shards" : {
    "total" : 20,
    "successful" : 20,
    "skipped" : 0,
    "failed" : 0
  },
  "hits" : {
    "total" : 694465,
    "max_score" : null,
    "hits" : [  # 第二页结果
      {
        "_index" : "....",
        "_type" : "doc",
        "_id" : "D-Gf43IB_wsSZvpG4Vg",
        "_score" : null,
        "_source" : {
          "message" : "......"
        },
        "sort" : [
          1592956801000
        ]
      }
    ]
  }
}

# 后续第三、四...页请求类似，当前请求用上一次的 scroll_id 请求

# 请求完毕后释放资源（使用上一次的 scroll_id）
DELETE _search/scroll
{
    "scroll_id": "DnF1ZXJ5VG.....................................hlbkZlR"
}
```
```js
# npm i sync-request --save

let request = require('sync-request');

const API_HOST = 'http://<host>:<port>'
let indexes = '<indexs>'
let API_FIRST = API_HOST + '/' + indexes + '/_search?scroll=5m'
let API_SECOND = API_HOST + '/_search/scroll'

let PAGE_SIZE = 1000
let fist_query = {
  "size": PAGE_SIZE,
  "from": 0,
  "sort": [
    {
      "_id": {
        "order": "asc"
      }
    }
  ],
  "_source": ["<field1>", "field2"],
  "query": <query>
}

function requestData(last_scroll_id) {
  if (last_scroll_id === '') {
    var api = API_FIRST
    var body = fist_query
  } else {
    var api = API_SECOND
    var body = {
      scroll: "5m", # 缓存时间
      scroll_id: last_scroll_id
    }
  }

  var data = request('POST', api, {
    json: body,
    headers: {
      "Content-type": "application/json",
      "Authorization": "Basic <Authorization>",
    }
  })

  if (data && data.statusCode == 200 && data.body) {
    return JSON.parse(data.body.toString())
  } else {
    console.log(data, last_scroll_id, data.toString())
  }
}

var last_scroll_id = ''
var count = 0
while (true) {
  var data = requestData(last_scroll_id)
  if (data && data.hits.hits.length > 0) {
    last_scroll_id = data._scroll_id

    # ... DO YOUR THING
    data.hits.hits.forEach(function (v) {
      var field1 = v._source.field1
      var field2 = v._source.field1
      # ... ...
    })

    count += data.hits.hits.length
    console.log(count)
   # 假设超过 1500000 条不再查询
    if (data.hits.hits.length < PAGE_SIZE || count > 1500000) {
      break;
    }
  } else {
    break
  }
}
console.log(last_scroll_id)
console.log(result)
```

```js
POST twitter/_search
{
    "size": 10,
    "query": {
        "match" : {
            "title" : "es"
        }
    },
    "sort": [
        {"date": "asc"},
        {"_id": "desc"}
    ]
}

{
      "took" : 29,
      "timed_out" : false,
      "_shards" : {
        "total" : 1,
        "successful" : 1,
        "skipped" : 0,
        "failed" : 0
      },
      "hits" : {
        "total" : {
          "value" : 5,
          "relation" : "eq"
        },
        "max_score" : null,
        "hits" : [
          {
            ...
            },
            "sort" : [
              ...
            ]
          },
          {
            ...
            },
            "sort" : [
              124648691,
              "624812"
            ]
          }
        ]
      }
    }
    
GET twitter/_search
{
    "size": 10,
    "query": {
        "match" : {
            "title" : "es"
        }
    },
    "search_after": [124648691, "624812"],
    "sort": [
        {"date": "asc"},
        {"_id": "desc"}
    ]
}
```

##### 参考

-  https://blog.51cto.com/dmarsmiao/748186
-  https://www.cnblogs.com/yaoweijun/p/8066691.html 
-  https://blog.csdn.net/andybegin/article/details/83864171
-  https://zhuanlan.zhihu.com/p/109068603
-  https://www.cnblogs.com/sanduzxcvbnm/p/12085195.html 
-  https://www.cnblogs.com/linhan/p/4248679.html 
-  https://www.cnblogs.com/oukele/p/10684639.html 
-  https://www.cnblogs.com/loong-hon/p/11003189.html 
-  https://blog.51cto.com/9291927/2097626
-  https://www.cnblogs.com/sanduzxcvbnm/p/12085212.html 
-  https://www.cnblogs.com/fat-girl-spring/p/14420725.html 
-  https://blog.csdn.net/u012881904/article/details/102876748 
