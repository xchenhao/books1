## Python 笔记 2

```python
import this
```

python 家族：

- C 语言实现：CPython，扩展可用 C/C++
- Java 实现：Jython，扩展可用 Java
- .Net 实现：IronPython，扩展可用 C#

python 能干什么？

- 科学计算
- 图形化开发
- 系统脚本
- web 服务器
- 网络爬虫
- 服务器集群自动化运维

ipython 解释器

```python
import requests
res=requests.get("http://www.baidu.com")
savefile=open("baidu.html", "w")
savefile.write(res.content)
savefile.close()
%history
```

```shell
cat baidu.html
```

```python
a = 123
b = 123
c = 123
print a
print b
print c
b = 789
print a
print b
print c
id(a)
id(b)
id(c)


a=1
c=2
id(a)
id(c)
e=123
id(e) #123 地址空间单元没有马上释放
def e
f=123
id(f)
```

```shell
# 中文的话要加上指定编码
# # -- coding:UTF-8 -- 或者 #coding=utf-8
vim test.py
cat test.py
  #! /usr/bin/python
  #coding=utf-8
  
  import requests
  res=requests.get("http://www.baidu.com")
  savefile=open("baidu.html", "w")
  savefile.write(res.content)
  savefile.close()
  # 二三四五六

```

### 简单函数

```python
def add(x, y):
  z = x + y
  return z

res = add(3, 5)
print res
# 8
```

### 局部变量与全局变量
```python
# 局部变量作用域覆盖全局变量
def p_num():
    num=5
    print num

num=10
p_num()
print num
# 5 10
```
```python
# 函数内有局部变量定义，解释器不使用全局变量，局部变量的定义晚于被引用，报错
def p_num:
    print num
    num=5
    print num

num=10
p_num()
print num
# 结果出错
```
```python
# 函数内部可以直接访问全局变量
def p_num():
    print num

num=10
p_num()
print num
# 10 10
```
```python
# 函数内部修改全局变量，使用 global 关键字
def p_num():
    global num
    print num
    num = 20
    print num

num=10
p_num()
print num
```

### 特殊变量
```
_xxx from module import (无法导入）
__xxx__ 系统定义的变量
__xxx 类的本地变量
```
### 表达式
#### 算术表达式
```
+a
-a
a + b
a - b
a ** b
a * b
a / b 真正除，浮点数保留小数
a // b  a除以b，向下取整
a % b
```
#### 逻辑表达式
```
not a
a and b
a or b
a is b  a和b是同一个对象
a is not b  a和b不是同一个对象
```
#### 关系表达式
```
==
!=
<> 废弃
>
<
>=
<=
```
#### 位运算
```
~a
a << n
a >> n
a & b
a | b
a ^ b
```
### 语法格式
缩进表示关系，函数、分支、循环语句后面带 ":"
### 分支语句
```python
a = 10
b = 5

if a > b:
    print "aaa"
    # print("aaa") python3 写法
    if a == 10:
        print "a=10"
else
    print "bbb"

if a > b:
    print "a>b"
elseif a==b:
    print "a==b"
else:
    print "a<b"

```
### 循环语句
```
while 判断条件:
    执行语句

for iterating_var in sequence:
    执行语句
```
```python
var = 1
while var == 1:
    num = raw_input("Enter a number: ")
    print "You enterd: %d", num
    
    print "Good bye!"
```
```python
for letter in 'Python':
    print "Current Letter: ", letter

fruits = ['banana', 'apple', 'mango']
for fruit in fruits:
    print 'Current fruit: ', fruit
```

在 Python 中，for ... else 表示这样的意思：for 中的语句和普通的没有区别，else 中的语句会在循环正常执行完（即 for 不是通过 break 跳出而中断的）的情况下执行，while ... else 也是一样

```python
count = 0
while count < 5:
    print(count, " is less than 5")
    count = count + 
else:
    print(count, " is not less than 5")


fruits = ['banana', 'apple', 'mango']
for fruit in fruits:
    print "Current fruit: ", fruit
    if fruit == 'apple':
        break
else:
    print "ok"
```

