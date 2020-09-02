## Python 笔记 5（正则表达式）

### 用法
```python
    #coding=utf-8

    # 导入re模块
    import re

    # 使用match方法进行匹配操作
    result = re.match(正则表达式,要匹配的字符串)

    # 如果上一步匹配到数据的话，可以使用group方法来提取数据
    result.group()
```
### 表示字符

|字符|功能|
|---|---|
|.|匹配任意1个字符（除了\n）|
|[ ]|匹配[ ]中列举的字符|
|\d|匹配数字，即0-9|
|\D|匹配非数字，即不是数字|
|\s|匹配空白，即 空格，tab键|
|\S|匹配非空白|
|\w|匹配单词字符，即a-z、A-Z、0-9、_|
|\W|匹配非单词字符|

#### 示例
```python
    #coding=utf-8

    import re

    # 如果hello的首字符小写，那么正则表达式需要小写的h
    ret = re.match("h","hello Python")
    ret.group()


    # 如果hello的首字符大写，那么正则表达式需要大写的H
    ret = re.match("H","Hello Python")
    ret.group()

    # 大小写h都可以的情况
    ret = re.match("[hH]","hello Python")
    ret.group()
    ret = re.match("[hH]","Hello Python")
    ret.group()

    # 匹配0到9第一种写法
    ret = re.match("[0123456789]","7Hello Python")
    ret.group()

    # 匹配0到9第二种写法
    ret = re.match("[0-9]","7Hello Python")
    ret.group()
```

### 原始字符串
```
>>> mm = "c:\\a\\b\\c"
>>> mm
'c:\\a\\b\\c'
>>> print(mm)
c:\a\b\c
>>> print(mm)
c:\a\b\c
>>> re.match("c:\\\\",mm).group()
'c:\\'
>>> ret = re.match("c:\\\\",mm).group()
>>> print(ret)
c:\
>>> ret = re.match("c:\\\\a",mm).group()
>>> print(ret)
c:\a
>>> ret = re.match(r"c:\\a",mm).group()
>>> print(ret)
c:\a
>>> ret = re.match(r"c:\a",mm).group()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'NoneType' object has no attribute 'group'
>>>


# Python中字符串前面加上 r 表示原生字符串
>>> ret = re.match(r"c:\\a",mm).group()
>>> print(ret)
c:\a
```

### 表示数量

|字符|功能|
|---|---|
|*|匹配前一个字符出现0次或者无限次，即可有可无|
|+|匹配前一个字符出现1次或者无限次，即至少有1次|
|?|匹配前一个字符出现1次或者0次，即要么有1次，要么没有|
|{m}|匹配前一个字符出现m次|
|{m,}|匹配前一个字符至少出现m次|
|{m,n}|匹配前一个字符出现从m到n次|

#### 示例：*
```python
#coding=utf-8
import re

ret = re.match("[A-Z][a-z]*","Mm")
ret.group()

ret = re.match("[A-Z][a-z]*","Aabcdef")
ret.group()
```
#### 示例：+
```python
#coding=utf-8
import re

ret = re.match("[a-zA-Z_]+[\w_]*","name1")
ret.group()

ret = re.match("[a-zA-Z_]+[\w_]*","_name")
ret.group()

ret = re.match("[a-zA-Z_]+[\w_]*","2_name")
ret.group()
```
#### 示例：?
```python
#coding=utf-8
import re

ret = re.match("[1-9]?[0-9]","7")
ret.group()

ret = re.match("[1-9]?[0-9]","33")
ret.group()

ret = re.match("[1-9]?[0-9]","09")
ret.group()
```
#### 示例：{m}
```python
#coding=utf-8
import re

ret = re.match("[a-zA-Z0-9_]{6}","12a3g45678")
ret.group()

ret = re.match("[a-zA-Z0-9_]{8,20}","1ad12f23s34455ff66")
ret.group()
```

### 表示边界

|字符|功能|
|---|---|
|^|匹配字符串开头|
|$|匹配字符串结尾|
|\b|匹配一个单词的边界|
|\B|匹配非单词边界|

#### 示例：$
```python
#coding=utf-8

import re

# 正确的地址
ret = re.match("[\w]{4,20}@163\.com", "xiaoWang@163.com")
ret.group()

# 不正确的地址
ret = re.match("[\w]{4,20}@163\.com", "xiaoWang@163.comheihei")
ret.group()

# 通过$来确定末尾
ret = re.match("[\w]{4,20}@163\.com$", "xiaoWang@163.comheihei")
ret.group()
```

#### 示例：\b
```
>>> re.match(r".*\bver\b", "ho ver abc").group()
'ho ver'

>>> re.match(r".*\bver\b", "ho verabc").group()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'NoneType' object has no attribute 'group'

>>> re.match(r".*\bver\b", "hover abc").group()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'NoneType' object has no attribute 'group'
>>>
```

#### 示例：\B
```
>>> re.match(r".*\Bver\B", "hoverabc").group()
'hover'

>>> re.match(r".*\Bver\B", "ho verabc").group()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'NoneType' object has no attribute 'group'

>>> re.match(r".*\Bver\B", "hover abc").group()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'NoneType' object has no attribute 'group'

>>> re.match(r".*\Bver\B", "ho ver abc").group()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'NoneType' object has no attribute 'group'
```

