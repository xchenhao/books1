## Python 笔记 1

### 字符集

```python
# 推荐第二种

#coding=utf-8

# -*- coding:utf-8 -*-
```

### 注释

```python
# 单行注释

'''
多行注释
'''

"""
多行注释
"""
```

```python
import random

random.randint(0, 2)

a = 100
type(a)  # 获取变量类型


raw_input("请输入密码：")  # 把用户输入的任何值都作为字符串来对待
input("请输入密码：")  # 接受的输入必须是表达式

# python3 中只有 input() 没有 raw_input()
# python3 中的 input() 与 python2 中的 raw_input() 功能一样

```

### print()

```python
print("哈哈")

age = 10
print("我今年 %d 岁" % age)

age = 18
name = "xiaohua"
print("我的姓名是 %s, 年龄是 %d" % (name, age))

print("12345\n") # 换行

```

| 格式符号 | 转换 |
| :--- | :--- |
| %c | 字符 |
| %s | 通过 str() 字符串转换来格式化 |
| %i | 有符号十进制整数 |
| %d | 有符号十进制整数 |
| %u | 无符号十进制整数 |
| %o | 八进制整数 |
| %x | 十六进制整数（小写字母） |
| %X | 十六进制整数（大写字母） |
| %e | 索引符号（小写 e） |
| %E | 索引符号（大写 E） |
| %f | 浮点实数 |
| %g | ％f 和 ％e 的简写 |
| %G | ％f 和 ％E 的简写 |


### 变量类型

- 数值型 Numbers
    + int
    + long
    + float
    + complex
- 布尔型 Boolean
    + True
    + False
- 字符串 String
- 列表 List
- 元组 Tuple
- 字典 Dictionary

| 常用的数据类型转换函数 | 说明 |
| :--- | :--- |
| int(x [,base ])| 将 x 转换为一个整数 |
| long(x [,base ])| 将x转换为一个长整数 |
| float(x ) | 将x转换到一个浮点数 |
| complex(real [,imag ])	| 创建一个复数 |
| str(x ) | 将对象 x 转换为字符串 |
| repr(x ) | 将对象 x 转换为表达式字符串 |
| eval(str ) | 用来计算在字符串中的有效Python表达式,并返回一个对象 |
| tuple(s ) | 将序列 s 转换为一个元组 |
| list(s ) | 将序列 s 转换为一个列表 |
| chr(x ) | 将一个整数转换为一个字符 |
| unichr(x ) | 将一个整数转换为Unicode字符 |
| ord(x ) | 将一个字符转换为它的整数值 |
| hex(x ) | 将一个整数转换为一个十六进制字符串 |
| oct(x ) | 将一个整数转换为一个八进制字符串 |


### 关键字

```
import keyword
keyword.kwlist

and     as      assert     break     class      continue    def     del
elif    else    except     exec      finally    for         from    global
if      in      import     is        lambda     not         or      pass
print   raise   return     try       while      with        yield
```

### 运算符

| 算术运算符 | 赋值运算符 | 关系运算符 | 逻辑运算符 |
| --- | --- | --- | --- |
| + | = | == | and |
| - | += | <> | or |
| * | -= | != | not |
| / | *= | <= | |
/ % | /= | >= | |
| // 取整除 9//2 => 4, 9.0//2.0 => 4.0 | %= | | |
| ** | **= | | |
| | //= | | |


### 判断

```python
if 条件:
  # ... ...


if 条件:
  # ... ...
else:
  # ... ...


if 条件:
elif 条件2:
  # ... ...
else:
  # ... ...
```


### 循环

```python
while 条件:
    # ... ...


for 临时变量 in 列表或者字符串等:
    循环满足条件时执行的代码
else:
    循环不满足条件时执行的代码

# break/continue

```

### 字符串常见操作

```python
name = 'abcdef'  # 或 name = "abcdef"
print(name[2])  # c
print(name[:3])  # abc

# 切片是指对操作的对象截取其中一部分的操作。字符串、列表、元组都支持切片操作。
# 切片的语法：[起始:结束:步长]
# 注意：选取的区间属于左闭右开型，即从"起始"位开始，到"结束"位的前一位结束（不包含结束位本身)。

# 思考：给定一个字符串 longStr, 请反转字符串
```

