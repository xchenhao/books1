## Python 笔记 3（网络相关）

### socket

```python
import socket

# 创建一个 tcp socket
s1 = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 创建一个 udp socket
s2 = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
```

### [UDP](/2019/01/08/network-note-1/#udp-网络通过过程)

#### 客户端收发数据

```python
'''
创建客户端套接字
发送/接收数据
关闭套接字
'''

#coding=utf-8

from socket import *

#1. 创建套接字
udpSocket = socket(AF_INET, SOCK_DGRAM)

#2. 准备接收方的地址（服务端）
sendAddr = ('192.168.1.103', 8080)

#3. 从键盘获取数据
sendData = raw_input("请输入要发送的数据:")

#4. 发送数据到指定的电脑上
udpSocket.sendto(sendData, sendAddr)

#5. 等待接收对方发送的数据
recvData = udpSocket.recvfrom(1024) # 1024 表示本次接收的最大字节数

#6. 显示对方发送的数据
print(recvData)

#7. 关闭套接字
udpSocket.close()
```

#### 服务端

```python
#coding=utf-8

from socket import *

#1. 创建套接字
udpSocket = socket(AF_INET, SOCK_DGRAM)

#2. 绑定本地的相关信息，如果一个网络程序不绑定，则系统会随机分配
bindAddr = ('', 7788) # ip地址和端口号，ip一般不用写，表示本机的任何一个ip
udpSocket.bind(bindAddr)

#3. 等待接收对方发送的数据
recvData = udpSocket.recvfrom(1024) # 1024表示本次接收的最大字节数

#4. 显示接收到的数据
print recvData

#5. 关闭套接字
udpSocket.close()
```

#### echo 服务器

```python
#coding=utf-8

from socket import *

#1. 创建套接字
udpSocket = socket(AF_INET, SOCK_DGRAM)

#2. 绑定本地的相关信息
bindAddr = ('', 7788) # ip地址和端口号，ip一般不用写，表示本机的任何一个ip
udpSocket.bind(bindAddr)

num = 1
while True:

    #3. 等待接收对方发送的数据
    recvData = udpSocket.recvfrom(1024) # 1024表示本次接收的最大字节数

    #4. 将接收到的数据再发送给对方
    udpSocket.sendto(recvData[0], recvData[1])

    #5. 统计信息
    print('已经将接收到的第%d个数据返回给对方,内容为:%s'%(num,recvData[0]))
    num+=1


#5. 关闭套接字
udpSocket.close()
```

#### 聊天室

```python
#coding=utf-8

from socket import *
from time import ctime

#1. 创建套接字
udpSocket = socket(AF_INET, SOCK_DGRAM)

#2. 绑定本地的相关信息
bindAddr = ('', 7788) # ip地址和端口号，ip一般不用写，表示本机的任何一个ip
udpSocket.bind(bindAddr)

while True:

    #3. 等待接收对方发送的数据
    recvData = udpSocket.recvfrom(1024) # 1024表示本次接收的最大字节数

    #4. 打印信息
    print('【%s】%s:%s'%(ctime(),recvData[1][0],recvData[0]))


#5. 关闭套接字
udpSocket.close()
```

#### 广播

```python
#coding=utf-8

import socket, sys

dest = ('<broadcast>', 7788)

# 创建udp套接字
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
# 对这个需要发送广播数据的套接字进行修改设置，否则不能发送广播数据
s.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST,1)

# 以广播的形式发送数据到本网络的所有电脑中
s.sendto("Hi", dest)

print "等待对方回复（按ctrl+c退出）"

while True:
    (buf, address) = s.recvfrom(2048)
    print "Received from %s: %s" % (address, buf)
```

### [TFTP](/2019/01/08/network-note-1/#tftp)