### list 列表
```python
demolist = [1, 2, 3, 4]
type(demolist)
#list

print demolist
#[1, 2, 3, 4]

demolist[0]
#1

demolist[1]=10
print demolist
#[1, 10, 3, 4]

del demolist[2]
print demolist
#[1, 10, 4]

demolist.pop()
#4

demolist
#[1, 10]

demolist.append(20)
demolist
#[1, 10, 20]

demolist.append('hello')
demolist.append(1,23)
demolist.append([1, 3, 'b'])

len(demolist)
#7

#列表拼接
demolist + [100, 200]

#相当于对其中元素拷贝一份
demolist * 2

20 in demolist
#True

212 in demolist
#False

testlist=['sp', 'qq', 'am']
testlist[2]
#am
testlist[-2]
#qq
testlist[1:]
#['qq', 'am']
testlist[0:1]
#['sp', 'qq']
```
```
# 列表函数 & 方法
函数
cmp(list1, list2)
len(list)
max(list)
min(list)
list(seq) 将元组转换为列表

方法
list.append(obj)
list.count(obj) 统计某个元素在列表中出现的次数
list.extend(seq) 在列表末尾一次性追加另一个序列中的多个值（用新列表扩展原来的列表）
list.index(obj)
list.insert(index, obj)
list.pop() 移除列表中的一个元素（默认最后一个元素）
list.remove(obj)
list.reverse()
list.sort([func])
```

### 元组
元组与列表类似，不同之处在于元组的元素不能修改。也可以进行分片和连接操作。元组使用小括号，列表使用方括号。相当于只读的列表

```python
aTuple=('et', 77, 99.9)
aTuple[2]
#99.9
aTuple[1:2]
#(77, 99.9)
```

### 字典
映射数据类型，由 key-value 构成，类似于关联数组或哈希表。key 一般以数字和字符串居多，值则可以是任意类型的 python 对象，如其他容器模型。字典元素用大括号 {}。

```python
dict = {'Alice': '2341', 'Beth': '9102', 'Cecil': '3258}

dict['Beth']
#9102

for key in dict
    print key, dict[key]

dict.keys()
dict.values()

dict['Alice']=100
del dict['Cecil']

dict.clear()
del dict

```

```
cmp(dict1, dict2)
len(dict)
str(dict)
type(variable)

dict.clear()
dict.copy()
dict.fromkeys()
dict.get(key, default=None)
dict.has_key(key)
dict.items()
dict.keys()
dict.setdefault(key, default=None)
dict.update(dict2)
dict.values()

```


## 字符串处理函数

```python
var1 = 'Hello world1'
var2 = "Python Programing"
var3 = '''hello world'''
var4 = """hello world"""

#三引号允许一个字符串跨多行，字符串中可以包含换行符、制表符以及其他特殊字符

type(var1)
#str

print "hello \"dear\""
print '''hello "dear"'''

var1[0]
#H
var1[-2]
#d

var1[0:4]
#Hello

id(var1)


var1='test'
id(var1)
#更新不是在原地址空间，而是开辟了一个新的地址空间
```

```
+ 字符串拼接    a + b：HelloPython
* 重复输出字符串    a * 2：HelloHello
[n] 通过索引获取字符    a[1]：e
[m:n] 截取字符串中的一部分    a[1:4]：ell
in 成员运算符    'e' in a：True
not in
r/R 原始字符串    print 'hello\n\n'
                print r'hello\n\n'
                
print "My name is %s and weight and is %d kg!" % ("Zara", 60)
```