```python
mystr = 'hello world'

# mystr.find(str, start=0, end=len(mystr))
# mystr.rfind(str, start=0,end=len(mystr))
# 检测 wor 是否包含于 mystr 当中
# 如果是则返回开始处的索引值，否则返回 -1
mystr.find('wor') 

# mystr.index(str, start=0, end=len(mystr))
# mystr.rindex( str, start=0,end=len(mystr))
# 跟 find() 方法一样，只不过如果 str 不在 mystr中会报一个异常.

# mystr.count(str, start=0, end=len(mystr))
# 返回 str 在 start 和 end 之间 在 mystr 里面出现的次数

# mystr.replace(str1, str2, mystr.count(str1))
# 把 mystr 中的 str1 替换成 str2,如果 count 指定，则替换不超过 count 次.

# 以 str 为分隔符切片 mystr，如果 maxsplit 有指定值，则仅分隔 maxsplit 个子字符串
mystr.split(str=" ", 2) 

# 把 mystr 以 str 分割成三部分,str 前，str 和 str 后
mystr.partition(str).
mystr.rpartition(str)

# 按照行分隔，返回一个包含各行作为元素的列表
mystr.splitlines()

# mystr 中每个字符后面插入 str,构造出一个新的字符串
mystr.join(str)

# 把字符串的第一个字符大写
mystr.capitalize()

# 把字符串的每个单词首字母大写
mystr.title() # Hello World

# 检查字符串是否是以 obj 开头, 是则返回 True，否则返回 False
mystr.startswith("obj")

# 检查字符串是否以 obj 结束，如果是返回 True，否则返回 False.
mystr.endswith("obj")

# 转换 mystr 中所有大写字符为小写
mystr.lower()

# 转换 mystr 中的小写字母为大写
mystr.upper()

# 返回一个原字符串左对齐，并使用空格填充至长度 width 的新字符串
mystr.ljust(width)
mystr.rjust(width)
mystr.center(width)

# 删除mystr字符串两端的空白字符
mystr.lstrip()
mystr.rstrip()
mystr.strip()

# 如果 mystr 所有字符都是字母 则返回 True,否则返回 False
mystr.isalpha() 

# 如果 mystr 只包含数字则返回 True 否则返回 False.
mystr.isdigit()

# 如果 mystr 所有字符都是字母或数字则返回 True,否则返回 False
mystr.isalnum()  

# 如果 mystr 中只包含空格，则返回 True，否则返回 False
mystr.isspace()   

# 思考：
# 给定一个字符串 longStr，返回使用空格或者 '\t' 分割后的倒数第二个子串  
```

### 列表操作

```python
# 列表中的元素可以是不同类型的
namesList = ['xiaoWang','xiaoZhang','xiaoHua']
testList = [1, 'a']

print(namesList[0])

for name in namesList:
    print(name)

length = len(namesList)
i = 0
while i<length:
    print(namesList[i])
    i+=1

# 增        
nameList.append('dawang')

list2 = ['hello', 'world']
nameList.extend(list2) // ['xiaoWang','xiaoZhang','xiaoHua', 'hello', 'world'] 

# insert(index, object)
nameList.insert(1, 'abc')
// ['xiaoWang', 'abc', 'xiaoZhang','xiaoHua', 'hello', 'world']

# 改
nameList[1] = 'great'
// ['xiaoWang', 'great', 'xiaoZhang','xiaoHua', 'hello', 'world']

# 查
// in, not in
if 'great' in nameList:
    print("yes")

// index, count
a = ['a', 'b', 'c', 'a', 'b']
a.index('a', 1, 3) // 左闭右开，找不到出错
a.index('a', 1, 4) // 3
a.count('b') // 2
a.count('d') // 0

# 删
// del, pop, remove

del nameList[2]
nameList.pop()
nameList.remove('hello')

# 排序
// sort, reverse
a = [1, 4, 2, 3]
a.reverse() // [3, 2, 4, 1]
a.sort() // [1, 2, 3, 4]
a.sort(reverse=True) // [4, 3, 2, 1]

```

### 元组

```python
# 元组的元素不能修改
tuple=('hello', 100, 3.14)
print(tuple[0])

a = ('a', 'b', 'c', 'a', 'b')
a.index('a', 1, 3)  # 报错
a.index('a', 1, 4)  # 3
a.count('b')  # 2
a.count('d')
```

