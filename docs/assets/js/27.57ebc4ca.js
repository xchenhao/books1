(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{800:function(t,s,a){"use strict";a.r(s);var e=a(49),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"用户管理类问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户管理类问题"}},[t._v("#")]),t._v(" 用户管理类问题")]),t._v(" "),a("ol",[a("li",[t._v("如何在给定场景下为某用户授权？")]),t._v(" "),a("li",[t._v("如何保证数据库账号的安全？")]),t._v(" "),a("li",[t._v("如何从一个实例迁移数据库账号到另一个实例？")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如何在给定场景下为某用户授权？")]),t._v(" "),a("p",[t._v("知识点")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如何定义MySQL数据库账号？")]),t._v(" "),a("p",[t._v("用户名@可访问控制列表")]),t._v(" "),a("p",[t._v("​\t%：代表可以从所有外部主机访问\n​\t192.168.1.%：表示可以从192.168.1网段访问")]),t._v(" "),a("p",[t._v("​\tlocalhost:DB服务器本地访问\n使用CREATE USER命令建立用户")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("h create user\n")])])])]),t._v(" "),a("li",[a("p",[t._v("MySQL常用的用户权限")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("语句")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Admin")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("Create User")]),t._v(" "),a("td",[t._v("建立新的用户的权限")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("Grant option")]),t._v(" "),a("td",[t._v("为其他用户授权的权限")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("Super")]),t._v(" "),a("td",[t._v("管理服务器的权限")])]),t._v(" "),a("tr",[a("td",[t._v("DDL")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("Create")]),t._v(" "),a("td",[t._v("新建数据库，表的权限")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("Alter")]),t._v(" "),a("td",[t._v("修改表结构的权限")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("Drop")]),t._v(" "),a("td",[t._v("删除数据库和表的权限")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("Index")]),t._v(" "),a("td",[t._v("建立和删除索引的权限")])]),t._v(" "),a("tr",[a("td",[t._v("DML")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("Select")]),t._v(" "),a("td",[t._v("查询表中数据的权限")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("Insert")]),t._v(" "),a("td",[t._v("向表中插入数据的权限")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("Update")]),t._v(" "),a("td",[t._v("更新表中数据的权限")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("Delete")]),t._v(" "),a("td",[t._v("删除表中数据的权限")])]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td",[t._v("Exectute")]),t._v(" "),a("td",[t._v("执行存储过程的权限")])])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" show privileges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如何为用户授权？")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("遵循最小权限原则")])]),t._v(" "),a("li",[a("p",[t._v("使用 Grant 命令对用户授权")]),t._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("grant select, insert, update, delete on db.tb to <user>@<ip>;\nrevoke delete on db.tb from <user>@<ip>;\n")])])])])])])])]),t._v(" "),a("li",[a("p",[t._v("如何保证数据库账号的安全")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("数据库用户管理流程规范")]),t._v(" "),a("p",[t._v("最小权限原则")]),t._v(" "),a("p",[t._v("密码强度策略")]),t._v(" "),a("p",[t._v("密码过期原则")]),t._v(" "),a("p",[t._v("限制历史密码重用原则")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("h create user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" create user test@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),t._v(" identified by "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456'")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" * from mysql.user where "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("G\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nPassword reuse_history: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" aleter user test@"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),t._v(" password expire"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 密码过期")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# test@'localhost'")]),t._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" show databases"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nERROR "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1820")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HY000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": You must reset your password using ALTER "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),t._v(" statement before executing this statement. "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 需要重设密码")]),t._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" alter user user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" identified by "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nERROR "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3638")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HY000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": Cannot use these credentials "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test@localhost'")]),t._v(" because they contradict the password "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("history")]),t._v(" policy "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 违反密码安全策略（不能和之前的一样）")]),t._v("\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" alter user user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" identified by "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'654321'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("密码管理策略")])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);