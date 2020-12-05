### 日志类问题

1. 常用的MySQL日志有那些？我们在什么情况下使用这些日志？
2. 如何通过日志来审计用户活动？

- 常用的 MySQL 日志及使用场景

  知识点

  + MySQL 常用的日志类型

    | 日志名称                   | 作用                                         |
    | -------------------------- | -------------------------------------------- |
    | 错误日志（error-log）      | 记录mysql在启动、运行或停止时出现的问题      |
    | 常规日志（general-log）    | 记录所有发向MySQL的请求。                    |
    | 慢查日志（slow-query-log） | 记录符合条件的查询                           |
    | 二进制日志（binary_log）   | 记录全部有效的数据修改日志                   |
    | 中继日志（relay_log）      | 用于主从复制，临时存储从主库同步的二进制日志 |

    * 错误日志（error-log）

      * 分析排除MySQL运行错误

      * 记录未经授权的访问

      * log_error = $mysql/sql_log/mysql-error. log

      *  log_error_verbosity = [1,2,3]

        | verbosity | 作用                              |
        | --------- | --------------------------------- |
        | 1         | Error messages                    |
        | 2         | Error and warning messages        |
        | 3         | Error, warning, and note messages |

      * log_error_services=[日志服务组件；日志服务组件]

        | 组件名称             | 作用                                        |
        | -------------------- | ------------------------------------------- |
        | log_filter_internal  | 默认的日志过滤组件，依赖log_error_verbosity |
        | log_sink_internal    | 默认的日志输出组件，依赖log_error           |
        | log_sink_json        | 将错误日志输出到json文件                    |
        | log_sink_syseventlog | 将错误日志输出到系统日志文件                |

        ```sh
        mysql> select @@log_error;
        /home/mysql/sql_log/mysql-error.log
        mysql> select @@log_error_verbosity;
        2
        mysql> select @@log_error_services;
        log_filter_internal; log_sink_internal
        mysql> select @@log_timestamps;
        UTC
        mysql> set persist log_timestamps='SYSTEM';
        ```

    

    + 常规日志（general_log）

      分析客户端发送到 MySQL 的实际请求

      * general_log = [ON|OFF]
      * general_log_file = $mysql/sql_log/general.log
      * log_output = [FILE | TABLE | NONE]

      ```sh
      mysql> use mysql;
      mysql> show create table general_log\G
      Table: general_log
      Create Table: CREATE TABLE general_log (
      	event_time timestamp(6) NOT NULL DEFAULT CURRENT-TIMESTAMP (6) ON UPDATE CURRENT_TIMESTAMP (6),
      	user_host mediumtext NOT NULL, thread_id bigint(21) unsigned NOT NULL, 		server_id int(10) unsigned NOT NULL, command_type varchar(64) NOT NULL, 	argument mediumblob NOT NULL
      ) ENGINE-CSV DEFAULT CHARSET-utf8 COMMENT='General log'
      
      mysql> select @@general_log;
      0
      mysql> select @@general_log_file;
      /home/mysql/data/MysQL-06.1og
      mysql> set persist general_log_file='/home/mysql/sql_log/general.1og';
      mysql> select @@general_log_file;
      /home/mysql/sql_log/general.1og
      mysql> select @@log_output;
      FILE
      mysql> set global general_log=on;
      
      $ tail -f /home/mysql/sql_log/general_log
      /home/mysql/bin/mysqld, version: 8.0.11 (source distribution). started with: Tcp port: 3306 Unix socket: /home/mysql/data/mysql.sock
      Time Id command Argument
      2018/8/27 23:36:26  10 Query show databases
      2018/8/27 23:36:55  10 Quit
      2018/8/27 23:37:07  11 connect root@localhost on using socket
      2018/8/27 23:37:07  11 Query select @@version_comment limit 1
      
      mysql> set global general_log=off;
      mysql> set global log_output='table';
      mysql> set global general_log=on;
      mysql>  create user dba_test@'127.0.0.1' identified by '123456';
      mysql> select * from general_log;
      ...
      6 rows in set
      
      $ more general_log.csv
      ```

    - 慢查询日志（slow_query_log）

      * 将执行成功并符合条件的查询记录到日志中
      * 找到需要优化的SQL
      * slow_query_log =[ON I OFF]
      * slow_query_log_file = $mysql/sql_log/slowlog.log
      * long.query_time = xx秒
      * log_queries_not_using_indexes= [ON | OFF]
      * log_slow_admin_statements= [ON | OFF]
      * log_slow_slave_statements = [ON | OFF]

      ```sh
      mysql> show variables like 'long_query_time';
      10
      mysql> set persist long_query_time=0.001;
      mysql> show variables like 'slow_query_log%';
      slow_query_log OFF
      slow_query_log_file /home/mysql/sql_log/slowlog_1305.log
      mysql> set global slow_query_log=on;
      
      $ more /home/mysql/sql_log/slowlog_1305.log
      ```

    - 二进制日志（binary_log）

      + 记录所有对数据库中数据的修改
      + 基于时间点的备份和恢复
      + 主从复制
      + log-bin [=base_name]
      + binlog_format = [ROW | STATEMENT | MIXED ]
      + binlog_row_image = [FULL | MINIMAL | NOBLOB ]
      + binlog_rows_query_log_events=[ON |OFF]
      + log_slave_updates = [ON | OFF]
      + sync_binlog = [1 | 0]
      + expire_logs_days = days
      + PURGE BINARY LOGS TO ' mysql-bin.010'
      + PURGE BINARY LOGS BEFORE '2008-04-02 22:46:26';

      ```sh
      root@MysQL-06 ~# grep log_bin /etc/my.cnf
      1og_bin =/home/mysql/sql_log/mysq1-bin
      root@MysQL-06 ~# cd /home/mysql/sql_log
      root@MysQL-06 sql_log]# 1s-lh 
      total 32K
      -rw-r-----1 mysql mysql 665  Aug 28 07:38 general.1og
      -rw-r-----1 mysq] mysql 178  Aug 27 18:46 mysql-bin.000001
      -rw-r-----1 mysql mysql 1.2K Aug 28 18:53 mysql-bin.000002
      -rw-r-----1 mysql mysql 74   Aug 27 18:47 mysql-bin.index
      -rw-r-----1 mysql mysql 6.3K Aug 28 18:53 mysql-error.log
      -rw-r---- 1 mysql mysql 5.5K Aug 28 22:49 s1owlog_1305.log
      [root@MysQL-06 sql_log]#
      
      mysql> show variables like 'log_bin%';
      log_bin ON
      log_bin_basename /home/mysql/sql_1og/mysql-bin
      loq_bin_index /home/mysq/sql_log/mysql-bin.index
      log_bin_trust_function_creators OFF
      log_bin_use_v1_row_events OFF
      mysql> show variables like 'binlog_row_image';
      binlog_row_image FULL
      mysql> show variables like 'binlog_format';
      binlog_format ROW
      mysql> flush logs;
      mysql> update stock set count=20 where product_id=2030 and warehouse_id=1;
      
      $ mysqlbinlog --no-defaults -vv --base64-output=DECODE-ROWS mysql-bin.000003
      #180829 7:56:46 server id 1306
      ' stock mapped to number 95
      # at 411
      #180829 7:56:46 server id 1306
      id 95 flags: STMT END_F
      ### UPDATE `stock.stock`
      ### WHERE
      ### @1-1 /* INT meta-0 nullable=0 is-nul1-0 *
      ### @2-2030 /* INT meta-0 nullable-0 is_nul1-0 */
      ### @3-9 /* INT meta-0 nullable=0 is-nu11-0 */### @4-1 /* INT meta-0 nullable=0 is_nu71-0 */
      ### @5-10 /* INT meta-0 nullable=0 is_nul1-0
      ...
      
      mysql> flush logs;
      mysql> set global binlog_row_image=minimal;
      mysql> show variables like 'binlog_row_image';
      binlog_row_image FULL
      mysql> set session binlog_row_image=minimal;
      mysql> show variables like 'binlog_row_image';
      binlog_row_image MINIMAL
      
      $ mysqlbinlog --no-defaults -vv --base64-output=DECODE-ROWS mysql-bin.000003
      SET @@ session. character_set_client=8,@@ session. coTlation_connection-8, aasession. coTlation_
      server=33/*!*/: SET @@ session. ic_time_names-0/* ! */
      SET @ asession. collation_database-DEFAULT/* !*/;
      /*!80005 SET @ asession. default_co1 1ation_for_utf8mb4-255*//* !*/; BEGIN/*!/;
      # at 355
      #180829 8:00:18 server id 1306 end_log_pos 411 CRC32 0x59a5048a Table_map: stock stock` mapped to number 95
      at 411
      |#180829 8:00:18 server id 1306 end_1og_pos 457 CRC32 0xb2346a68
      id 95 fTags: STMT END_F Update_rows: tablel
      |F# UPDATEstock. stock
      ### WHERE
      ###
      @1-1 /* INT meta-0 nuTTabTe-0 is_nul1=0 /
      ### SET
      ##
      a5-30 /INT meta=0 nuTlabTe=0 is_nul1=0*/
      at 457
      #180829 8:00:18 server id 1306 end_log_pos 488 CRC32 Ox06a5db2o xid = 194
      COMMIT/* !/; SET aasESSION. GTID_NEXT= ' AUTOMATIC' /* added by mysqlbinlog *//*!*/; DELIMITER End of log file
      /!50003 SET COMPLETION_TYPE-@ OLD_COMPLETION_TYPE*/;
      50530 SETOd ET QaSESSION. PSEUDO_SLAVE MODE-0/;
      
      
      mysql> flush logs;
      mysql> show variables like 'binlog_rows_query_log_events';
      binlog_rows_query_log_events OFF
      mysql> set binlog_rows_query_log_events=on;
      mysql> update stock set count=40 where product_id=2030 and warehouse_id=1;
      
      $ mysqlbinlog --no-defaults -vv --base64-output=DECODE-ROWS mysql-bin.000003
      SET@@session.collation_database-DEFAULT/*/；
      /*180005 SET@asession.default_collation_forutf8mb4-255*//※！*/；
      |BEGIN
      //；
      #at 355
      |#180829 8：05：08 server id 1306 end_log_pos 445 CRC32 0x84fodbdf update stock set count=40 where product_id-2030 and warehouse_id=1
      Rows_query at 445
      #180829 8：05：08 server id 1306 end_1og_pos 501 CRC32 Oxa49ecc14
      stock mapped to number 95
      *at 501
      |#180829 8：05：08 server id 1306 end_log_pos 547 CRC32 0xfe46b671
      id 95 flags：STMT END_F
      |###UPDATE"stockstock
      |###WHERE
      |###
      a1=1/*INT meta=0 nullable=o is_nul1-0*/
      |##SET
      |###
      @5-40/INT meta-0 nullable-0 is_nul1-0*/
      |#at 547
      |#180829 8：05：08 server id 1306 end_log_pos 578 CRC32 0x44a85943
      xid = 198
      |COMMIT/*！*/；
      |SET@aSESSION.GTID-NEXT'AUTOMATIC'/*added by mysqlbinlog*//※*/
      |DELIMITER
      #End of 1og file
      /！50003 SET COMPLETION_TYPE-@OLD_COMPLETION_TYPE*/：
      12
      ！50530 SET@@SESSION.PSEUDO_SLAVE_MODE-0*/；Table_map：`stock Update_rows：table
      ```

    - 中继日志（relay_log）
      * 临时记录从主服务器同步的二进制日志
      * relay_log = filename
      * relay_log_purge = [ON | OFF]

  + 各种日志的配置和使用场景