```python
#coding=utf-8

from socket import *
import struct
import sys

if len(sys.argv) != 2:
    print('-'*30)
    print("tips:")
    print("python xxxx.py 192.168.1.1")
    print('-'*30)
    exit()
else:
    ip = sys.argv[1]

# 创建udp套接字
udpSocket = socket(AF_INET, SOCK_DGRAM)

#构造下载请求数据
cmd_buf = struct.pack("!H8sb5sb",1,"test.jpg",0,"octet",0)

#发送下载文件请求数据到指定服务器
sendAddr = (ip, 69)
udpSocket.sendto(cmd_buf, sendAddr)

p_num = 0

recvFile = ''

while True:
    recvData,recvAddr = udpSocket.recvfrom(1024)

    recvDataLen = len(recvData)

    # print recvAddr # for test

    # print len(recvData) # for test

    cmdTuple = struct.unpack("!HH", recvData[:4])

    # print cmdTuple # for test

    cmd = cmdTuple[0]
    currentPackNum = cmdTuple[1]        

    if cmd == 3: #是否为数据包

        # 如果是第一次接收到数据，那么就创建文件
        if currentPackNum == 1:
            recvFile = open("test.jpg", "a")

        # 包编号是否和上次相等
        if p_num+1 == currentPackNum:
            recvFile.write(recvData[4:]);
            p_num +=1
            print '(%d)次接收到的数据'%(p_num)

            ackBuf = struct.pack("!HH",4,p_num)

            udpSocket.sendto(ackBuf, recvAddr)
        # 如果收到的数据小于516则认为出错
        if recvDataLen<516:
            recvFile.close()
            print '已经成功下载！！！'
            break

    elif cmd == 5: #是否为错误应答
        print "error num:%d"%currentPackNum
        break

udpSocket.close()
```

### TCP

#### 服务器
  1. socket创建一个套接字
  2. bind绑定ip和port
  3. listen使套接字变为可以被动链接
  4. accept等待客户端的链接
  5. recv/send接收发送数据

```python
#coding=utf-8
from socket import *

# 创建socket
tcpSerSocket = socket(AF_INET, SOCK_STREAM)

# 绑定本地信息
address = ('', 7788)
tcpSerSocket.bind(address)

# 使用socket创建的套接字默认的属性是主动的，使用listen将其变为被动的，这样就可以接收别人的链接了
tcpSerSocket.listen(5)

# 如果有新的客户端来链接服务器，那么就产生一个新的套接字专门为这个客户端服务器
# newSocket用来为这个客户端服务
# tcpSerSocket就可以省下来专门等待其他新客户端的链接
newSocket, clientAddr = tcpSerSocket.accept()

# 接收对方发送过来的数据，最大接收1024个字节
recvData = newSocket.recv(1024)
print '接收到的数据为:',recvData

# 发送一些数据到客户端
newSocket.send("thank you !")

# 关闭为这个客户端服务的套接字，只要关闭了，就意味着为不能再为这个客户端服务了，如果还需要服务，只能再次重新连接
newSocket.close()

# 关闭监听套接字，只要这个套接字关闭了，就意味着整个程序不能再接收任何新的客户端的连接
tcpSerSocket.close()
```

#### 客户端

```python
#coding=utf-8
from socket import *

# 创建socket
tcpClientSocket = socket(AF_INET, SOCK_STREAM)

# 链接服务器
serAddr = ('192.168.1.102', 7788)
tcpClientSocket.connect(serAddr)

# 提示用户输入数据
sendData = raw_input("请输入要发送的数据：")

tcpClientSocket.send(sendData)

# 接收对方发送过来的数据，最大接收1024个字节
recvData = tcpClientSocket.recv(1024)
print '接收到的数据为:',recvData

# 关闭套接字
tcpClientSocket.close()
```

#### 模拟聊天

##### 客户端

```python
#coding=utf-8
from socket import *

# 创建socket
tcpClientSocket = socket(AF_INET, SOCK_STREAM)

# 链接服务器
serAddr = ('192.168.1.102', 7788)
tcpClientSocket.connect(serAddr)

while True:

    # 提示用户输入数据
    sendData = raw_input("send：")

    if len(sendData)>0:
        tcpClientSocket.send(sendData)
    else:
        break

    # 接收对方发送过来的数据，最大接收1024个字节
    recvData = tcpClientSocket.recv(1024)
    print 'recv:',recvData

# 关闭套接字
tcpClientSocket.close()
```

##### 服务端