#### 字符串各种函数
```python
mystr = 'hello world test'

mystr.find(str, start=0, end=len(mystr))
mystr.index(str, start=0, end=len(mystr)) #找不到时报异常
mystr.count(str, start=0, end=len(mystr))

help(mystr.find)

mystr.decode(encoding='UTF-8', errors='strict')
mystr.encode(encoding='UTF-8', errors='strict')
mystr.replace(str1,. str2, mystr.count(str1))
mystr.split(str=" ", 2)


type(mystr)
#str
mystr.decode(encoding='UTF-8')
#u'hello world test'
s2=mystr.decode(encoding='UTF-8')
type(s2)
#unicode

mystr.captitalize()
mystr.center(width)

mystr.replace('test', 'yes')


mystr.split(' ')
mylist=mystr.split(' ', 2)

type(mylist)

mylist.sort()

mystr.center(50)

mystr.endswith('test')
mystr.startswith('hello')

mystr.expandtabs()

mystr.isalnum()
mystr.isalpha()

mystr.isdecimal()
mystr.isdigit()

mystr.islower()
mystr.isnumeric()
mystr.isspace()
mystr.istitle()
mystr.isupper()

mystr.lower()
mystr.upper()

mystr.join()
mystr.ljust(width)
mystr.rjust(width)
mystr.lstrip()
mystr.rstrip()
mystr.rfind(str, start=0, end=len(mystr))
mystr.partition(str)
mystr.rpartition(str)


mystr.splitlines()
mystr.zfill(width)
```

```
def functionname (paramters):
    "注释"
    function_suite
    return [expression]
```

test.py

```python
#! /usr/bin/python

def printname(str):
    "print your name by str"
    print str
    return
```
```python
import test
test.printname('cpp')
help(test.printname)
```
### 按值/引用传参
```python
#! /usr/bin/python

def changeme(mylist):
    "修改传入的列表"
    mylist.append([1, 2, 3, 4])
    print "函数内取值：", mylist
    return
```

### 参数
test.py

```python
#! /usr/bin/python
# coding=utf-8

def changeme(a, b)
    print a
    return
```

```python
import test
test.changeme(1, 2)
#1

#命名参数
test.changeme(b=1, a=2)
#2
```

```python
#! /usr/bin/python
# coding=utf-8

def arglist(a, *b)
    print a
    print b
    return
    
def arglist2(a, **b)
    print a
    print b
    return
```

```python
import test
test.arglist(1, 2, 3, 4, 5, 6, 7, 8, 9)
#1
#(2, 3, 4, 5, 6, 7, 8, 9)

test.arglist2('aa', x=12, y=34)
#aa
#{'x': 12, 'y': 34}
```

### 匿名函数

```python
sum = lambda a, b: a+b
sum(10, 20)
#30
type(sum)
#function
```

### return 语句
```python
#! /usr/bin/python
# coding=utf-8

def arglist():
    print "call arglist"
    return 1, 2, 3, 4, 5, 6
```

```python
import test
res=test.arglist()
print res
#(1, 2, 3, 4, 5, 6)

```




## 面向对象

```
class ClassName:
    '类的帮助信息'  #类文档字符串
    类变量         #类体 class_suite 由类成员，方法，数据属性组成
    def __init__(self, parameters):
    def 函数(self, ...)
    ... ...
```

demo.py

```python
#! /usr/bin/python

class Employee:
    '''
    this is a test demo class
    
    '''
    
    classStr = "it is a test class"
    
    def __init__(self, name, pay):
        self.name = name
        self.pay = pay
    
    def hello(self):
        '''
        say hello
        '''
        print self.name
        print "say hello"
```

```python
import demo
worker = demo.Employee('xiaoming', 100000)
type(worker)
#instance

worker.hello()
#xiaoming
#say hello

help(worker)

```

```
getattr()
hasattr()
setattr()
delattr()
```

### 内置类属性
```
__dict__
__doc__
__name__
__module__
__bases__
```

### 继承
demo.py

```python
#! /usr/bin/python

class Parent:
   parentAttr = 100
   def __init__(self):
       print "调用父类构造函数"
   def parentMethod(self):
       print "调用父类方法"
   def setAttr(self, attr):
       Parent.parentAttr = attr
   def getAttr(self):
       print "父类属性：", Parent.parentAttr

class Child(Parent):
   def __init__(self):
       Parent()
       print "调用子类构造方法"
   def childMethod(self):
       print "调用子类方法 child method"
```