### 匹配分组

|字符|功能|
|---|---|
|\||匹配左右任意一个表达式|
|(ab)|将括号中字符作为一个分组|
|\num|引用分组num匹配到的字符串|
|(?P<name>)|分组起别名|
|(?P=name)|引用别名为name分组匹配到的字符串|

#### 示例：|
```python
#coding=utf-8

import re

ret = re.match("[1-9]?\d","8")
ret.group()

ret = re.match("[1-9]?\d","78")
ret.group()

# 不正确的情况
ret = re.match("[1-9]?\d","08")
ret.group()

# 修正之后的
ret = re.match("[1-9]?\d$","08")
ret.group()

# 添加|
ret = re.match("[1-9]?\d$|100","8")
ret.group()

ret = re.match("[1-9]?\d$|100","78")
ret.group()

ret = re.match("[1-9]?\d$|100","08")
ret.group()

ret = re.match("[1-9]?\d$|100","100")
ret.group()
```

#### 示例：()
```python
#coding=utf-8

import re

ret = re.match("\w{4,20}@163\.com", "test@163.com")
ret.group()

ret = re.match("\w{4,20}@(163|126|qq)\.com", "test@126.com")
ret.group()

ret = re.match("\w{4,20}@(163|126|qq)\.com", "test@qq.com")
ret.group()

ret = re.match("\w{4,20}@(163|126|qq)\.com", "test@gmail.com")
ret.group()
```
```
>>> ret = re.match("([^-]*)-(\d+)","010-12345678")
>>> ret.group()
'010-12345678'
>>> ret.group(1)
'010'
>>> ret.group(2)
'12345678'
```

#### 示例：\
```python
#coding=utf-8

import re

# 能够完成对正确的字符串的匹配
ret = re.match("<[a-zA-Z]*>\w*</[a-zA-Z]*>", "<html>hh</html>")
ret.group()

# 如果遇到非正常的html格式字符串，匹配出错
ret = re.match("<[a-zA-Z]*>\w*</[a-zA-Z]*>", "<html>hh</htmlbalabala>")
ret.group()

# 正确的理解思路：如果在第一对<>中是什么，按理说在后面的那对<>中就应该是什么

# 通过引用分组中匹配到的数据即可，但是要注意是元字符串，即类似 r""这种格式
ret = re.match(r"<([a-zA-Z]*)>\w*</\1>", "<html>hh</html>")
ret.group()

# 因为2对<>中的数据不一致，所以没有匹配出来
ret = re.match(r"<([a-zA-Z]*)>\w*</\1>", "<html>hh</htmlbalabala>")
ret.group()
```
```python
#coding=utf-8

import re

ret = re.match(r"<(\w*)><(\w*)>.*</\2></\1>", "<html><h1>www.itcast.cn</h1></html>")
ret.group()

ret = re.match(r"<(\w*)><(\w*)>.*</\2></\1>", "<html><h1>www.itcast.cn</h2></html>")
ret.group()
```

#### 示例：`(?P<name>)`, `(?P=name)`
```python
#coding=utf-8

import re

ret = re.match(r"<(?P<name1>\w*)><(?P<name2>\w*)>.*</(?P=name2)></(?P=name1)>", "<html><h1>www.itcast.cn</h1></html>")
ret.group()

ret = re.match(r"<(?P<name1>\w*)><(?P<name2>\w*)>.*</(?P=name2)></(?P=name1)>", "<html><h1>www.itcast.cn</h2></html>")
ret.group()
```

### reg 模块高级用法
#### search
```python
#coding=utf-8
import re

ret = re.search(r"\d+", "阅读次数为 9999")
ret.group() # '9999'
```

#### finall
```python
#coding=utf-8
import re

ret = re.findall(r"\d+", "python = 9999, c = 7890, c++ = 12345")
print ret  # ['9999', '7890', '12345']
```

#### sub 将匹配到的数据进行替换
```python
#coding=utf-8
import re

ret = re.sub(r"\d+", '998', "python = 997")
print ret  # 998
```
```python
#coding=utf-8
import re

def add(temp):
    strNum = temp.group()
    num = int(strNum) + 1
    return str(num)

ret = re.sub(r"\d+", add, "python = 997")
print ret  # 998

ret = re.sub(r"\d+", add, "python = 99")
print ret  # 100
```

#### split 根据匹配进行切割字符串，并返回一个列表
```python
#coding=utf-8
import re

ret = re.split(r":| ","info:xiaoZhang 33 shandong")
print ret  # ['info', 'xiaoZhang', '33', 'shandong']
```

### 贪婪和非贪婪
```python
s="This is a number 234-235-22-423"
r=re.match(".+(\d+-\d+-\d+-\d+)",s)
print r.group(1)  # '4-235-22-423'

r=re.match(".+?(\d+-\d+-\d+-\d+)",s)
r.group(1)  #  '234-235-22-423'

re.match(r"aa(\d+)","aa2343ddd").group(1)  # '2343'
re.match(r"aa(\d+?)","aa2343ddd").group(1)  # '2'
re.match(r"aa(\d+)ddd","aa2343ddd").group(1)  # '2343'
re.match(r"aa(\d+?)ddd","aa2343ddd").group(1)  # '2343'
```


### 编辑记录

创建：01-13-2019 11:53 周日<br />