```python
#coding=utf-8
from socket import *

# 创建socket
tcpSerSocket = socket(AF_INET, SOCK_STREAM)

# 绑定本地信息
address = ('', 7788)
tcpSerSocket.bind(address)

# 使用socket创建的套接字默认的属性是主动的，使用listen将其变为被动的，这样就可以接收别人的链接了
tcpSerSocket.listen(5)

while True:

    # 如果有新的客户端来链接服务器，那么就产生一个信心的套接字专门为这个客户端服务器
    # newSocket用来为这个客户端服务
    # tcpSerSocket就可以省下来专门等待其他新客户端的链接
    newSocket, clientAddr = tcpSerSocket.accept()

    while True:

        # 接收对方发送过来的数据，最大接收1024个字节
        recvData = newSocket.recv(1024)

        # 如果接收的数据的长度为0，则意味着客户端关闭了链接
        if len(recvData)>0:
            print 'recv:',recvData
        else:
            break

        # 发送一些数据到客户端
        sendData = raw_input("send:")
        newSocket.send(sendData)

    # 关闭为这个客户端服务的套接字，只要关闭了，就意味着为不能再为这个客户端服务了，如果还需要服务，只能再次重新连接
    newSocket.close()

# 关闭监听套接字，只要这个套接字关闭了，就意味着整个程序不能再接收任何新的客户端的连接
tcpSerSocket.close()
```

