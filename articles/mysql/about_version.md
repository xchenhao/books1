### 版本类问题

1. 你之前工作中使用的是什么版本的 MySQL？为什么选择这个版本？
2. 如何决定是否要对 MySQL 进行升级？如何进行升级？
3. 最新的 MySQL 版本是什么？它有什么特性比较吸引你？

- 为什么选择某一 MySQL 版本？

  知识点：

  + MySQL 常见的发行版

  ​	MySQL 官方版本 <https://dev.mysql.com/downloads/mysql>

  ​	Percona MySQL <https://www.percona.com/downloads/Percona-Server-LASTEST/>

  ​	MariaDB <https://downloads.mariadb.org/>

  + 各个发行版之间的区别及优缺点
  
    |                | MySQL                                       | Percona MySQL                              | MariaDB                                     |
    | -------------- | ------------------------------------------- | ------------------------------------------ | ------------------------------------------- |
    | **服务器特性** |                                             |                                            |                                             |
    |                | 开源                                        | 开源                                       | 开源                                        |
    |                | 支持分区表                                  | 支持分区表                                 | 支持分区表                                  |
    |                | InnoDB                                      | XtraDB                                     | XtraDB                                      |
    |                | 企业版监控工具<br />社会版不提供            | Percona Monitor 工具                       | Monyog                                      |
    | **高可用特性** |                                             |                                            |                                             |
    |                | 基于日志点复制                              | 基于日志点复制                             | 基于日志点复制                              |
    |                | 基于 GTID 复制                              | 基于 GTID 复制                             | 基于 GTID 复制<br />但 GTID 同 MySQL 不兼容 |
    |                | MGR                                         | MGR & PXC                                  | Galera Cluster                              |
    |                | MySQL Router                                | Proxy SQL                                  | MaxScale                                    |
  | **安全特性**   |                                             |                                            |                                             |
    |                | 企业版防火墙                                | ProxySQL FireWall                          | MaxScale FireWall                           |
    |                | 企业版用户审计                              | 审计日志                                   | 审计日志                                    |
    |                | 用户密码生命周期                            | 用户密码生命周期                           | -                                           |
    |                | sha256_passsword<br />caching_sha2_password | sha256_password<br />caching_sha2_password | ed25519<br />sha256_password                |
    | **开发及管理** |                                             |                                            |                                             |
    |                | 窗口函数（8.0）                             | 窗口函数（8.0）                            | 窗口函数（8.0）                             |
    |                | -                                           | -                                          | 支持基于日志回滚                            |
    |                | -                                           | -                                          | 支持记在表中记录修改                        |
    |                | Super read_only                             | Super read_only                            | -                                           |
    
  
- 如何对 MySQL 进行升级？

  知识点

  + 在对 MySQL 进行升级前要考虑什么？

    1. 升级可以给业务带来的益处

       是否可以解决业务上某一方面的痛点
       是否可以解决运维上某一方面的痛点

    2. 升级可能对业务带来的影响

       对原业务程序的支持是否有影响
       对原业务程序的性能是否有影响

    3. 数据库升级方案的制定

       升级后的数据库环境检查
       升级后的业务检查

    4. 升级失败的回滚方案

       升级失败回滚的步骤
       回滚后的数据库环境检查
       回滚后的业务检查

  + MySQL 升级的步骤

    1. 对待升级数据库进行备份
    2. 升级 Slave 服务器版本
    3. 手动进行主从切换
    4. 升级 Master 服务器版本
    5. 升级完成后进行业务检查

- 最新的 MySQL 版本及其新特性

  知识点

  + MySQL 8.0 版本主要的新特性

    | 功能类别    | 新特性                                  |
    | ----------- | --------------------------------------- |
    | 服务器功能  | 所有元数据使用InnoDB引擎存储，无frm文件 |
    |             | 系统表采用InnoDB存储并采用独立表空间    |
    |             | 支持定义资源管理组（目前仅支持CPU资源） |
    |             | 支持不可见索引和降序索引支持直方图优化  |
    |             | 支持窗口函数                            |
    |             | 支持在线修改全局参数持久化              |
    | 用户及安全  |                                         |
    |             | 默认使用caching-sha2-password认证插件   |
    |             | 新增支持定义角色（role）                |
    |             | 新增密码历史记录功能，限制重复使用密码  |
    | InnoDB 功能 |                                         |
    |             | InnoDB DDL语句支持原子操作              |
    |             | 支持在线修改UNDO表空间                  |
    |             | 新增管理视图用于监控INNODB表状态        |
    |             | 新增innodb dedicated server配置项       |

    ```sh
    # 定义资源组
    mysql> \h create resource group
    Name: 'CREATE RESOURCE GROUP'
    Description:
    syntax: CREATE RESOURCE GROUP group_name
    	TYPE = {SYSTEM|USER}
    	[VCPU [=] vcpu_spec [, vcpu_spec] ...]
    	[THREAD PRIORITY [=] N]
        [ENABLE|DISABLET]
    
    vcpu_spec: {N | M - N}
    ... ...
    mysql> create resourge group imooc type=user VCPU=O THREAD_PRIORITY=1
    mysql> select * from information_schema.resource_groups;
    mysql> select * from performance_schema.threads limit 1
    mysql> select * from performance_schema.threads order by id desc limit 1
    THREAD_ID: 84
    NAME: thread/sql/one_connection
    TYPE: FOREGROUND
    PROCESSLIST_ID: 25
    ...
    1 row in set (0.00 sec)
    
    mysql> set resource group imooc for 84;
    ```