### 字典

```python
info = {'name':'班长', 'id':100, 'sex':'f', 'address':'地球亚洲中国北京'}
print(info['name'])
print(info['age'])  # 访问不存在的键 报错
# 在我们不确定字典中是否存在某个键而又想获取其值时，可以使用get方法，还可以设置默认值：

age = info.get('age')
age  # 'age' 键不存在，所以 age 为 None
print(type(age))  #<type 'NoneType'>

age = info.get('age', 18)  # 若info中不存在'age'这个键，就返回默认值18
print(age)  # 18


# 修改
info['id'] = 99
# 新增
info['weight'] = 120
# 清空/删除
info.clear() # 清空
del info['name']
del info # 删除整个字典


dict = {"name": 'zhangsan', "sex": 'm'}
len(dict)  # 2
dict.keys()  # ['name', 'sex']
dict.values()  # ['zhangsan', 'm']
dict.items()  # [('name', 'zhangsan'), ('sex', 'm')]
dict.has_key('name')  # True

for key, value in dict.items():
    print(key, value)


chars = ['a', 'b', 'c', 'd']
for key, value in enumerate(chars):
    print key, value


```

```
字符串/列表/元组：+/*/in/not in
字典：in/not in/  in 在对字典操作时，判断的是字典的键

print("-"*30)

内置函数
cmp(item1, item2)  cmp在比较字典数据时，先比较键，再比较值
len(item)
max(item)  在比较字典数据时，只比较键
min(item)
del(item) // del a[0] 或 del(a[0])

引用
a = [1, 2]
b = a
id(a)  # 139935018544808
id(b)  # 139935018544808
a.append(3)
a  # [1, 2, 3]
id(a)  # 139935018544808
id(b)  # 139935018544808 注意a与b始终指向同一个地址


可变类型，值可以改变：

列表 list
字典 dict

不可变类型，值不可以改变：
数值类型 int, long, bool, float
字符串 str
元组 tuple
```


### 函数

```python
def test(a,b):
     "用来完成对2个数求和"
     print("%d"%(a+b))

test(11,22)  # 33

help(test)  # 查看函数的相关说明



a = 200    
def test():
    globa a
    a = 300

print(a)  # 300

li = [1,]
def f2():
     li.append(1)
     print li

f2()  # [1, 1]
li  # [1, 1]



返回多个值(本质是利用了元组)
def divid(a, b):
     shang = a//b
     yushu = a%b 
     return shang, yushu

sh, yu = divid(5, 2)
sh  # 5
yu  # 1



缺省参数
def printinfo( name, age = 35 ):
   # 打印任何传入的字符串
   print "Name: ", name
   print "Age ", age

printinfo(name="miki" )
printinfo( age=9,name="miki" )



不定长参数
基本语法如下：
    def functionname([formal_args,] *args, **kwargs):
       "函数_文档字符串"
       function_suite
       return [expression]
加了星号（*）的变量args会存放所有未命名的变量参数，args为元组；
而加**的变量kwargs会存放命名参数，即形如key=value的参数， kwargs为字典。


lambda 函数
lambda [arg1 [,arg2,.....argn]]:expression

sum = lambda arg1, arg2: arg1 + arg2
#调用sum函数
print "Value of total : ", sum( 10, 20 )
print "Value of total : ", sum( 20, 20 )


函数作为参数传递
def fun1(a, b, opt):
     print "a =", a
     print "b =", b
     print "result =", opt(a, b)

fun1(1, 2, lambda x,y:x+y)
# a = 1
# b = 2
# result = 3

  
stus = [
    {"name":"zhangsan", "age":18}, 
    {"name":"lisi", "age":19}, 
    {"name":"wangwu", "age":17}
]
按 age 排序：
stus.sort(key = lambda x:x['age'])
stus
'''
[
  {'age': 17, 'name': 'wangwu'},
  {'age': 18, 'name': 'zhangsan'},
  {'age': 19, 'name': 'lisi'}
]
'''
```


### 文件操作

