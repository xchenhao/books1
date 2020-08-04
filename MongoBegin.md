#### Mongo 基础

#### 引用

- 关系引用

```js
var result = db.users.findOne({"name": "Tom Benzamin"}, {"address_ids": 1})
var addresses = db.address.find({"_id": {"$in": result["address_ids"]}})
```

- 数据库引用

```js
/*
文档结构

{
   "_id":ObjectId("53402597d852426020000002"),
   "address": {
     "$ref": "address_home",
     "$id": ObjectId("534009e4d852427820000002"),
     "$db": "runoob"
   },
   "contact": "987654321",
   "dob": "01-01-1991",
   "name": "Tom Benzamin"
}
*/

var user = db.users.findOne({"name": "Tom Benzamin"})
var dbRef = user.address
db[dbRef.$ref].findOne("_id": (dbRef.$id))
// 在 MongoDB 4.0 写法
// db[dbRef.$ref].findOne({"_id": ObjectId(dbRef.$id)})
```

#### 索引

- 创建索引

```js
// 联合索引
db.users.ensureIndex({gender: 1, user_name: 1})
```

- 使用覆盖索引
  + 不能使用覆盖查询：1. 所有索引字段是一个数组; 2. 所有索引字段是一个文档

```js
// 索引中没有 _id，需要排除
db.users.find({gender: "M"}, {user_name: 1, _id: 0})
```

- 查询分析
  + explain()
  + hint()

```js
db.users.find({gender: "M"}, {user_name: 1, _id: 0}).explain()
/*
{
   "cursor" : "BtreeCursor gender_1_user_name_1",  // 如果没有使用索引则是 BasicCursor
   "isMultiKey" : false,
   "n" : 1,  // 当前查询返回的文档数量
   "nscannedObjects" : 0,  // 扫描的文档数
   "nscanned" : 1,  // 扫描的文档数
   "nscannedObjectsAllPlans" : 0,
   "nscannedAllPlans" : 1,
   "scanAndOrder" : false,
   "indexOnly" : true,  // 使用了索引
   "nYields" : 0,
   "nChunkSkips" : 0,
   "millis" : 0,  // 当前查询所需时间（毫秒数）
   "indexBounds" : {  // 具体使用的索引
      "gender" : [
         [
            "M",
            "M"
         ]
      ],
      "user_name" : [
         [
            {
               "$minElement" : 1
            },
            {
               "$maxElement" : 1
            }
         ]
      ]
   }
}
*/
```

```js
// 强制使用指定的索引
db.users.find({gender: "M"}, {user_name: 1, _id: 0}).hint({gender: 1, user_name: 1})
db.users.find({gender: "M"}, {user_name: 1, _id: 0}).hint({gender: 1, user_name: 1}).explain()

/*
{
   "address": {
      "city": "Los Angeles",
      "state": "California",
      "pincode": "123"
   },
   "tags": [
      "music",
      "cricket",
      "blogs"
   ],
   "name": "Tom Benzamin"
}
*/
```

- 为数组建立索引

```js
db.users.ensureIndex({"tags":1})
db.users.find({tags:"cricket"}).explain()
  // 显示 "cursor" : "BtreeCursor tags_1" ，则表示已经使用了索引
```

- 索引子文档字段

```js
db.users.ensureIndex({"address.city":1,"address.state":1,"address.pincode":1})
db.users.find({"address.city":"Los Angeles"}).explain()
  // 查询表达不一定遵循指定的索引的顺序，mongodb 会自动优化
db.users.find({"address.city":"Los Angeles","address.state":"California","address.pincode":"123"}).explain()
```

- 索引限制
  + 如果索引的大小大于内存的限制，MongoDB会删除一些索引，这将导致性能下降
  + 查询限制
    * 正则表达式及非操作符，如 $nin, $not, 等。
    * 算术运算符，如 $mod, 等。
    * $where 子句
  + 范围限制
    * 集合中索引不能超过64个
    * 索引名的长度不能超过128个字符
    * 一个复合索引最多可以有31个字段
  + 其它
    * 从2.6版本开始，如果现有的索引字段的值超过索引键的限制，MongoDB中不会创建索引
    * 如果文档的索引字段值超过了索引键的限制，MongoDB不会将任何文档转换成索引的集合
   
- 全文索引: 对每一个词建立一个索引，指明该词在文章中出现的次数和位置
  +  在 2.6 版本以后是默认开启全文检索的，之前版本开启 `db.adminCommand({setParameter:true,textSearchEnabled:true})` 或 `mongod --setParameter textSearchEnabled=true`
  + 操作
 
```js
/*
{
   "post_text": "enjoy the mongodb articles on Runoob",
   "tags": [
      "mongodb",
      "runoob"
   ]
}
*/

// 创建全文索引
db.posts.ensureIndex({post_text:"text"})

// 使用
db.posts.find({$text:{$search:"runoob"}})

// 旧版 db.posts.runCommand("text",{search:"runoob"})
/*
{ 
   "_id" : ObjectId("53493d14d852429c10000002"), 
   "post_text" : "enjoy the mongodb articles on Runoob", 
   "tags" : [ "mongodb", "runoob" ]
}
*/

// 删除全文索引
db.posts.getIndexes()
db.posts.dropIndex("post_text_text")
```

 
#### 原子操作
MongoDB 不支持事务