### Listen 的队列长度
#### 服务端
```python
#coding=utf-8
from socket import *
from time import sleep

# 创建socket
tcpSerSocket = socket(AF_INET, SOCK_STREAM)

# 绑定本地信息
address = ('', 7788)
tcpSerSocket.bind(address)

connNum = int(raw_input("请输入要最大的链接数:"))

# 使用socket创建的套接字默认的属性是主动的，使用listen将其变为被动的，这样就可以接收别人的链接了
tcpSerSocket.listen(connNum)

while True:

    # 如果有新的客户端来链接服务器，那么就产生一个新的套接字专门为这个客户端服务器
    newSocket, clientAddr = tcpSerSocket.accept()
    print clientAddr
    sleep(1)
```
#### 客户端
```python
#coding=utf-8
from socket import *

connNum = raw_input("请输入要链接服务器的次数:")
for i in range(int(connNum)):
    s = socket(AF_INET, SOCK_STREAM)
    s.connect(("192.168.1.102", 7788))
    print(i)
```
### 并发服务器
#### 单进程服务器
```python
from socket import *

serSocket = socket(AF_INET, SOCK_STREAM)

# 重复使用绑定的信息
serSocket.setsockopt(SOL_SOCKET, SO_REUSEADDR  , 1)

localAddr = ('', 7788)

serSocket.bind(localAddr)

serSocket.listen(5)

while True:

    print('-----主进程，，等待新客户端的到来------')

    newSocket,destAddr = serSocket.accept()

    print('-----主进程，，接下来负责数据处理[%s]-----'%str(destAddr))

    try:
        while True:
            recvData = newSocket.recv(1024)
            if len(recvData)>0:
                print('recv[%s]:%s'%(str(destAddr), recvData))
            else:
                print('[%s]客户端已经关闭'%str(destAddr))
                break
    finally:
        newSocket.close()

serSocket.close()
```
#### 多进程服务器
```python
from socket import *
from multiprocessing import *
from time import sleep

# 处理客户端的请求并为其服务
def dealWithClient(newSocket,destAddr):
    while True:
        recvData = newSocket.recv(1024)
        if len(recvData)>0:
            print('recv[%s]:%s'%(str(destAddr), recvData))
        else:
            print('[%s]客户端已经关闭'%str(destAddr))
            break

    newSocket.close()


def main():

    serSocket = socket(AF_INET, SOCK_STREAM)
    serSocket.setsockopt(SOL_SOCKET, SO_REUSEADDR  , 1)
    localAddr = ('', 7788)
    serSocket.bind(localAddr)
    serSocket.listen(5)

    try:
        while True:
            print('-----主进程，，等待新客户端的到来------')
            newSocket,destAddr = serSocket.accept()

            print('-----主进程，，接下来创建一个新的进程负责数据处理[%s]-----'%str(destAddr))
            client = Process(target=dealWithClient, args=(newSocket,destAddr))
            client.start()

            #因为已经向子进程中copy了一份（引用），并且父进程中这个套接字也没有用处了
            #所以关闭
            newSocket.close()
    finally:
        #当为所有的客户端服务完之后再进行关闭，表示不再接收新的客户端的链接
        serSocket.close()

if __name__ == '__main__':
    main()
```
#### 多进程服务器 2
```python
#coding=utf-8
from socket import *
from threading import Thread
from time import sleep

# 处理客户端的请求并执行事情
def dealWithClient(newSocket,destAddr):
    while True:
        recvData = newSocket.recv(1024)
        if len(recvData)>0:
            print('recv[%s]:%s'%(str(destAddr), recvData))
        else:
            print('[%s]客户端已经关闭'%str(destAddr))
            break

    newSocket.close()


def main():

    serSocket = socket(AF_INET, SOCK_STREAM)
    serSocket.setsockopt(SOL_SOCKET, SO_REUSEADDR  , 1)
    localAddr = ('', 7788)
    serSocket.bind(localAddr)
    serSocket.listen(5)

    try:
        while True:
            print('-----主进程，，等待新客户端的到来------')
            newSocket,destAddr = serSocket.accept()

            print('-----主进程，，接下来创建一个新的进程负责数据处理[%s]-----'%str(destAddr))
            client = Thread(target=dealWithClient, args=(newSocket,destAddr))
            client.start()

            #因为线程中共享这个套接字，如果关闭了会导致这个套接字不可用，
            #但是此时在线程中这个套接字可能还在收数据，因此不能关闭
            #newSocket.close() 
    finally:
        serSocket.close()

if __name__ == '__main__':
    main()
```
#### 单进程服务器-非堵塞模式
##### 服务端
```python
#coding=utf-8
from socket import *
import time

# 用来存储所有的新链接的socket
g_socketList = []

def main():
    serSocket = socket(AF_INET, SOCK_STREAM)
    serSocket.setsockopt(SOL_SOCKET, SO_REUSEADDR  , 1)
    localAddr = ('', 7788)
    serSocket.bind(localAddr)
    #可以适当修改listen中的值来看看不同的现象
    serSocket.listen(1000)
    #将套接字设置为非堵塞
    #设置为非堵塞后，如果accept时，恰巧没有客户端connect，那么accept会
    #产生一个异常，所以需要try来进行处理
    serSocket.setblocking(False)

    while True:

        #用来测试
        #time.sleep(0.5)

        try:
            newClientInfo = serSocket.accept()
        except Exception as result:
            pass
        else:
            print("一个新的客户端到来:%s"%str(newClientInfo))
            newClientInfo[0].setblocking(False)
            g_socketList.append(newClientInfo)

        # 用来存储需要删除的客户端信息
        needDelClientInfoList = []

        for clientSocket,clientAddr in g_socketList:
            try:
                recvData = clientSocket.recv(1024)
                if len(recvData)>0:
                    print('recv[%s]:%s'%(str(clientAddr), recvData))
                else:
                    print('[%s]客户端已经关闭'%str(clientAddr))
                    clientSocket.close()
                    g_needDelClientInfoList.append((clientSocket,clientAddr))
            except Exception as result:
                pass

        for needDelClientInfo in needDelClientInfoList:
            g_socketList.remove(needDelClientInfo)

if __name__ == '__main__':
    main()
```
##### 客户端
```python
#coding=utf-8
from socket import *
import random
import time

serverIp = raw_input("请输入服务器的ip:")
connNum = raw_input("请输入要链接服务器的次数(例如1000):")
g_socketList = []
for i in range(int(connNum)):
    s = socket(AF_INET, SOCK_STREAM)
    s.connect((serverIp, 7788))
    g_socketList.append(s)
    print(i)

while True:
    for s in g_socketList:
        s.send(str(random.randint(0,100)))

    # 用来测试用
    #time.sleep(1)
```