```python

f = open('test.txt', 'w')  # 打开一个已经存在的文件，或者创建一个新文件
f.write('hello world, i am here!')
f.close()  # 关闭这个文件


f = open('test.txt', 'r')
content = f.read()
print(content)
f.close()
# 使用read(num)可以从文件中读取数据，num表示要从文件中读取的数据的长度（单位是字节），如果没有传入num，那么就表示读取文件中所有的数据
# 如果 open 是打开一个文件，那么可以不用写打开的模式，即只写 open('test.txt')
# 如果使用读了多次，那么后面读取的数据是从上次读完后的位置开始的


f = open('test.txt', 'r')
content = f.readlines()
# readlines可以按照行的方式把整个文件中的内容进行一次性读取，并且返回的是一个列表，其中每一行的数据为一个元素

f = open('test.txt', 'r')
content = f.readline()
print("1:%s"%content)
content = f.readline()
print("2:%s"%content)
f.close()


f = open("test.txt", "r")
str = f.read(3)
print "读取的数据是 : ", str

position = f.tell()  # 查找当前位置
print "当前文件位置 : ", position
str = f.read(3)
print "读取的数据是 : ", str
position = f.tell()  # 查找当前位置
print "当前文件位置 : ", position
f.close()


"""
如果在读写文件的过程中，需要从另外一个位置进行操作的话，可以使用seek()

seek(offset, from)有2个参数

offset:偏移量
from:方向
0:表示文件开头
1:表示当前位置
2:表示文件末尾
"""




import os

os.rename("毕业论文.txt", "毕业论文-最终版.txt")
os.remove("text.txt")
    
os.mkdir("test")
os.getcwd() # 获取当前目录
os.chdir("../") # 改变当前目录
os.listdir("./") # 获取目录列表
os.rmdir("test") # 删除文件夹

```

```python
# demo: 复制文件案例

#coding=utf-8

oldFileName = input("请输入要拷贝的文件名字:")
oldFile = open(oldFileName,'r')

# 如果打开文件
if oldFile:

    # 提取文件的后缀
    fileFlagNum = oldFileName.rfind('.')
    if fileFlagNum > 0:
        fileFlag = oldFileName[fileFlagNum:]

    # 组织新的文件名字
    newFileName = oldFileName[:fileFlagNum] + '[复件]' + fileFlag

    # 创建新文件
    newFile = open(newFileName, 'w')

    # 把旧文件中的数据，一行一行的进行复制到新文件中
    for lineContent in oldFile.readlines():
        newFile.write(lineContent)

    # 关闭文件
    oldFile.close()
    newFile.close()
    
    

# demo: 把位置设置为：从文件开头，偏移5个字节

# 打开一个已经存在的文件
f = open("test.txt", "r")
str = f.read(30)
print "读取的数据是 : ", str

# 查找当前位置
position = f.tell()
print "当前文件位置 : ", position

# 重新设置位置
f.seek(5,0)

# 查找当前位置
position = f.tell()
print "当前文件位置 : ", position

f.close()


# demo:把位置设置为：离文件末尾，3字节处

# 打开一个已经存在的文件
f = open("test.txt", "r")

# 查找当前位置
position = f.tell()
print "当前文件位置 : ", position

# 重新设置位置
f.seek(-3,2)

# 读取到的数据为：文件最后3个字节数据
str = f.read()
print "读取的数据是 : ", str

f.close()




# demo: 批量在文件名前加前缀

#coding=utf-8

import os

funFlag = 1  # 1表示添加标志  2表示删除标志
folderName = './renameDir/'

# 获取指定路径的所有文件名字
dirList = os.listdir(folderName)

# 遍历输出所有文件名字
for name in dirList:
    print name

    if funFlag == 1:
        newName = '[东哥出品]-' + name
    elif funFlag == 2:
        num = len('[东哥出品]-')
        newName = name[num:]
    print newName

os.rename(folderName+name, folderName+newName)
```


### OOP

