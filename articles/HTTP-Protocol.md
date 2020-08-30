## HTTP 协议

### URL

`<PROTOCOL>://<HOST>:<PORT>/<PATH>?<PARAMETER>#<ANCHOR>`

### 请求

|请求行|`<METHOD> <RESOURCE> <HTTP VERSION>`|
|:---:|:---:|
|请求头|`<KEY>:<VALUE>`|
|空行||
|请求主体|...|

示例：

```
GET /562f25980001b1b106000338.jpg HTTP/1.1
Host    img.mukewang.com
User-Agent    Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36
Accept    image/webp,image/*,*/*;q=0.8
Referer    http://www.imooc.com/
Accept-Encoding    gzip, deflate, sdch
Accept-Language    zh-CN,zh;q=0.8


POST / HTTP1.1
Host:www.wrox.com
User-Agent:Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)
Content-Type:application/x-www-form-urlencoded
Content-Length:40
Connection: Keep-Alive

name=Professional%20Ajax&publisher=Wiley
```

### 响应

| 状态行   | `<HTTP VERSION> <HTTP CODE> <HTTP STATUS MESSAGE>` |
| -------- | :----------------------------------------------: |
| 消息头   |                 ` <KEY>:<VALUE>`                   |
| 空行     |                                                  |
| 响应主体 |                       ...                        |

示例：

```
HTTP/1.1 200 OK
Date: Fri, 22 May 2009 06:07:21 GMT
Content-Type: text/html; charset=UTF-8

<html>
      <head></head>
      <body>
            <!--body goes here-->
      </body>
</html>
```

### 请求方法

- GET
- POST
- PUT
- DELETE
- HEAD
- OPTIONS
- TRACE

### 响应状态码

- 200
  + 201
- 300
  - 301
  - 302
- 400
  - 401
  - 403
  - 404
- 500
  + 502
  + 503
  + 504

### 参考

- <https://www.cnblogs.com/ranyonsue/p/5984001.html> 关于HTTP协议，一篇就够了
- <https://www.cnblogs.com/li0803/archive/2008/11/03/1324746.html> HTTP协议详解（真的很经典）
- <https://url.cn/v7TU4ny8> 理解 HTTP 协议 - HTTP 协议详解总结