### select 版 - TCP 服务器
#### select 回显服务器
```python
import select
import socket
import sys


server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('', 7788))
server.listen(5)

inputs = [server, sys.stdin]

running = True

while True:

    # 调用 select 函数，阻塞等待
    readable, writeable, exceptional = select.select(inputs, [], [])

    # 数据抵达，循环
    for sock in readable:

        # 监听到有新的连接
        if sock == server:
            conn, addr = server.accept()
            # select 监听的socket
            inputs.append(conn)

        # 监听到键盘有输入
        elif sock == sys.stdin:
            cmd = sys.stdin.readline()
            running = False
            break

        # 有数据到达
        else:
            # 读取客户端连接发送的数据
            data = sock.recv(1024)
            if data:
                sock.send(data)
            else:
                # 移除select监听的socket
                inputs.remove(sock)
                sock.close()

    # 如果检测到用户输入敲击键盘，那么就退出
    if not running:
        break

server.close()
```
#### 另外一个服务器（包含 writeList）
```python
#coding=utf-8
import socket  
import Queue
from select import select  

SERVER_IP = ('', 9999)  

# 保存客户端发送过来的消息,将消息放入队列中  
message_queue = {}  
input_list = []  
output_list = []  

if __name__ == "__main__":  
    server = socket.socket()  
    server.bind(SERVER_IP)  
    server.listen(10)  
    # 设置为非阻塞  
    server.setblocking(False)  

    # 初始化将服务端加入监听列表  
    input_list.append(server)  

    while True:  
        # 开始 select 监听,对input_list中的服务端server进行监听  
        stdinput, stdoutput, stderr = select(input_list, output_list, input_list)  

        # 循环判断是否有客户端连接进来,当有客户端连接进来时select将触发  
        for obj in stdinput:  
            # 判断当前触发的是不是服务端对象, 当触发的对象是服务端对象时,说明有新客户端连接进来了  
            if obj == server:  
                # 接收客户端的连接, 获取客户端对象和客户端地址信息  
                conn, addr = server.accept()  
                print("Client %s connected! "%str(addr))  
                # 将客户端对象也加入到监听的列表中, 当客户端发送消息时 select 将触发  
                input_list.append(conn)  
                # 为连接的客户端单独创建一个消息队列，用来保存客户端发送的消息  
                message_queue[conn] = Queue.Queue()  

            else:  
                # 由于客户端连接进来时服务端接收客户端连接请求，将客户端加入到了监听列表中(input_list)，客户端发送消息将触发  
                # 所以判断是否是客户端对象触发  
                try:  
                    recv_data = obj.recv(1024)  
                    # 客户端未断开  
                    if recv_data:  
                        print("received %s from client %s"%(recv_data, str(addr)))  
                        # 将收到的消息放入到各客户端的消息队列中  
                        message_queue[obj].put(recv_data)  

                        # 将回复操作放到output列表中，让select监听  
                        if obj not in output_list:  
                            output_list.append(obj)  

                except ConnectionResetError:  
                    # 客户端断开连接了，将客户端的监听从input列表中移除  
                    input_list.remove(obj)  
                    # 移除客户端对象的消息队列  
                    del message_queue[obj]  
                    print("\n[input] Client %s disconnected"%str(addr))  

        # 如果现在没有客户端请求,也没有客户端发送消息时，开始对发送消息列表进行处理，是否需要发送消息  
        for sendobj in output_list:  
            try:  
                # 如果消息队列中有消息,从消息队列中获取要发送的消息  
                if not message_queue[sendobj].empty():  
                    # 从该客户端对象的消息队列中获取要发送的消息  
                    send_data = message_queue[sendobj].get()  
                    sendobj.send(send_data)  
                else:  
                    # 将监听移除等待下一次客户端发送消息  
                    output_list.remove(sendobj)  

            except ConnectionResetError:  
                # 客户端连接断开了  
                del message_queue[sendobj]  
                output_list.remove(sendobj)  
                print("\n[output] Client  %s disconnected"%str(addr))
```