```python
# 定义类
class Car:
    # 方法
    
    #初始化函数，用来完成一些默认的设定
    def __init__(self):
        self.wheelNum = 4
        self.color = '蓝色'
        
        
    def getCarInfo(self):
        print('车轮子个数:%d, 颜色%s'%(self.wheelNum, self.color))

    def move(self):
        print("车正在移动...")
        
            # 鸣笛
    def toot(self):
        print("车在鸣笛...嘟嘟..")

# 说明：
# 定义类时有 2 种：新式类和经典类，上面的 Car 为经典类，如果是 Car(object) 则为新式类
# 类名的命名规则按照"大驼峰"


# 创建一个对象，并用变量 BMW 来保存它的引用
BMW = Car()
BMW.color = '黑色'
BMW.wheelNum = 4 #轮子数量
BMW.move()
BMW.toot()
print(BMW.color)
print(BMW.wheelNum)  



# 定义汽车类
class Car:

    def __init__(self, newWheelNum, newColor):
        self.wheelNum = newWheelNum
        self.color = newColor

    def move(self):
        print('车在跑，目标:夏威夷')

# 创建对象
BMW = Car(4, 'green')

print('车的颜色为:%s'%BMW.color)
print('车轮子数量为:%d'%BMW.wheelNum)
print(BMW)  # 会显示出 BMW 对象在内存中的地址

# __init__(self) 中的 self 参数，不需要开发者传递，python 解释器会自动把当前的对象引用传递进去
# 在 python 中方法名如果是__xxxx__()的，那么就有特殊的功能，因此叫做“魔法”方法



class Car:

    def __init__(self, newWheelNum, newColor):
        self.wheelNum = newWheelNum
        self.color = newColor

    def __str__(self):
        msg = "嘿。。。我的颜色是" + self.color + "我有" + int(self.wheelNum) + "个轮胎..."
        return msg

    def move(self):
        print('车在跑，目标:夏威夷')


BMW = Car(4, "白色")
print(BMW)
# 当使用print输出对象的时候，只要自己定义了__str__(self)方法，那么就会打印从在这个方法中return的数据



# 1. 直接通过对象名修改
    SweetPotato.cookedLevel = 5
# 2. 通过方法间接修改
    SweetPotato.cook(5)
# 通过使用方法来进行修改，就可以在方法中进行数据合法性的检查

class People(object):

    def __init__(self, name):
        self.__name = name

    def getName(self):
        return self.__name

    def setName(self, newName):
        if len(newName) >= 5:
            self.__name = newName
        else:
            print("error:名字长度需要大于或者等于5")
            
            
# 如果在属性名前面加了2个下划线'__'，则表明该属性是私有属性，否则为公有属性（方法也是一样，方法名前面加了2个下划线的话表示该方法是私有的，否则为公有的）



# 当删除一个对象时，python解释器也会默认调用一个方法，这个方法为__del__()方法
import time
class Animal(object):

    # 初始化方法
    # 创建完对象后会自动被调用
    def __init__(self, name):
        print('__init__方法被调用')
        self.__name = name


    # 析构方法
    # 当对象被删除时，会自动被调用
    def __del__(self):
        print("__del__方法被调用")
        print("%s对象马上被干掉了..."%self.__name)

# 创建对象
dog = Animal("哈皮狗")

# 删除对象
del dog


# 总结
# 当有1个变量保存了对象的引用时，此对象的引用计数就会加1
# 当使用del删除变量指向的对象时，如果对象的引用计数不会1，比如3，那么此时只会让这个引用计数减1，即变为2，当再次调用del时，变为1，如果再调用1次del，此时会真的把对象进行删除



# 继承
# 定义一个父类，如下:
class Cat(object):

    def __init__(self, name, color="白色"):
        self.name = name
        self.color = color

    def run(self):
        print("%s--在跑"%self.name)


# 定义一个子类，继承Cat类如下:
class Bosi(Cat):

    def setNewName(self, newName):
        self.name = newName

    def eat(self):
        print("%s--在吃"%self.name)


bs = Bosi("印度猫")
print('bs的名字为:%s'%bs.name)
print('bs的颜色为:%s'%bs.color)
bs.eat()
bs.setNewName('波斯')
bs.run()


# 私有的属性，不能通过对象直接访问，但是可以通过方法访问
# 私有的方法，不能通过对象直接访问
# 私有的属性、方法，不会被子类继承，也不能被访问
# 一般情况下，私有的属性、方法都是不对外公布的，往往用来做内部的事情，起到安全的作用




# 定义一个父类
class A:
    def printA(self):
        print('----A----')

# 定义一个父类
class B:
    def printB(self):
        print('----B----')

# 定义一个子类，继承自A、B
class C(A,B):
    def printC(self):
        print('----C----')

obj_C = C()
obj_C.printA()
obj_C.printB()


#思考: 如果在上面的多继承例子中，如果父类A和父类B中，有一个同名的方法，那么通过子类去调用的时候，调用哪个？


#coding=utf-8
class base(object):
    def test(self):
        print('----base test----')
class A(base):
    def test(self):
        print('----A test----')

# 定义一个父类
class B(base):
    def test(self):
        print('----B test----')

# 定义一个子类，继承自A、B
class C(A,B):
    pass


obj_C = C()
obj_C.test()

print(C.__mro__)  #可以查看C类的对象搜索方法时的先后顺序




#coding=utf-8
class Cat(object):
    def __init__(self,name):
        self.name = name
        self.color = 'yellow'

class Bosi(Cat):

    def __init__(self,name):
        # 调用父类的__init__方法1(python2)
        #Cat.__init__(self,name)
        # 调用父类的__init__方法2
        #super(Bosi,self).__init__(name)
        # 调用父类的__init__方法3
        super().__init__(name)

    def getName(self):
        return self.name

bosi = Bosi('xiaohua')



# 多态
class F1(object):
    def show(self):
        print 'F1.show'

class S1(F1):
    def show(self):
        print 'S1.show'

class S2(F1):
    def show(self):
        print 'S2.show'
        
        
def Func(obj):
    """Func函数需要接收一个F1类型或者F1子类的类型"""

    print obj.show()

s1_obj = S1()
Func(s1_obj) # 在Func函数中传入S1类的对象 s1_obj，执行 S1 的show方法，结果：S1.show

s2_obj = S2()
Func(s2_obj) # 在Func函数中传入Ss类的对象 ss_obj，执行 Ss 的show方法，结果：S2.show



class People(object):
    address = '山东' #类属性
    __site = "nowhere" # 私有类属性
    def __init__(self):
        self.name = 'xiaowang' #实例属性
        self.age = 20 #实例属性
        
        
class People(object):
    country = 'china' #类属性


print(People.country)  # china
p = People()
print(p.country)  # china
p.country = 'japan' 
print(p.country)      # japan 实例属性会屏蔽掉同名的类属性
print(People.country)  # china
del p.country    #删除实例属性
print(p.country)  # china

# 如果需要在类外修改类属性，必须通过类对象去引用然后进行修改




class People(object):
    country = 'china'

    #类方法，用classmethod来进行修饰
    @classmethod
    def getCountry(cls):  # 对于类方法，第一个参数必须是类对象，一般以cls作为第一个参数
        return cls.country
    
    # 类方法还有一个用途就是可以对类属性进行修改：
    @classmethod
    def setCountry(cls,country):
        cls.country = country

p = People()
print p.getCountry()    #可以用过实例对象引用
print People.getCountry()    #可以通过类对象引用

p.setCountry('japan')   

print p.getCountry()   # japan
print People.getCountry()  # japan
# 结果显示在用类方法对类属性修改之后，通过类对象和实例对象访问都发生了改变



class People(object):
    country = 'china'

    @staticmethod
    #静态方法
    def getCountry():
        return People.country


print People.getCountry()




class A(object):
    def __init__(self):
        print("这是 init 方法")

    def __new__(cls):
        print("这是 new 方法")
        return object.__new__(cls)

A()



# 实例化一个单例
class Singleton(object):
    __instance = None

    def __new__(cls, age, name):
        #如果类数字能够__instance没有或者没有赋值
        #那么就创建一个对象，并且赋值为这个对象的引用，保证下次调用这个方法时
        #能够知道之前已经创建过对象了，这样就保证了只有1个对象
        if not cls.__instance:
            cls.__instance = object.__new__(cls)
        return cls.__instance

a = Singleton(18, "dongGe")
b = Singleton(8, "dongGe")

print(id(a))
print(id(b))

a.age = 19 #给a指向的对象添加一个属性
print(b.age)#获取b指向的对象的age属性



# 实例化一个单例
class Singleton(object):
    __instance = None
    __first_init = False

    def __new__(cls, age, name):
        if not cls.__instance:
            cls.__instance = object.__new__(cls)
        return cls.__instance

    def __init__(self, age, name):
        if not self.__first_init:
            self.age = age
            self.name = name
            Singleton.__first_init = True


a = Singleton(18, "dongGe")
b = Singleton(8, "dongGe")

print(id(a))
print(id(b))


print(a.age)
print(b.age)

a.age = 19
print(b.age)

```


