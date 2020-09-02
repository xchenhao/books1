## Linux 三剑客：grep/sed/awk

- grep 更适合单纯的查找或匹配文本
- sed 更适合编辑匹配到的文本
- awk 更适合格式化文本，对文本进行较复杂格式处理

### grep
- 格式：grep <参数> <匹配模式> <文件>
- 参数：
    + -v 反向过滤（排除）
    + -n 显示匹配行及行号
    + -i 忽略大小写
    + -c 统计匹配的行数
    + -E 扩展（支持正则），同 egrep
    + --color=auto 对匹配内容突出颜色
    + -w 按单词查找
    + -o 只输出匹配内容
    + -A 附加显示匹配行后的内容
    + -B 附加显示匹配行前的内容
    + -C 附加显示匹配行上下间的内容
    + -r 递归查找
- 场景：更适合单纯的查找或匹配文本
- 试例：

```bash
grep -v "books1" test1.txt
grep -n "books1" test1.txt
grep -n "." test1.txt # 类型于 cat -n test1.txt
grep -i "chenhao" test2.txt
grep -Ei "chenhao|books1" test2.txt
grep -c "chenhao" test2.txt # 统计数量
grep -o "books1" test2.txt # 只输出匹配的内容
grep -w chenhao /etc/passwd # 只匹配单词
grep -Ev "^$|#" nginx.conf # 过滤空行及注释行
grep 'linux' test.txt test2.txt
grep -r "update" /etc/acpi/ #以递归的方式查找

grep '[a-z]\{7\}' *.txt # 过滤出每个字符串至少有7个连续小写字符的字符串的行

grep chenhao$ test.txt # 过滤出以 chenhao 结尾的行
grep ^chenhao test.txt # 过滤出以 chenhao 开头的行
grep ^[^c] test.txt # 过滤出非 c 开头的行

# 过滤出 IP
ifconfig eth0|grep "[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}\.[0-9]\{1,3\}"
ifconfig eth0|grep -E "([0-9]{1,3}\.){3}[0-9]"

ps aux | grep ssh | grep -v "grep" # grep不显示本身进程
ps aux|grep \[s]sh
ps -ef|grep -c nginx

```

---
### sed
- 格式：sed <参数> <内置命令> <文件>
- 参数：
    + -n 取消默认输出（常与内置命令 p 连用）
    + -i 直接修改文件内容（危险动作）
    + -e 多点编辑
- 内置命令：
    + a 行后追加
    + d 删除匹配行
    + i 行前插入
    + p 打印匹配行
    + c 取代内容
    + s/regexp/replacement/ 替换
- 场景：更适合编辑匹配到的文本
- 试例：

```bash
sed '2a 106,dandan,CSO' persons.txt
sed '2i 106,dandan,CSO' persons.txt
sed -i '$a # This is a test' regular_express.txt # 在最后一行追加（直接改写文件）
sed '2a 106,dandan,CSO\n107,bingbing,CCO' person.txt
sed '2d' person.txt
sed '2,5d' person.txt
sed 's#zhangyao#dandan#g' person.txt
sed '2p' person.txt
sed -n '2p' person.txt
sed -n '2,3p' person.txt
sed -i '13i Port 52113\nPermitRootLogin no\nPermitEmptyPasswords no\nUseDNS no\nGSSAPIAuthentication no' /etc/ssh/sshd_config
sed -n '13,17p' /etc/ssh/sshd_config
sed -i 's/\.$/\!/g' regular_express.txt # 将 regular_express.txt 内每一行结尾若为 . 则换成 !
sed '1,20s/old/new/g' aa.txt

# 在第 4 行后添加内容
sed -e 4a\baidu test.txt

nl /etc/passwd | sed '2a Drink tea or \
drink beer ?'

# 将第 2~5 行的内容取代成为 test content
nl /etc/passwd | sed '2,5c test content'

# 搜索有 root 关键字的行并输出
nl /etc/passwd | sed -n '/root/p'

# 删除 /etc/passwd 所有包含 root 的行，其他行输出
nl /etc/passwd | sed  '/root/d'

# -e 表示多点编辑，第一个编辑命令删除 /etc/passwd 第三行到末尾的数据，第二条命令搜索 bash 替换为 blueshell
nl /etc/passwd | sed -e '3,$d' -e 's/bash/blueshell/'

# 过滤出 IP
/sbin/ifconfig eth0 | grep 'inet addr' | sed 's/^.*addr://g' | sed 's/Bcast.*$//g'

# 找到 root 对应的行，执行后面花括号中的一组命令，每个命令之间用分号分隔，这里把 bash 替换为 blueshell，再输出这行，最后的 q 是退出
nl /etc/passwd | sed -n '/root/{s/bash/blueshell/;p;q}'   

```

---
### awk
- 格式：awk <参数> <模式 {动作}> 文件
- 参数：
    + -F 指定字段分隔符
    + -v 定义或个性一个 awk 内部的变量
    + -f 指定脚本文件