```js
db.books.findAndModify ( {
   query: {
            _id: 123456789,
            available: { $gt: 0 }
          },
   update: {
             $inc: { available: -1 },
             $push: { checkout: { by: "abc", date: new Date() } }
           }
} )
```

- 原子操作常用命令

```js
{$set: {field: value}}
{$unset: {field: 1}}

{$inc: {field: value}}


{$push: {field: value}}
{$pushAll: {field: value_array}}
{$pull: {field: _value}}
$addToSet
{$pop: {field: 1}}

{$rename: {old_field_name:: new_field_name}}

{$bit: {field: {and: 5}}}
```

- 示例

```js
t.find() { "_id" : ObjectId("4b97e62bf1d8c7152c9ccb74"), "title" : "ABC", "comments" : [ { "by" : "joe", "votes" : 3 }, { "by" : "jane", "votes" : 7 } ] }
 
t.update( {'comments.by':'joe'}, {$inc:{'comments.$.votes':1}}, false, true )
 
t.find() { "_id" : ObjectId("4b97e62bf1d8c7152c9ccb74"), "title" : "ABC", "comments" : [ { "by" : "joe", "votes" : 4 }, { "by" : "jane", "votes" : 7 } ] }
```

#### ObjectId

- 格式
  + 前4个字节表示时间戳
  + 接下来的3个字节是机器标识码
  + 紧接的两个字节由进程id组成（PID）
  + 最后三个字节是随机数

- 创建新的 ObjectId

```js
newObjectId = ObjectId() // ObjectId("5349b4ddd2781d08c09890f3")
```

- 获取文档创建的时间戳

```js
ObjectId("5349b4ddd2781d08c09890f4").getTimestamp()  // ISODate("2014-04-12T21:49:17Z")
```

- 转换为字符串

```js
new Object().str // 5349b4ddd2781d08c09890f3
```

#### Map Reduce

- 基本语法

```js
db.collection.mapReduce(
   function() {emit(key,value);},  // map 函数
   function(key,values) {return reduceFunction},   // reduce 函数
   {
      out: collection,
      query: document,  // 文档筛选条件
      sort: document,  // 排序参数
      limit: number  // 文档数量上限
   }
)
```

- 示例

```js
// 添加测试数据
db.posts.insert({
   "post_text": "菜鸟教程，最全的技术文档。",
   "user_name": "mark",
   "status":"active"
})

db.posts.insert({
   "post_text": "菜鸟教程，最全的技术文档。",
   "user_name": "mark",
   "status":"active"
})

db.posts.insert({
   "post_text": "菜鸟教程，最全的技术文档。",
   "user_name": "mark",
   "status":"active"
})

db.posts.insert({
   "post_text": "菜鸟教程，最全的技术文档。",
   "user_name": "mark",
   "status":"active"
})

db.posts.insert({
   "post_text": "菜鸟教程，最全的技术文档。",
   "user_name": "mark",
   "status":"disabled"
})

db.posts.insert({
   "post_text": "菜鸟教程，最全的技术文档。",
   "user_name": "runoob",
   "status":"disabled"
})

db.posts.insert({
   "post_text": "菜鸟教程，最全的技术文档。",
   "user_name": "runoob",
   "status":"disabled"
})

db.posts.insert({
   "post_text": "菜鸟教程，最全的技术文档。",
   "user_name": "runoob",
   "status":"active"
})


db.posts.mapReduce( 
   function() { emit(this.user_name,1); }, 
   function(key, values) {return Array.sum(values)}, 
      {  
         query:{status:"active"},  
         out:"post_total" 
      }
)
/*
{
        "result" : "post_total",
        "timeMillis" : 23,
        "counts" : {
                "input" : 5,
                "emit" : 5,
                "reduce" : 1,
                "output" : 2
        },
        "ok" : 1
}
*/


db.posts.mapReduce( 
   function() { emit(this.user_name,1); }, 
   function(key, values) {return Array.sum(values)}, 
      {  
         query:{status:"active"},  
         out:"post_total" 
      }
).find()

/*
{ "_id" : "mark", "value" : 4 }
{ "_id" : "runoob", "value" : 1 }
*/
```

#### 正则表达式

- 操作

```js
/*
{
   "post_text": "enjoy the mongodb articles on runoob",
   "tags": [
      "mongodb",
      "runoob"
   ]
}
*/

db.posts.find({post_text:{$regex:"runoob"}})
db.posts.find({post_text:/runoob/})
db.posts.find({tags:{$regex:"run"}})  // 数组元素使用正则表达式
// 不区分大小写
db.posts.find({post_text:{$regex:"runoob",$options:"$i"}})

```

