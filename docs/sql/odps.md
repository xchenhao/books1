## 阿里云 ODPS 笔记

### ODPS
- Open Data Processing Service
- 与 Hive SQL 语法基本一致

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

### SELECT
- SELECT 分区表时禁止全表扫描（需指定分区）
- 实在需全表扫描：

```sql
SET odps.sql.allow.fullscan = true;  -- 对分区表

SETPROJECT odps.sql.allow.fullscan = true; -- 对整个项目
```

### 更新（INSERT 语句）

```sql
-- 覆盖更新
INSERT OVERWRITE TABLE a SELECT * FROM b;

-- 追加更新
INSERT INTO a SELECT * FROM b;
```

### 参考

- 2.3 阿里云ODPS常用SQL操作 https://www.jianshu.com/p/ca4189482409
- 2.2 阿里云ODPS常用命令总结 https://www.jianshu.com/p/65378f022edd
- 2.1 阿里云ODPS数据上传与下载 https://www.jianshu.com/p/a88d72afb3f0
- 基于ODPS的SQL语句 https://blog.csdn.net/dream_catcher_10/article/details/48826639

### 记录

- 2019/12/24 23:25 创建

