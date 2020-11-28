#### Python 在终端开启 HTTP 服务
```shell
# python3
python -m http.server 8011

# python2
python -m SimpleHTTPServer 8011
```
参考：https://blog.csdn.net/hotpotbo/article/details/88227301

#### Nginx 开启目录索引
```conf
location / {
    autoindex on;
    autoindex_localtime;
}
```
参考：http://www.ttlsa.com/nginx/nginx-module-auto_index/

#### Nginx/OpenResty 重载配置
```shell
kill -HUP `cat /run/nginx.pid`
```

#### Lua 正则表达式：禁止贪婪匹配
```lua
-- 用 - 
-- Lua中修饰符 - 和 * 都表示匹配前一字bai符0次或多次
-- 但 - 进行的是最短匹配，类似传统正则中的非贪婪匹配，而 * 则是最长匹配，即贪婪匹配
-- 由于你正则中最后一个(%d-)后面没有任何东西了，那这个 - 进行了最短匹配，即什么都不匹配
-- 所以没有捕获到1999，而加上$后，由于有了结尾标识位，- 就必须匹配1999才能使整个正则匹配通过
-- 所以就捕获了1999，或者你可以把最后个 - 换成 *，也可以捕获1999的
```
参考：https://zhidao.baidu.com/question/616868124687859372.html