- 优化正则表达式
  + 文档中字段设置了索引，那么使用索引相比于正则表达式匹配查找所有的数据查询速度更快
  + 正则表达式是前缀表达式，所有匹配的数据将以指定的前缀字符串为开始
  + 正则表达式中使用变量。一定要使用eval将组合的字符串进行转换，不能直接将字符串拼接后传入给表达式。否则没有报错信息，只是结果为空！

```js
var name=eval("/" + 变量值key +"/i"); 
title:eval("/"+title+"/i")    // 等同于 title:{$regex:title,$Option:"$i"}
```

- 关于 regex
  + regex 操作符
    * `{<field>:{$regex:/pattern/，$options:’<options>’}}`
    * `{<field>:{$regex:’pattern’，$options:’<options>’}}`
    * `{<field>:{$regex:/pattern/<options>}}`
  + 正则表达式对象: `{<field>: /pattern/<options>}`
  + 两者区别
    * 在$in操作符中只能使用正则表达式对象，例如: `{name:{$in:[/^joe/i,/^jack/}}`
    * 在使用隐式的$and操作符中，只能使用$regex，例如: `{name:{$regex:/^jo/i, $nin:['john']}}`
    * 当option选项中包含X或S选项时，只能使用$regex，例如: `{name:{$regex:/m.*line/,$options:"si"}}`
  + options 选项：i/m/x/s（忽略大小写/多行匹配/忽略非转义的空白字符/单行匹配）

#### 管理工具

- Rockmongo
- Navicat for MongoDB

#### GridFS

- 要点
  + 用于存储和恢复那些超过16M（BSON文件限制）的文件
  + GridFS 会将大文件对象分割成多个小的chunk(文件片段),一般为256k/个,每个chunk将作为MongoDB的一个文档(document)被存储在chunks集合中。
  + GridFS 用两个集合来存储一个文件：fs.files与fs.chunks。
  + 每个文件的实际内容被存在chunks(二进制数据)中,和文件有关的meta数据(filename,content_type,还有用户自定义的属性)将会被存在files集合中。

- 示例

```sh
mongofiles.exe -d gridfs put song.mp3
```

```js
db.fs.files.find()

/*
{
   _id: ObjectId('534a811bf8b4aa4d33fdf94d'), 
   filename: "song.mp3", 
   chunkSize: 261120, 
   uploadDate: new Date(1397391643474), md5: "e4f53379c909f7bed2e9d631e15c1c41",
   length: 10401959 
}
*/

db.fs.chunks.find({files_id:ObjectId('534a811bf8b4aa4d33fdf94d')})
```

#### 固定集合

是性能出色且有着固定大小的集合，对于大小固定，我们可以想象其就像一个环形队列，当集合空间用完后，再插入的元素就会覆盖最初始的头部的元素！

- 创建

```js
db.createCollection("cappedLogCollection",{capped:true,size:10000})
db.createCollection("cappedLogCollection",{capped:true,size:10000,max:1000})

// size 是整个集合空间大小，单位为【KB】
// max 是集合文档个数上线，单位是【个】

db.cappedLogCollection.isCapped()  // 判断是否为固定集合
db.runCommand({"convertToCapped":"posts",size:10000})  // 转换为固定集合

// 固定集合文档按照插入顺序储存的,默认情况下查询就是按照插入顺序返回的,也可以使用$natural调整返回顺序。
db.cappedLogCollection.find().sort({$natural:-1})
```

- 特点
  + 可以插入及更新,但更新不能超出collection的大小,否则更新失败,不允许删除,但是可以调用drop()删除集合中的所有行,但是drop后需要显式地重建集合。
  + 受系统文件大小的限制

- 属性
  + 对固定集合进行插入速度极快
  + 按照插入顺序的查询输出速度极快
  + 能够在插入最新数据时,淘汰最早的数据
- 用法
  + 储存日志信息
  + 缓存一些少量的文档


#### 实现 _id 自动增长

```js
db.createCollection("counters")

{
  "_id":1,
  "product_name": "Apple iPhone",
  "category": "mobiles"
}

function getNextSequenceValue(sequenceName){
   var sequenceDocument = db.counters.findAndModify(
      {
         query:{_id: sequenceName },
         update: {$inc:{sequence_value:1}},
         "new":true
      });
   return sequenceDocument.sequence_value;
}


db.products.insert({
   "_id":getNextSequenceValue("productid"),
   "product_name":"Apple iPhone",
   "category":"mobiles"}
 )
db.products.insert({
   "_id":getNextSequenceValue("productid"),
   "product_name":"Samsung S3",
   "category":"mobiles"}
 )
   
db.products.find()

/*
{ "_id" : 1, "product_name" : "Apple iPhone", "category" : "mobiles"}
{ "_id" : 2, "product_name" : "Samsung S3", "category" : "mobiles" }
*/
```


#### 零碎知识点

```js
# 切换或创建数据库
use <数据库名>

db.auth('用户名', '密码')


// 返回的是对象
db.users.findOne()

// 返回的是数组
db.users.find()
```

#### 参考

- https://www.runoob.com/mongodb/mongodb-tutorial.html