### 异常处理

```python


try:
    print('-----test--1---')
    open('123.txt','r')
    print('-----test--2---')
except IOError:
    // ... ...
    
    
    
    
    
#coding=utf-8
try:
    print('-----test--1---')
    open('123.txt','r') # 如果123.txt文件不存在，那么会产生 IOError 异常
    print('-----test--2---')
    print(num)# 如果num变量没有定义，那么会产生 NameError 异常

except (IOError,NameError): 
    #如果想通过一次except捕获到多个异常可以用一个元组的方式

    # errorMsg里会保存捕获到的错误信息
    print(errorMsg)
    
    
    
    
    
try:
    print(a)
except NameError as result:
    print(result)
    
    
    
try:
    open("a.txt")
except (NameError, IOError) as result:
    print(result)



try:
    open("a.txt")
except:                     # 捕获所有异常
    print("异常")


try:
    open("a.txt")
except Exception as result:  # 捕获所有异常
  print(result) 




try:
    num = 100
    print num
except NameError as errorMsg:
    print("产生了错误：%s" % errorMsg)
else:
    print("没有捕获到异常，真高兴")



import time
try:
    f = open('test.txt')
    try:
        while True:
            content = f.readline()
            if len(content) == 0:
                break
            time.sleep(2)
            print(content)
    except:
        #如果在读取文件的过程中，产生了异常，那么就会捕获到
        #比如 按下了 ctrl+c
        pass
    finally:
        f.close()
        print('关闭文件')
except:
    print("没有这个文件")



你可以用raise语句来引发一个异常。异常/错误对象必须有一个名字，且它们应是Error或Exception类的子类



class ShortInputException(Exception):
    '''自定义的异常类'''
    def __init__(self, length, atleast):
        #super().__init__()
        self.length = length
        self.atleast = atleast

def main():
    try:
        s = input('请输入 --> ')
        if len(s) < 3:
            # raise引发一个你定义的异常
            raise ShortInputException(len(s), 3)
    except ShortInputException as result:#x这个变量被绑定到了错误的实例
        print('ShortInputException: 输入的长度是 %d,长度至少应是 %d'% (result.length, result.atleast))
    else:
        print('没有异常发生.')

main()


关于代码#super().__init__()的说明
如果重写了父类的__init__方法，最好是先调用父类的这个方法，然后再添加自己的功能







class Test(object):
    def __init__(self, switch):
        self.switch = switch #开关
    def calc(self, a, b):
        try:
            return a/b
        except Exception as result:
            if self.switch:
                print("捕获开启，已经捕获到了异常，信息如下:")
                print(result)
            else:
                #重新抛出这个异常，此时就不会被这个异常处理给捕获到，从而触发默认的异常处理
                raise


a = Test(True)
a.calc(11,0)

print("----------------------华丽的分割线----------------")

a.switch = False
a.calc(11,0)



```


