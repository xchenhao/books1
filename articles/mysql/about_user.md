### 用户管理类问题
1. 如何在给定场景下为某用户授权？
2. 如何保证数据库账号的安全？
3. 如何从一个实例迁移数据库账号到另一个实例？

- 如何在给定场景下为某用户授权？

  知识点

  + 如何定义MySQL数据库账号？

    用户名@可访问控制列表

    ​	%：代表可以从所有外部主机访问
    ​	192.168.1.%：表示可以从192.168.1网段访问

    ​	localhost:DB服务器本地访问
    使用CREATE USER命令建立用户

    ```sh
    mysql>\h create user
    ```

  + MySQL常用的用户权限

    |       | 语句         | 说明                 |
    | ----- | ------------ | -------------------- |
    | Admin |              |                      |
    |       | Create User  | 建立新的用户的权限   |
    |       | Grant option | 为其他用户授权的权限 |
    |       | Super        | 管理服务器的权限     |
    | DDL   |              |                      |
    |       | Create       | 新建数据库，表的权限 |
    |       | Alter        | 修改表结构的权限     |
    |       | Drop         | 删除数据库和表的权限 |
    |       | Index        | 建立和删除索引的权限 |
    | DML   |              |                      |
    |       | Select       | 查询表中数据的权限   |
    |       | Insert       | 向表中插入数据的权限 |
    |       | Update       | 更新表中数据的权限   |
    |       | Delete       | 删除表中数据的权限   |
    |       | Exectute     | 执行存储过程的权限   |
    
    ```sh
    mysql> show privileges;
    ```
    
    
  
  - 如何为用户授权？

    + 遵循最小权限原则

    + 使用 Grant 命令对用户授权

      ```mysql
      grant select, insert, update, delete on db.tb to <user>@<ip>;
      revoke delete on db.tb from <user>@<ip>;
      ```

- 如何保证数据库账号的安全

  + 数据库用户管理流程规范

    最小权限原则

    密码强度策略

    密码过期原则

    限制历史密码重用原则

    ```sh
    mysql> \h create user;
    mysql> create user test@'localhost' identified by '123456' password history 1;
    mysql> select * from mysql.user where user=' test'\G
    ...
    Password reuse_history: 1
    ...
    mysql> aleter user test@'localhost' password expire; # 密码过期
    
    # test@'localhost'
    mysql> show databases;
    ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement. # 需要重设密码
    mysql> alter user user() identified by '123456';
    ERROR 3638 (HY000): Cannot use these credentials for 'test@localhost' because they contradict the password history policy # 违反密码安全策略（不能和之前的一样）
    mysql> alter user user() identified by '654321';
    ```

  + 密码管理策略
