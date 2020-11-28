(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{790:function(s,t,a){"use strict";a.r(t);var n=a(49),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"linux-三剑客-grep-sed-awk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-三剑客-grep-sed-awk"}},[s._v("#")]),s._v(" Linux 三剑客：grep/sed/awk")]),s._v(" "),a("ul",[a("li",[s._v("grep 更适合单纯的查找或匹配文本")]),s._v(" "),a("li",[s._v("sed 更适合编辑匹配到的文本")]),s._v(" "),a("li",[s._v("awk 更适合格式化文本，对文本进行较复杂格式处理")])]),s._v(" "),a("h3",{attrs:{id:"grep"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[s._v("#")]),s._v(" grep")]),s._v(" "),a("ul",[a("li",[s._v("格式：grep <参数> <匹配模式> <文件>")]),s._v(" "),a("li",[s._v("参数：\n"),a("ul",[a("li",[s._v("-v 反向过滤（排除）")]),s._v(" "),a("li",[s._v("-n 显示匹配行及行号")]),s._v(" "),a("li",[s._v("-i 忽略大小写")]),s._v(" "),a("li",[s._v("-c 统计匹配的行数")]),s._v(" "),a("li",[s._v("-E 扩展（支持正则），同 egrep")]),s._v(" "),a("li",[s._v("--color=auto 对匹配内容突出颜色")]),s._v(" "),a("li",[s._v("-w 按单词查找")]),s._v(" "),a("li",[s._v("-o 只输出匹配内容")]),s._v(" "),a("li",[s._v("-A 附加显示匹配行后的内容")]),s._v(" "),a("li",[s._v("-B 附加显示匹配行前的内容")]),s._v(" "),a("li",[s._v("-C 附加显示匹配行上下间的内容")]),s._v(" "),a("li",[s._v("-r 递归查找")])])]),s._v(" "),a("li",[s._v("场景：更适合单纯的查找或匹配文本")]),s._v(" "),a("li",[s._v("试例：")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"books1"')]),s._v(" test1.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"books1"')]),s._v(" test1.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),s._v(" test1.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 类型于 cat -n test1.txt")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chenhao"')]),s._v(" test2.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -Ei "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chenhao|books1"')]),s._v(" test2.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chenhao"')]),s._v(" test2.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计数量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -o "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"books1"')]),s._v(" test2.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只输出匹配的内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -w chenhao /etc/passwd "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只匹配单词")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -Ev "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^$|#"')]),s._v(" nginx.conf "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 过滤空行及注释行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'linux'")]),s._v(" test.txt test2.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -r "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"update"')]),s._v(" /etc/acpi/ "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#以递归的方式查找")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[a-z]\\{7\\}'")]),s._v(" *.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 过滤出每个字符串至少有7个连续小写字符的字符串的行")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" chenhao$ test.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 过滤出以 chenhao 结尾的行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" ^chenhao test.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 过滤出以 chenhao 开头的行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("^c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" test.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 过滤出非 c 开头的行")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 过滤出 IP")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" eth0"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[0-9]\\{1,3\\}\\.[0-9]\\{1,3\\}\\.[0-9]\\{1,3\\}\\.[0-9]\\{1,3\\}"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" eth0"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -E "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"([0-9]{1,3}\\.){3}[0-9]"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"grep"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# grep不显示本身进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -c nginx\n\n")])])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"sed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sed"}},[s._v("#")]),s._v(" sed")]),s._v(" "),a("ul",[a("li",[s._v("格式：sed <参数> <内置命令> <文件>")]),s._v(" "),a("li",[s._v("参数：\n"),a("ul",[a("li",[s._v("-n 取消默认输出（常与内置命令 p 连用）")]),s._v(" "),a("li",[s._v("-i 直接修改文件内容（危险动作）")]),s._v(" "),a("li",[s._v("-e 多点编辑")])])]),s._v(" "),a("li",[s._v("内置命令：\n"),a("ul",[a("li",[s._v("a 行后追加")]),s._v(" "),a("li",[s._v("d 删除匹配行")]),s._v(" "),a("li",[s._v("i 行前插入")]),s._v(" "),a("li",[s._v("p 打印匹配行")]),s._v(" "),a("li",[s._v("c 取代内容")]),s._v(" "),a("li",[s._v("s/regexp/replacement/ 替换")])])]),s._v(" "),a("li",[s._v("场景：更适合编辑匹配到的文本")]),s._v(" "),a("li",[s._v("试例：")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2a 106,dandan,CSO'")]),s._v(" persons.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2i 106,dandan,CSO'")]),s._v(" persons.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v(" # This is a test'")]),s._v(" regular_express.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在最后一行追加（直接改写文件）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2a 106,dandan,CSO"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("107,bingbing,CCO'")]),s._v(" person.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2d'")]),s._v(" person.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2,5d'")]),s._v(" person.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s#zhangyao#dandan#g'")]),s._v(" person.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2p'")]),s._v(" person.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2p'")]),s._v(" person.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2,3p'")]),s._v(" person.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'13i Port 52113"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("PermitRootLogin no"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("PermitEmptyPasswords no"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("UseDNS no"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("GSSAPIAuthentication no'")]),s._v(" /etc/ssh/sshd_config\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'13,17p'")]),s._v(" /etc/ssh/sshd_config\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/\\.$/\\!/g'")]),s._v(" regular_express.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 regular_express.txt 内每一行结尾若为 . 则换成 !")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1,20s/old/new/g'")]),s._v(" aa.txt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在第 4 行后添加内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e 4a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("baidu test.txt\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nl")]),s._v(" /etc/passwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2a Drink tea or \\\ndrink beer ?'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将第 2~5 行的内容取代成为 test content")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nl")]),s._v(" /etc/passwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2,5c test content'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索有 root 关键字的行并输出")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nl")]),s._v(" /etc/passwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/root/p'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 /etc/passwd 所有包含 root 的行，其他行输出")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nl")]),s._v(" /etc/passwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/root/d'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -e 表示多点编辑，第一个编辑命令删除 /etc/passwd 第三行到末尾的数据，第二条命令搜索 bash 替换为 blueshell")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nl")]),s._v(" /etc/passwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3,"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$d")]),s._v("'")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/bash/blueshell/'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 过滤出 IP")]),s._v("\n/sbin/ifconfig eth0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inet addr'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^.*addr://g'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/Bcast.*$//g'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 找到 root 对应的行，执行后面花括号中的一组命令，每个命令之间用分号分隔，这里把 bash 替换为 blueshell，再输出这行，最后的 q 是退出")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nl")]),s._v(" /etc/passwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/root/{s/bash/blueshell/;p;q}'")]),s._v("   \n\n")])])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"awk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#awk"}},[s._v("#")]),s._v(" awk")]),s._v(" "),a("ul",[a("li",[s._v("格式：awk <参数> <模式 {动作}> 文件")]),s._v(" "),a("li",[s._v("参数：\n"),a("ul",[a("li",[s._v("-F 指定字段分隔符")]),s._v(" "),a("li",[s._v("-v 定义或个性一个 awk 内部的变量")]),s._v(" "),a("li",[s._v("-f 指定脚本文件")])])]),s._v(" "),a("li",[s._v("运算符：\n"),a("ul",[a("li",[s._v("= += -= *= /= %= ^= **= 赋值")]),s._v(" "),a("li",[s._v("?: C 条件表达式")]),s._v(" "),a("li",[s._v("&& || ! 逻辑与/或/非")]),s._v(" "),a("li",[s._v("~ ~! 匹配正则 不匹配正则")]),s._v(" "),a("li",[s._v("< <= > >= != == 关系运算符")]),s._v(" "),a("li",[s._v("空格  连接")]),s._v(" "),a("li",[s._v("% / + - *")]),s._v(" "),a("li",[s._v("^ *** 求幂")]),s._v(" "),a("li",[s._v("++ --")]),s._v(" "),a("li",[s._v("$ 字段引用")]),s._v(" "),a("li",[s._v("数组成员")])])]),s._v(" "),a("li",[s._v("内建变量：\n"),a("ul",[a("li",[s._v("$0 表示整个当前行")]),s._v(" "),a("li",[s._v("$1 第 1 列")]),s._v(" "),a("li",[s._v("NF 当前行的字段的个数(列数)")]),s._v(" "),a("li",[s._v("NR 当前处理的文本行的行号，多文件记录递增")]),s._v(" "),a("li",[s._v("FNR 各文件分别计数的行号，多文件记录不递增")]),s._v(" "),a("li",[s._v("FS 输入字段分隔符(默认为空白字符)")]),s._v(" "),a("li",[s._v("OFS 输出字段分隔符(默认为空白字符)")]),s._v(" "),a("li",[s._v("RS 输入记录分隔符(输入换行符)")]),s._v(" "),a("li",[s._v("ORS 输出记录分隔符(输出换行符)")]),s._v(" "),a("li",[s._v("ARGC 命令行参数的个数")]),s._v(" "),a("li",[s._v("ARGV 数组，保存的是命令行所给定的各参数")])])]),s._v(" "),a("li",[s._v("场景：更适合格式化文本，对文本进行较复杂格式处理")]),s._v(" "),a("li",[s._v("试例：")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GET|HTTP"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("'")]),s._v(" access.log\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$6")]),s._v("~/Failed/{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$11")]),s._v("}'")]),s._v(" /var/log/secure\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NR==20,NR==30'")]),s._v(" filename\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{sum+="),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v("}END{print sum}'")]),s._v(" ett.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{array["),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("]++}END{for(key in array)print key,array[key]}'")]),s._v(" access.log\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print}'")]),s._v(" /etc/passwd\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v("}'")]),s._v(" /etc/passwd\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$4")]),s._v("}'")]),s._v(" log.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出第 1 及 第 4 列（默认以空格或 Tab 来分隔列）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{printf \"%-8s %-10s"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('",'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$4")]),s._v("}'")]),s._v(" log.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式化输出")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$6")]),s._v("}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OFS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v('"')]),s._v(" /etc/passwd\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F, "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),s._v(" log.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'BEGIN{FS=","} {print '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),s._v(" log.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[ ,]'")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$5")]),s._v("}'")]),s._v(" log.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用空格及 , 作为分割符")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -va"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("+a}'")]),s._v(" log.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置变量并调用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -va"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" -vb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("+a,"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1b")]),s._v("}'")]),s._v(" log.txt\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(">2'")]),s._v(" log.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 过滤第一列大于 2 的行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("==2 {print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v("}'")]),s._v(" log.txt \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(">2 && "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v('=="Are" {print '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v("}'")]),s._v(" log.txt\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NR==5'")]),s._v(" test.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NR==2,NR==6'")]),s._v(" test.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print NR,"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v("}'")]),s._v(" test.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 类似 cat -n test.txt")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NR==2,NR==6 {print NR,"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v("}'")]),s._v(" test.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NF")]),s._v("}'")]),s._v(" test.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{gsub("/sbin/nologin", "/bin/bash", '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v(");print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v("}'")]),s._v(" test.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将 /sbin/nologin 替换为 /bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" eth0"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"(addr:)|( Bcase:)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NR==2{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取 IP地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" eth0"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[ :]+"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NR==2{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$4")]),s._v("}'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v("}'")]),s._v(" books1.txt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" -c\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{hotel["),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v("]++;print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v(",hotel["),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v("]}'")]),s._v(" books1.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{array["),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v(']++}END{\n  print "www.books1.cn", array["www.books1.cn"]\n  print "www.baidu.com", array["www.baidu.com"]\n  print "www.qq.com", array["www.qq.com"]\n}\'')]),s._v(" books1.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{hotel["),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v("]++}END{for(domain in hotel)print domain,hotel[domain]}'")]),s._v(" books1.txt\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v(" ~ /th/ {print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$4")]),s._v("}'")]),s._v(" log.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 输出包含 "th" 的第二列，并打印第二列与第四列')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/re/ '")]),s._v(" log.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出包含 re 的行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'BEGIN{IGNORECASE=1} /this/'")]),s._v(" log.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略大小写")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'!/th/ {print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$4")]),s._v("}'")]),s._v(" log.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在包含 th 的行中输出第 2，4 列")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'BEGIN{X=0} /^$/{ X+=1 } END{print "I find",X,"blank lines."}\'')]),s._v(" test.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计空行数 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'BEGIN{sum=0} !/^d/{sum+="),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$5")]),s._v('} END{print "total size is",sum}\'')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 计算文件大小")]),s._v("\n\nroute -n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NR!=1{print}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不显示第一行")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'!/mysql|mail/{print}'")]),s._v(" /etc/passwd\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/mail/,/mysql/{print}'")]),s._v(" /etc/passwd "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 区间匹配")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("~/mail/{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("}'")]),s._v(" /etc/passwd  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $1 匹配指定内容才显示")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{if("),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("~/mail/) print "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("}'")]),s._v(" /etc/passwd  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 与上面相同，if 必须用在 {} 中，且比较内容用 () 括起来")]),s._v("\n")])])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[s._v("https://www.cnblogs.com/forestwolf/p/6413916.html"),a("br"),s._v("\nhttp://www.runoob.com/linux/linux-comm-sed.html"),a("br"),s._v("\nhttp://www.runoob.com/linux/linux-comm-awk.html"),a("br"),s._v("\nhttps://www.cnblogs.com/xudong-bupt/p/3721210.html"),a("br")]),s._v(" "),a("h3",{attrs:{id:"编辑记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑记录"}},[s._v("#")]),s._v(" 编辑记录")]),s._v(" "),a("p",[s._v("创建：12-16-2018 21:00 周日"),a("br"),s._v("\n编辑：12-22-2018 16:48 周六")])])}),[],!1,null,null,null);t.default=r.exports}}]);