### 模块管理

```python




import module1,mudule2...



有时候我们只需要用到模块中的某个函数，只需要引入该函数即可，此时可以用下面方法实现：
from 模块名 import 函数名1,函数名2....

不仅可以引入函数，还可以引入一些全局变量、类等
如果想一次性引入math中所有的东西，还可以通过from math import *来实现

当两个模块中含有相同名称函数的时候，后面一次引入会覆盖前一次引入


import time as tt
tt.sleep(1)


from time import sleep as sp
sp(1)




当你导入一个模块，Python解析器对模块位置的搜索顺序是：

当前目录
如果不在当前目录，Python则搜索在shell变量PYTHONPATH下的每个目录。
如果都找不到，Python会察看默认路径。UNIX下，默认路径一般为/usr/local/lib/python/
模块搜索路径存储在system模块的sys.path变量中。变量里包含当前目录，PYTHONPATH和由安装过程决定的默认目录。






每个Python文件都可以作为一个模块，模块的名字就是文件的名字。


test.py

    def add(a,b):
        return a+b


main.py


    import test

    result = test.add(11,22)
    print(result)



可以根据__name__变量的结果能够判断出，是直接执行的python脚本还是被引入执行的，从而能够有选择性的执行测试代码


如果一个文件中有__all__变量，那么也就意味着，被from xxx import *时导入只有这个变量中的元素



包
msg/
   __init__.py # __all__ = ['sendmsg', 'recvmsg']  
   recvmsg.py
   sendmsg.py


import msg.sendmsg
msg.sendmsg.sendmsg()

import msg.recvmsg
msg.recvmsg.recvmsg()



from msg import *
sendmsg.sendmsg()
recvmsg.recvmsg()







Phone/
    __init__.py
    common_util.py
    Voicedta/
        __init__.py
        Pots.py
        Isdn.py
    Fax/
        __init__.py
        G3.py
    Mobile/
        __init__.py
        Analog.py
        igital.py
    Pager/
        __init__.py
        Numeric.py

import Phone.Mobile.Analog
Phone.Mobile.Analog.dial()

from Phone import Mobile
Mobile.Analog.dial('555-1212')

from Phone.Mobile import Analog
Analog.dial('555-1212')

from Phone.Mobile.Analog import dial
dial('555-1212')

from package.module import *











.
├── setup.py 
├── suba
│   ├── aa.py
│   ├── bb.py
│   └── __init__.py
└── subb
    ├── cc.py
    ├── dd.py
    └── __init__.py

# setup.py
from distutils.core import setup

setup(name="dongGe", version="1.0", description="dongGe's module", author="dongGe", py_modules=['suba.aa', 'suba.bb', 'subb.cc', 'subb.dd'])


python setup.py build  # 构建模块
.
├── build
│   └── lib.linux-i686-2.7
│       ├── suba
│       │   ├── aa.py
│       │   ├── bb.py
│       │   └── __init__.py
│       └── subb
│           ├── cc.py
│           ├── dd.py
│           └── __init__.py
├── setup.py
├── suba
│   ├── aa.py
│   ├── bb.py
│   └── __init__.py
└── subb
    ├── cc.py
    ├── dd.py
    └── __init__.py


python setup.py sdist  # 生成发布压缩包
.
├── build
│   └── lib.linux-i686-2.7
│       ├── suba
│       │   ├── aa.py
│       │   ├── bb.py
│       │   └── __init__.py
│       └── subb
│           ├── cc.py
│           ├── dd.py
│           └── __init__.py
├── dist
│   └── dongGe-1.0.tar.gz
├── MANIFEST
├── setup.py
├── suba
│   ├── aa.py
│   ├── bb.py
│   └── __init__.py
└── subb
    ├── cc.py
    ├── dd.py
    └── __init__.py




# 模块安装、使用
tar -zxvf donGe-1.0.tar.gz
cd dongGe-1.0  # 或者 python setup.py install --prefix=./dongGe-1.0
python setup.py install

# 使用
from 模块名 import 模块名或者 *



```


