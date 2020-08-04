## 阿里云 ODPS 笔记

### ODPS
- Open Data Processing Service
- ODPS SQL 与 Hive SQL 语法基本一致，语法是标准语法 ANSI SQL92 的一个子集，并有自己的扩展

### 创建表

```sql
-- 表名与列名均无所谓大小写
CREATE TABLE [IF NOT EXISTS] table_name
 [(col_name data_type [COMMENT col_comment], ...)]
 [COMMENT table_comment]
 [PARTITIONED BY (col_name data_type [COMMENT col_comment], ...)]
-- 分区表：根据各分区的LastDataModifiedTime判断该分区是否该被回收。
-- 不同于非分区表，分区表的最后一个分区被回收后，该表不会被删除。

-- 生命周期只能设定到表级别，不能在分区级设置生命周期。
-- days参数为生命周期时间，只接受正整数。单位：天。
 [LIFECYCLE days]
 [AS select_statement]

CREATE TABLE [IF NOT EXISTS] table_name
 LIKE existing_table_name
```

#### 示例

```sql
CREATE TABLE IF NOT EXISTS sale_detail(
      shop_name     STRING,
      customer_id   STRING,
      total_price   DOUBLE)
PARTITIONED BY (sale_date STRING,region STRING);

-- 添加分区
alter table sale_detail add partition (sale_date='201312', region='hangzhou');
```


### 查看分区

```sql
DESC meta.m_security_users partition (ds='20191224')

SHOW PARTITIONS m_security_users;
```
### 查询

```sql
READ tableName PARTITION (partitionName = 'xxx') 10;
```

#### SELECT
- SELECT 分区表时禁止全表扫描（需指定分区）
- 实在需全表扫描：

```sql
SET odps.sql.allow.fullscan = true;  -- 对分区表

SETPROJECT odps.sql.allow.fullscan = true; -- 对整个项目
```


### 更新（INSERT 语句）

```sql
-- 注意与 MySQL 区别（有 TABLE 关键字）

INSERT OVERWRITE|INTO TABLE tablename [PARTITION (partcol1=val1, partcol2=val2 ...)] [(col1,col2 ...)]
select_statement
FROM from_statement;
```

#### 示例

```sql
-- 覆盖更新（不支持指定列）
INSERT OVERWRITE TABLE a SELECT * FROM b;
-- 追加更新
INSERT INTO TABLE a SELECT * FROM b;


-- 创建目标表sale_detail_insert。
create table sale_detail_insert like sale_detail;
-- 给目标表增加分区。
alter table sale_detail_insert add partition(sale_date='2013', region='china');
-- 从源表sale_detail中取出数据插入目标表sale_detail_insert。
insert overwrite table sale_detail_insert partition (sale_date='2013', region='china')
  select shop_name, customer_id,total_price from sale_detail;
```

### 参考

- SQL概述 https://help.aliyun.com/document_detail/27860.html
- 更新表数据 INSERT OVERWRITE|INSERT INTO  https://help.aliyun.com/document_detail/73775.html
- ODPS语句集锦 https://blog.csdn.net/b2222505/article/details/79978131
- 基于ODPS的SQL语句 https://blog.csdn.net/dream_catcher_10/article/details/48826639
- 如何理解maxcompute常见报错信息？https://blog.csdn.net/xstardust/article/details/81222555
- 2.3 阿里云ODPS常用SQL操作 https://www.jianshu.com/p/ca4189482409
- 2.2 阿里云ODPS常用命令总结 https://www.jianshu.com/p/65378f022edd
- 2.1 阿里云ODPS数据上传与下载 https://www.jianshu.com/p/a88d72afb3f0
- 相关
  + 一文快速了解MaxCompute
 https://blog.csdn.net/weixin_33696106/article/details/91484823
  + 阿里巴巴大数据计算平台MaxCompute（原名ODPS）全套攻略 https://blog.csdn.net/qq_36510261/article/details/78972037
### 记录

- 2019/12/24 23:25 创建

