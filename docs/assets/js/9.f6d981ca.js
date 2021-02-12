(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{790:function(t,s,a){t.exports=a.p+"assets/img/image-20210102191640351.b0af3b79.png"},791:function(t,s,a){t.exports=a.p+"assets/img/image-20210102194322708.ec70dc9d.png"},792:function(t,s,a){t.exports=a.p+"assets/img/image-20210102191407332.d4ea33dc.png"},852:function(t,s,a){"use strict";a.r(s);var n=a(49),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"openresty"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#openresty"}},[t._v("#")]),t._v(" OpenResty")]),t._v(" "),n("h4",{attrs:{id:"核心组成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心组成"}},[t._v("#")]),t._v(" 核心组成")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Nginx")])]),t._v(" "),n("li",[n("p",[t._v("lua-nginx-module 模块")]),t._v(" "),n("ul",[n("li",[t._v("将 LuaJIT 虚拟机嵌入其中")])]),t._v(" "),n("p",[n("strong",[t._v("LuaJIT(Lua Just-In-Time)与标准 Lua 的关系")])]),t._v(" "),n("blockquote",[n("p",[t._v("标准 Lua: 由编译器编译为字节码，再由 Lua 虚拟机执行")]),t._v(" "),n("p",[t._v("LuaJIT: 在执行字节码的同时记录运行时的统计信息（如某个函数/循环的实际运行次数），当这些次数超过某个阈值时，会触发 JIT 编译器编译（把字节码转为中间码，再生成目标体系结构的机器码）")])]),t._v(" "),n("p",[n("strong",[t._v("LuaJIT NYI(Not Yet Implemented)原语 <http://wiki.luajit.org/NYI >")])]),t._v(" "),n("p",[t._v("有些函数 JIT 由于不支持，在执行时会退回到标准 Lua 的解释执行模式，如 "),n("code",[t._v("string.find()")]),t._v("，应尽量换成 OpenResty 自带的 API，如 "),n("code",[t._v("ngx.re.find()")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(790),alt:"image-20210102191640351"}})])])]),t._v(" "),n("h4",{attrs:{id:"特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("同步 && 非阻塞")]),t._v(" "),n("p",[t._v("cosocket: 各种 lua-resty-* 非阻塞库的基础 ，依赖于 Lua 协程与 Nginx 事件机制，实现非阻塞网络 I/O")]),t._v(" "),n("p",[n("img",{attrs:{src:a(791),alt:"image-20210102194322708"}})])]),t._v(" "),n("li",[n("p",[t._v("支持 FFI(Foreign Function Interface)方式调用外部 C 函数")]),t._v(" "),n("div",{staticClass:"language-lua extra-class"},[n("pre",{pre:!0,attrs:{class:"language-lua"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" ffi "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ffi"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nffi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cdef"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("[[\n\tint printf(const char *fmt, ...);\n]]")]),t._v("\nffi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("C"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello %s!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[t._v("提供轻量级线程、定时器、发送 HTTP 请求、调用外部命令、查询数据库等")])])]),t._v(" "),n("h4",{attrs:{id:"应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),n("ul",[n("li",[t._v("API 网关/软 WAF")])]),t._v(" "),n("h4",{attrs:{id:"执行阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行阶段"}},[t._v("#")]),t._v(" 执行阶段")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Nginx 11 个执行阶段 ngx_http_core_module.h")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    NGX_HTTP_POST_READ_PHASE "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    NGX_HTTP_SERVER_REWRITE_PHASE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    NGX_HTTP_FIND_CONFIG_PHASE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    NGX_HTTP_REWRITE_PHASE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    NGX_HTTP_POST_REWRITE_PHASE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    NGX_HTTP_PREACCESS_PHASE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    NGX_HTTP_ACCESS_PHASE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    NGX_HTTP_POST_ACCESS_PHASE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    NGX_HTTP_PRECONTENT_PHASE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    NGX_HTTP_CONTENT_PHASE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    NGX_HTTP_LOG_PHASE\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" ngx_http_phases"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("OpenResty 的执行阶段")]),t._v(" "),n("p",[n("img",{attrs:{src:a(792),alt:"image-20210102191407332"}})]),t._v(" "),n("h4",{attrs:{id:"包管理器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#包管理器"}},[t._v("#")]),t._v(" 包管理器")]),t._v(" "),n("p",[t._v("OPM(OpenResty Package Manager) https://opm.openresty.org/")]),t._v(" "),n("p",[t._v("LuaRocks  "),n("a",{attrs:{href:"https://luarocks.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://luarocks.org"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("awesome-resty https://github.com/bungle/awesome-resty")]),t._v(" "),n("h4",{attrs:{id:"其它"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("docker pull openresty/openresty\n")])])]),n("h4",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("p",[t._v("OpenResty 最佳实践 https://moonbingbing.gitbooks.io/openresty-best-practices")]),t._v(" "),n("p",[t._v("OpenResty 从入门到实战 http://gk.link/a/103tv")])])}),[],!1,null,null,null);s.default=e.exports}}]);