### 其它

```python

# 给程序传递参数
import sys
print(sys.argv)




a = [x for x in range(4)]  # [0, 1, 2, 3]
a = [x for x in range(3, 4)]  # [3]
a = [x for x in range(3, 19, 2)]  # [3, 5, 7, 9, 11, 13, 15, 17]

a = [x for x in range(3, 10) if x%2==0]  # [4, 6, 8]
a = [x for x in range(3, 10) if x%2!=0]  # [3, 5, 7, 9]

a = [(x, y) for x in range(1, 3) for y in range(3)]  # [(1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]
a = [(x, y, z) for x in range(1, 3) for y in range(3) for z in range(4, 6)]
[
(1, 0, 4),
(1, 0, 5),
(1, 1, 4),
(1, 1, 5),
(1, 2, 4),
(1, 2, 5),
(2, 0, 4),
(2, 0, 5),
(2, 1, 4),
(2, 1, 5),
(2, 2, 4),
(2, 2, 5)
]






a = set()
type(a)  # set

b = [1, 2, 3, 12, 3, 1, 3]
c = set(b)  # {1, 2, 3, 12}
type(c)  # set

d = list(c)  # [1, 2, 3, 12]

e = tuple(d)  # (1, 2, 3, 12)
f = list(e)  # [1, 2, 3, 12]
g = set(e)  # {1, 2, 3, 12}

# set、list、tuple 可以相互转化
使用set，可以快速的完成对list中的元素去重复的功能
```

### 编辑记录
创建：01-01-2019 16:10 周二<br />
















