```python
from demo import Parent, Child
p1=Parent()
p1.parentMethod()
p1.getAttr()
p1.setAttr(200)
p1.getAttr()

p2 = Child()
p2.childMethod()
p2.parentMethod()
p2.getAttr()
```

### 运算符重载
```python
#! /usr/bin/python

class Vector:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def  __str__(self):
        return 'Vector (%d, %d)' % (self.a, self.b)

    def  __add__(self, other):
        return Vector(self.a + other.a, self.b + other.b)

v1 = Vector(2, 10)
v2 = Vecotr(5, -2)
print v1 + v2
#Vector(7, 8)

```

```
__private_attrs 类的私有属性
    两个下划线开头，声明该属性为私有

__private_method 类的私有方法

```

```python

p1 = Vector()
dir(p1)
print p1._Parent__six
```

```python
class Student(Object):

    '类的方法'
    @classmethod
    def showClass():
        print 'class'

```

```python
import module1, module2
module1.method1()

from demo import Parent, Child

from demo import *

import os
#PYTHONPATH
```

```python
from demo import *

dir(Parent)
help(Parent)

globals() #全局变量
locals()  #局部变量

```

### 模块发布
```
setup.py
suba/
    aa.py
    bb.py
    __init__.py
subb/
    cc.py
    dd.py
    __init.py

#setup.py
from distutils.core import setup

setup(name="xwp", version="1.0", description="xwp's module", author="xingwenpeng", py_modules=['suba.aa', 'suba.bb', 'subb.cc', 'subb.dd'])


$ python setup.py build
$ python setup.py sdist
# 生成一个压缩包 dist/xwp-1.0-tar.gz
$ cp dist/xwp-1.0-tar.gz ~/
$ cd ~/
$ tar zxvf xwp-1.0-tar.gz
$ cd xwp-1.0
$ python setup.py install

#python
import suba.aa
suba.aa.showaa()

```

```
Python 核心编程
Python Cookbook 中文版
Python 学习手册

```



## 文件操作

```python
buf=raw_input()
print buf
type(buf)
#str

#yourname=raw_input('plz input your name: ')
yourname=input('plz input your name: ')
print yourname

fp=open('hello.txt', 'w')
fp.write('hello world c++')
fp.close()

fp=open('hello.txt', 'r')
buf=fp.read()
fp.close()


fp=open('hello.txt', 'r+')
fp.mode
#r+
fp.name
#hello.txt
fp.closed
#False
fp.close()
fp.closed
#True

fp.open('hello.txt', 'r+')
fp.mode
buf=fp.read(100)
print buf
fp.write('and it')
fp.close()

fp.open('hello.txt', 'r+')
buf=fp.read() #指针跑到结尾
print buf
fp.write('abc') #结尾处添加
fp.flush()
fp.seek(0) #指针回到开头
buf=fp.read() #读到结尾，指针在结尾
print buf

help(fp)

#读写共用一个指针

#apt-get install ipython
```

```
文件操作模式
r
w 写，如果文件不存在则创建，如果文件存在则截断文件
a

r+ 读写
w+ 读写，如果文件不存在则创建，如果文件存在则截断文件
a+ 追加打开，读写，文件不存在则创建

```

### 应用案例

```python

import Image, ImageFont, ImageDraw

im = Image.open('./xwp.jpg')
draw = ImageDraw.Draw(im)

fontsize = min(im.siz) / 4
font = ImageFont.truetype('KhmerOS.ttf', fontsize)

draw.text((im.size[0] - fontsize, 0), '8', font=font, fill=(256, 0, 0))

im.save('./aaa.jpg', 'jpeg')
```
eog

%history

```python
import requests
r=requests.get('http://baidu.com')
print r.url
print r.text
print r.content


```

nc 123.57.211.212 9090

### 编辑记录

创建：01-01-2019 16:10 周二<br />






























