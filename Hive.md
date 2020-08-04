## Hive

### Hive 工作原理
![Hive 工作原理](./images/hive_process.jpg)

### 特点
- 普通表：表结构元数据及数据在 HDFS 中
- 外部表：表结构元数据在 HDFS 中，实际数据在表结构 LOCATION 参数指定的文件路径中 

### Hive SQL
#### 数据类型
- 列类型
  + 整型
    * TINYINT, 后缀 Y
    * SMALLINT, 后缀 S
    * INT
    * BIGINT, 后缀 L
  + 字符串
    * VARCHAR, 长度 1~65535
    * CHAR, 长度 255
  + 时间
    * 支持 UNIX 时间戳（可选纳秒的精度）
    * 支持 java.sql.Timestamp 格式: YYYY-MM-DD HH:MM:SS.ffffffffff 和 YYYY-MM-DD HH:MM:ss.ffffffffff
  + 日期: 如 YYYY-MM-DD
  + 小数: DECIMAL(precision, scale), 例 decimal(10, 0)
  + 联合类型: 是异类的数据类型的集合
    * 语法: `UNIONTYPE<int, double, array<string>, struct<a: int, b: string>>`
    * 示例:{0:1}, {1:2.0}, {2:["three", "four"]}, {3:{"a": 5, "b": "five"}}
- 文字
  + 浮点类型
  + 十进制类型
- Null 值: 缺少值通过特殊值 Null 表示
- 复杂类型
  + 数组: `Array<dataType>`
  + 映射: `Map<primitiveType, dataType>`
  + 结构体: `Struct<colName, dataType [COMMENT colComment], ...>`

#### 内置运算符
- 关系运算符
  + =, !=
  + <, >
  + <=, >=
  + IS NULL, IS NOT NULL
  + LIKE, RLIKE
  + REGEXP（等同于 RLIKE）
- 算术运算符
  + `+, -, *, /, %`
  + &, |, ^, ~
- 逻辑运算符
  + AND, &&
  + OR, ||
  + NOT, !
- 复杂运算符
  + A[n] 访问数组 A 第 n 个元素（n>=0)
  + M[key] 访问映射中关键字 key 的值
  + S.x 访问结构 S 的字段 s 值

#### 内置函数
  + round, floor, ceil, rand
  + concat, substr
  + upper, ucase, lower, lcase
  + trim, ltrim, rtrime
  + regexp_replace
  + size
  + cast
  + from_unixtime, to_date, year, month, day
  + get_json_object
  + 聚合函数: count, sum, avg, min, max

#### DML
##### 操作数据库

```sql
-- 创建数据库语法: CREATE DATABASE|SCHEMA [IF NOT EXISTS] <databaseName>
-- 示例:
create database [if not exists] userdb;
-- 或
create schema userdb;

-- 查看数据库
show databases;

-- 删了数据库语法: DROP DATABASE StatementDROP (DATABASE|SCHEMA) [IF EXISTS] databaseName [RESTRICT|CASCADE];
-- 示例:
drop database if exists userdb;
drop database if exists userdb cascade;  -- CASCADE 意味着需求删除所有相应表才能删库
drop schema userdb;
```

##### 操作表

```sql
-- 创建表语法:
create [TEMPORARY] [EXTERNAL] table [IF NOT EXISTS] [dbName.] tableName
[(colName datatType [COMMENT colComment], ...)]
[COMMENT tableComment]
[ROW FORMAT rowFormat]
[STORED AS fileFormat]

-- 示例:
create table if not exists employee
(
  eid int,
  name String,
  salary String,
  desigination String
)
comment 'Employee details'
row format delimited fields terminated by '\t' lines terminated by '\n'
stored as textfile;
```

```sql
-- 修改表语法:
alert table tableName RENAME TO newTableName;
alert table tableName ADD COLUMNS (colSpec[, colSpec ...]);
alert table tableName DROP [COLUMN] columnName;
alert table tableName CHANGE columnName newColumnName newType;
alert table tableName REPLACE COLUMNS (colSpec[, colSpec ...]);


-- 示例:
alert table employee rename to emp;  -- 修改表名

alert table employee change name ename String;  -- 更改字段
alert table employee change salary salary Double;

alert table employee add columns(
  dept String COMMENT 'Department name')
);  -- 添加字段

alert table employee replace columns(
  eid int empid int,
  ename string name string
);  -- 替换列???
```