### epoll 版 - TCP 服务器
```python
import socket
import select

# 创建套接字
s = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

# 设置可以重复使用绑定的信息
s.setsockopt(socket.SOL_SOCKET,socket.SO_REUSEADDR,1)

# 绑定本机信息
s.bind(("",7788))

# 变为被动
s.listen(10)

# 创建一个epoll对象
epoll=select.epoll()

# 测试，用来打印套接字对应的文件描述符
# print s.fileno()
# print select.EPOLLIN|select.EPOLLET

# 注册事件到epoll中
# epoll.register(fd[, eventmask])
# 注意，如果fd已经注册过，则会发生异常
# 将创建的套接字添加到epoll的事件监听中
epoll.register(s.fileno(),select.EPOLLIN|select.EPOLLET)


connections = {}
addresses = {}

# 循环等待客户端的到来或者对方发送数据
while True:

    # epoll 进行 fd 扫描的地方 -- 未指定超时时间则为阻塞等待
    epoll_list=epoll.poll()

    # 对事件进行判断
    for fd,events in epoll_list:

        # print fd
        # print events

        # 如果是socket创建的套接字被激活
        if fd == s.fileno():
            conn,addr=s.accept()

            print('有新的客户端到来%s'%str(addr))

            # 将 conn 和 addr 信息分别保存起来
            connections[conn.fileno()] = conn
            addresses[conn.fileno()] = addr

            # 向 epoll 中注册 连接 socket 的 可读 事件
            epoll.register(conn.fileno(), select.EPOLLIN | select.EPOLLET)


        elif events == select.EPOLLIN:
            # 从激活 fd 上接收
            recvData = connections[fd].recv(1024)

            if len(recvData)>0:
                print('recv:%s'%recvData)
            else:
                # 从 epoll 中移除该 连接 fd
                epoll.unregister(fd)

                # server 侧主动关闭该 连接 fd
                connections[fd].close()

                print("%s---offline---"%str(addresses[fd]))
```

### 协程
#### 简单实现
```python
import time

def A():
    while True:
        print("----A---")
        yield
        time.sleep(0.5)

def B(c):
    while True:
        print("----B---")
        c.next()
        time.sleep(0.5)

if __name__=='__main__':
    a = A()
    B(a)
```
#### greenlet 版
```bash
sudo pip install greenlet
```
```python
#coding=utf-8

from greenlet import greenlet
import time

def test1():
    while True:
        print "---A--"
        gr2.switch()
        time.sleep(0.5)

def test2():
    while True:
        print "---B--"
        gr1.switch()
        time.sleep(0.5)

gr1 = greenlet(test1)
gr2 = greenlet(test2)

#切换到gr1中运行
gr1.switch()
```
#### gevent 版
##### gevent 的使用
```python
#coding=utf-8

#请使用python 2 来执行此程序

import gevent

def f(n):
    for i in range(n):
        print gevent.getcurrent(), i

g1 = gevent.spawn(f, 5)
g2 = gevent.spawn(f, 5)
g3 = gevent.spawn(f, 5)
g1.join()
g2.join()
g3.join()
```
##### gevent 切换执行
```python
import gevent

def f(n):
    for i in range(n):
        print gevent.getcurrent(), i
        #用来模拟一个耗时操作，注意不是time模块中的sleep
        gevent.sleep(1)

g1 = gevent.spawn(f, 5)
g2 = gevent.spawn(f, 5)
g3 = gevent.spawn(f, 5)
g1.join()
g2.join()
g3.join()
```
##### gevent 并发下载器
```python
#coding=utf-8

from gevent import monkey; 
import gevent
import urllib2

#有IO才做时需要这一句
monkey.patch_all()

def myDownLoad(url):
    print('GET: %s' % url)
    resp = urllib2.urlopen(url)
    data = resp.read()
    print('%d bytes received from %s.' % (len(data), url))

gevent.joinall([
        gevent.spawn(myDownLoad, 'http://www.baidu.com/'),
        gevent.spawn(myDownLoad, 'http://www.itcast.cn/'),
        gevent.spawn(myDownLoad, 'http://www.itheima.com/'),
])
```
##### gevent 版 - TCP 服务器
```python
import sys
import time
import gevent

from gevent import socket,monkey
monkey.patch_all()

def handle_request(conn):
    while True:
        data = conn.recv(1024)
        if not data:
            conn.close()
            break
        print("recv:", data)
        conn.send(data)


def server(port):
    s = socket.socket()
    s.bind(('', port))
    s.listen(5)
    while True:
        cli, addr = s.accept()
        gevent.spawn(handle_request, cli)

if __name__ == '__main__':
    server(7788)
```

### 相关链接
[网络笔记 1](/2019/01/08/network-note-1/)

### 编辑记录

创建：01-08-2019 22:55 周二<br />
编辑：01-09-2019 22:00 周三<br />
编辑：01-12-2019 18:47 周六<br />