- 运算符：
    + = += -= *= /= %= ^= **= 赋值
    + ?: C 条件表达式
    + && \|\| ! 逻辑与/或/非
    + ~ ~! 匹配正则 不匹配正则
    + < <= > >= != == 关系运算符
    + 空格  连接
    + % / + - *
    + ^ *** 求幂
    + ++ --
    + $ 字段引用
    + 数组成员
- 内建变量：
    + $0 表示整个当前行
    + $1 第 1 列
    + NF 当前行的字段的个数(列数)
    + NR 当前处理的文本行的行号，多文件记录递增
    + FNR 各文件分别计数的行号，多文件记录不递增
    + FS 输入字段分隔符(默认为空白字符)
    + OFS 输出字段分隔符(默认为空白字符)
    + RS 输入记录分隔符(输入换行符)
    + ORS 输出记录分隔符(输出换行符)
    + ARGC 命令行参数的个数
    + ARGV 数组，保存的是命令行所给定的各参数
- 场景：更适合格式化文本，对文本进行较复杂格式处理
- 试例：

```bash
awk -F "GET|HTTP" 'print $2' access.log
awk '$6~/Failed/{print $11}' /var/log/secure
awk 'NR==20,NR==30' filename
awk '{sum+=$0}END{print sum}' ett.txt
awk '{array[$1]++}END{for(key in array)print key,array[key]}' access.log

awk '{print}' /etc/passwd
awk '{print $0}' /etc/passwd

awk '{print $1,$4}' log.txt # 输出第 1 及 第 4 列（默认以空格或 Tab 来分隔列）
awk '{printf "%-8s %-10s\n",$1,$4}' log.txt # 格式化输出
awk -F: '{print $1,$3,$6}' OFS="\t" /etc/passwd

awk -F, '{print $1,$2}' log.txt
awk 'BEGIN{FS=","} {print $1,$2}' log.txt
awk -F '[ ,]'  '{print $1,$2,$5}' log.txt #使用空格及 , 作为分割符

awk -va=1 '{print $1,$1+a}' log.txt # 设置变量并调用
awk -va=1 -vb=s '{print $1,$1+a,$1b}' log.txt

awk '$1>2' log.txt # 过滤第一列大于 2 的行
awk '$1==2 {print $1,$3}' log.txt 
awk '$1>2 && $2=="Are" {print $1,$2,$3}' log.txt

awk 'NR==5' test.txt
awk 'NR==2,NR==6' test.txt
awk '{print NR,$0}' test.txt # 类似 cat -n test.txt
awk 'NR==2,NR==6 {print NR,$0}' test.txt
awk -F ":" '{print $1,$3,$NF}' test.txt
awk '{gsub("/sbin/nologin", "/bin/bash", $0);print $0}' test.txt #将 /sbin/nologin 替换为 /bin/bash
ifconfig eth0|awk -F "(addr:)|( Bcase:)" 'NR==2{print $2}' # 取 IP地址
ifconfig eth0|awk -F "[ :]+" 'NR==2{print $4}'
awk -F '/' '{print $3}' books1.txt|sort|uniq -c
awk -F '/' '{hotel[$3]++;print $3,hotel[$3]}' books1.txt
awk -F '/' '{array[$3]++}END{
  print "www.books1.cn", array["www.books1.cn"]
  print "www.baidu.com", array["www.baidu.com"]
  print "www.qq.com", array["www.qq.com"]
}' books1.txt
awk -F '/' '{hotel[$3]++}END{for(domain in hotel)print domain,hotel[domain]}' books1.txt

awk '$2 ~ /th/ {print $2,$4}' log.txt # 输出包含 "th" 的第二列，并打印第二列与第四列
awk '/re/ ' log.txt # 输出包含 re 的行
awk 'BEGIN{IGNORECASE=1} /this/' log.txt # 忽略大小写
awk '!/th/ {print $2,$4}' log.txt # 在包含 th 的行中输出第 2，4 列

awk 'BEGIN{X=0} /^$/{ X+=1 } END{print "I find",X,"blank lines."}' test.txt # 统计空行数 
ls -l|awk 'BEGIN{sum=0} !/^d/{sum+=$5} END{print "total size is",sum}' # 计算文件大小

route -n|awk 'NR!=1{print}' # 不显示第一行

awk '!/mysql|mail/{print}' /etc/passwd
awk -F: '/mail/,/mysql/{print}' /etc/passwd # 区间匹配

awk -F: '$1~/mail/{print $1}' /etc/passwd  # $1 匹配指定内容才显示
awk -F: '{if($1~/mail/) print $1}' /etc/passwd  # 与上面相同，if 必须用在 {} 中，且比较内容用 () 括起来
```

---

### 参考
https://www.cnblogs.com/forestwolf/p/6413916.html<br />
http://www.runoob.com/linux/linux-comm-sed.html<br />
http://www.runoob.com/linux/linux-comm-awk.html<br />
https://www.cnblogs.com/xudong-bupt/p/3721210.html<br />

### 编辑记录
创建：12-16-2018 21:00 周日<br />
编辑：12-22-2018 16:48 周六