```sql
-- 删除表语法: DROP TABLE [IF EXISTS] tableName;

-- 示例:
drop table if exists employee;

-- 查看表
show tables;
```

##### 加载数据

```sql
load data [LOCAL] inpath 'filePath' [OVERWRITE] into table tableName
[PARTITION (partCol1=val1, partCol2=val2, ...)]

-- 示例:
load data local inpath '/home/user/sample.txt' overwrite into table employee;
```

##### 分区操作

```sql
-- 添加分区
alert table tableName
ADD [if not exists] PARTITION
partitionSpec [LOCATION 'location1']
partitionSpec [LOCATION 'location2'] ...;

partitionSpec:
(pColumn = pColValue, pColumn = pColValue, ...)
-- 示例
alert table employee
ADD PARTITION
(year='2013') location '/2012/part2012';


-- 重命名分区
alert table tableName
PARTITION partitionSpec RENAME TO PARTITION partitionSpec;
-- 示例
alert table employee PARTITION (year='1203') RENAME TO PARTITION (Yoj='1203');


-- 删除分区
alert table tableName
DROP [IF EXISTS] PARTITION partitionSpec, PARTITION partitionSpec, ...;
-- 示例
alert table employee drop [if exists] partition (year='1203');
```
##### 视图操作

```sql
-- 创建视图语法:
create VIEW [if not exists] viewName [(columnName [COMMENT columnComment], ...)]
[COMMENT tableComment]
AS select ...

-- 示例:
create view emp_30000 AS
select * from employee
where salary > 30000;
```

```sql
-- 删除视图语法:
drop VIEW viewName;

-- 示例:
drop view emp_30000;
```

##### 索引操作

```sql
-- 创建索引语法:
create index indexName
on table baseTableName (colName, ...)
as 'index.handler.class.name'
[with deferred rebuild]
[idxproperties (propertyName=propertyValue, ...)]
[in table indexTableName]
[partitioned by (colName, ...)]
[
  [row format ...] stored as ...
  | stored by ...
]
[location hdfsPath]
[tblproperties (...)]

-- 示例:
create index index_salary on table employee(salary)
as 'org.apache.hadoop.hive.ql.index.compact.CompactIndexHandler';
```

```sql
-- 删除索引语法:
drop index indexName on tableName;

-- 示例:
drop index indexSalary on employee;
```

#### DQL

##### select

```sql
select [ALL | DISTINCT] selectExpr, selectExpr, ...
from tableReference
[WHERE whereCondition]
[GROUP BY colList]
[HAVING havingCondition]
[CLUSTER BY colList | [DISTRIBUTE BY colList] [SORT BY colList]]
[ORDER BY colList]
[LIMIT number];

-- 示例:
select * from employee where salary > 30000;
select Id, Name, Dept from employee order by dept;
select Dept, count(*) from employee group by dept;
```

##### join

- 语法

```sql
tableReference JOIN tableFactor [joinCondition]
| tableReference {LEFT|RIGHT|FULL} [OUTER] JOIN tableReference
joinCondition
| tableReference LEFT SEMI JOIN tableReference joinCondition
| tableReference CROSS JOIN tableReference [joinCondition]
```
- 示例

```sql
select c.Id, c.Name, c.Age, o.Amount
from customers c JOIN orders o
on (o.customer_id = c.Id);


select c.Id, c.Name, c.Age, o.Amount
from customers c LEFT OUTER JOIN orders o
on (o.customer_id = c.Id);

select c.Id, c.Name, c.Age, o.Amount
from customers c RIGHT OUTER JOIN orders o
on (o.customer_id = c.Id);

-- full outer join 连接表包含两个表的所有记录（缺少匹配的一侧为 NULL）
select c.Id, c.Name, c.Age, o.Amount
from customers c FULL OUTER JOIN orders o
on (o.customer_id = c.Id);
```

### 参考
- hive(数据仓库工具) https://baike.baidu.com/item/hive/67986?fr=aladdin
- Hive 教程 https://www.yiibai.com/hive

### 记录
- 2019/12/28 16:23 周六 创建

