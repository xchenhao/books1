---
sidebar: auto
---
# Python 基础

## 大纲

1. Python 介绍与安装
2. 变量、数字、序列、映射和集合
3. 条件和循环
4. 文件、输入和输出、异常
5. 函数、模块、面向对象编程
6. 多线程编程
7. 标准库、第三方库、机器学习库
8. 综合项目

## 内容

### Python 介绍

- 版本历史
  - 1990 年 Python 诞生
  - 2000 年 Python 2.0 发布
  - 2008 年 Python 3.0 发布
  - 2010 年 Python 2.7 发布（最后一个 2.x 版本）
- 版本选择
  + 2.x 版本：已经是遗产
  + 3.x 版本：是现在和未来的语言（不兼容 2.x）
  + 最流行的发行版：Anaconda
- 语言特点
  + 跨平台
  + 开放源码
  + 可扩展、类库丰富
  + 语法简洁
  + 以缩进区分代码结构、注释以 `#` 开头
- 下载安装
  + 下载地址 <https://www.python.org/downloads/>
  + 安装后添加至环境变量
- 相关资料
  + 官方文档 <https://www.python.org/doc>
  + iPython <https://www.python.org/doc>
  + jupyter notebook <http://jupyter-notebook.readthedocs.io/en/lastes>
  + sublime text <https://www.sublimetext.com>
  + PyCharm <https://www.jetbrains.com/pycharm>
  + pip <https://pip.pypa.io/en/stable/installing>
### 数据类型与变量

#### 基本数据类型：整数、浮点数、布尔值

- 整数：`8`
- 浮点数（float）：`8.8`
- 布尔值（bool）：`True`, `False`

#### 序列

其成员都是有序排列，并且可以通过下标偏移量访问到它的一个或几个成员

##### 种类：字符串、列表、元组

- 字符串：`"abcd"`
- 列表：`[0, "abcd"]`
- 元组：`("abc", "def")`

##### 基本操作
- 成员关系操作符：`in`, `not in`
    用法：`对象 [not] in 序列`
- 连接操作符：`+`
    用法：`序列 + 序列`
- 重复操作符：`*`
    用法：`序列 * 整数`
- 切片操作符：`[:]`
    用法：`序列[0:整数]`

#### 映射的类型：字典

结构：`{"哈希值": "对象"}`

#### 变量

- 变量赋值
- 变量命名
- 命名规范

### 分支与循环结构

#### 条件语句 if

```python
if 表达式:
    代码块
elif 表达式:
    代码块
else:
    代码块
```

#### 循环语句

- while 语句
```python
while 表达式:
    代码块
```

- for 语句
```python
for 迭代变量 in 可迭代对象:
    代码块
```

### 函数、模块与面向对象编程 OOP

#### 函数

是对程序逻辑进行结构化的一种编程方法

- 函数定义

```python
def 函数名称():
    代码
    return 需要返回的内容
```

- 函数调用：`函数名称()`

#### 模块

是指在代码变得相当大之后，为了将需要重复使用的有组织的代码段放在一起，这部分代码可以附加到现有的程序中，附加的过程叫做导入（`import`）

导入模块的一般写法

```python
import 模块名称
from 模块名称 import 方法名
```

#### 面积对象编程 OOP

引入了类的概念

```python
class Person(object): # 定义类
    def name(self):  # 定义方法
        pass

john = Person()      # 实例化
```

### 文件读写与异常
 
#### 文件读写内建函数

- `open()` 打开文件
- `read()` 读取
- `readline()` 读取一行
- `seek()` 文件内移动
- `write()` 写入
- `close()` 关闭文件

#### 异常

错误 != 异常

- 是指在出现错误时采用正常控制流以外的动作
= 一般处理流程：检测到错误，引发异常；对异常进行捕获的操作

```python
try:
    <监控异常>
except Exception[, reason]:
    <异常处理代码>
finally:
    <无论异常是否发生都执行>
```

#### 统计小说人物出现次数案例

- 创建函数、调用函数、可变长参数
- 变量的作用域
- 匿名函数
- 生成器与迭代器
- 装饰器
- 闭包

### 多线程编程

经典的生产者和消费者案例

- 进程和线程
- threading 模块
- Thread() 方法
- queue 模块

### 标准库

#### re 正则表达式

作用：根据模式匹配搜索和修改文本

```python
import re

pattern = 'p'
text = 'text match pattern'
match = re.search(pattern, text)
```

#### datetime 日期和时间值管理

作用：用于完成日期和时间解析、格式化和算数运算

```python
import datetime

t = datetime.date.today()
one_day = datetime.timedelta(days=1)
```

#### 机器学习库

#### numpy 数学库

用于高性能科学计算和数据分析。是常用的高级数据分析库的基础包

```python
import numpy as np
arr1 = np.array([2,3,4]
print(arr1)
print(arr1.dtype)
```

##### pandas 数据分析库

##### matplotlib 绘图库

##### tensorflow 机器学习模型库

##### 鸢尾花案例

#### 网络库

##### urllib 库

http 协议常用库

##### requests 库

http 协议常用库

##### BeautifulSoup 库

xml 格式处理库

##### 爬虫案例

爬取图片网站案例

### 参考
- https://github.com/wilsonyin123/geekbangpython