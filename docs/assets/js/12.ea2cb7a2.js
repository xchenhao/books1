(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{737:function(t,s,a){t.exports=a.p+"assets/img/tdd-note.169e61cb.png"},789:function(t,s,a){"use strict";a.r(s);var n=a(49),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"tdd-笔记"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tdd-笔记"}},[t._v("#")]),t._v(" TDD 笔记")]),t._v(" "),n("h3",{attrs:{id:"测试驱动开发-tdd-test-driven-development"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试驱动开发-tdd-test-driven-development"}},[t._v("#")]),t._v(" 测试驱动开发 TDD(Test Driven Development)")]),t._v(" "),n("h4",{attrs:{id:"是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[t._v("#")]),t._v(" 是什么")]),t._v(" "),n("ul",[n("li",[t._v("一种开发流程")]),t._v(" "),n("li",[t._v("理念：以终为始，通过测试出期望的结果来推动开发的进行")])]),t._v(" "),n("h4",{attrs:{id:"有什么用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#有什么用"}},[t._v("#")]),t._v(" 有什么用")]),t._v(" "),n("ul",[n("li",[t._v("在测试的保护下改善既有的代码设计")]),t._v(" "),n("li",[t._v("减少手工直觉测试的遗漏（扩大测试覆盖面）")]),t._v(" "),n("li",[t._v("及时反馈")])]),t._v(" "),n("h4",{attrs:{id:"执行步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行步骤"}},[t._v("#")]),t._v(" 执行步骤")]),t._v(" "),n("p",[n("img",{attrs:{src:a(737),alt:"开发流程"}})]),t._v(" "),n("ol",[n("li",[t._v("先写测试，并运行测试")]),t._v(" "),n("li",[t._v("测试失败")]),t._v(" "),n("li",[t._v("写刚好的（最少的）代码修复错误，再运行测试")]),t._v(" "),n("li",[t._v("测试通过")]),t._v(" "),n("li",[t._v("重构代码，并运行测试，测试失败")]),t._v(" "),n("li",[t._v("重复 3")])]),t._v(" "),n("h4",{attrs:{id:"例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),n("h5",{attrs:{id:"先写测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#先写测试"}},[t._v("#")]),t._v(" 先写测试")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先创建测试用例：$GOPATH/src/tdd/main_test.go")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testing"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("TestAdd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("testing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" actual "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\tactual "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\texpected "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" expected "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" actual "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Errorf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"expected %d, got %d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expected"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h5",{attrs:{id:"运行测试-测试失败"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行测试-测试失败"}},[t._v("#")]),t._v(" 运行测试：测试失败")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("go "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" -v ./\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 输出结果\n\n# go_test [go_test.test]\n./main_test.go:10:11: undefined: Add\nFAIL    go_test [build failed]\n")])])]),n("h5",{attrs:{id:"修复-编写必要代码使测试通过"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修复-编写必要代码使测试通过"}},[t._v("#")]),t._v(" 修复：编写必要代码使测试通过")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编写必要代码")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $GOPATH/src/tdd/main.go")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 再运行测试\n# go_test [go_test.test]\n./main_test.go:10:14: too many arguments in call to Add\n        have (number, number)\n        want ()\n./main_test.go:10:14: Add(3, 5) used as value\nFAIL    go_test [build failed]\n")])])]),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 再编写必要代码")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $GOPATH/src/tdd/main.go")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 再运行测试\n=== RUN   TestAdd\n--- FAIL: TestAdd (0.00s)\n    main_test.go:13: expected 8, got 0\nFAIL\nFAIL    go_test 0.005s\n")])])]),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 再编写必要代码")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $GOPATH/src/tdd/main.go")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("=== RUN   TestAdd\n--- PASS: TestAdd (0.00s)\nPASS\nok      go_test 0.007s\n")])])]),n("h5",{attrs:{id:"重构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重构"}},[t._v("#")]),t._v(" 重构")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $GOPATH/src/tdd/main_test.go")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testing"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("TestAdd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("testing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test func Add: 1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("testing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" actual "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\t\tactual "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\texpected "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" expected "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" actual "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Errorf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"expected %d, got %d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expected"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test func Add: 2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("testing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" actual "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\t\tactual "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\texpected "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" expected "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" actual "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Errorf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"expected %d, got %d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expected"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 运行测试\n=== RUN   TestAdd\n=== RUN   TestAdd/test_func_Add:_1\n=== RUN   TestAdd/test_func_Add:_2\n--- FAIL: TestAdd (0.00s)\n    --- PASS: TestAdd/test_func_Add:_1 (0.00s)\n    --- FAIL: TestAdd/test_func_Add:_2 (0.00s)\n        main_test.go:24: expected 9, got 8\nFAIL\nFAIL    go_test 0.005s\n")])])]),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 再编写必要代码")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $GOPATH/src/tdd/main.go")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 再测试\n=== RUN   TestAdd\n=== RUN   TestAdd/test_func_Add:_1\n=== RUN   TestAdd/test_func_Add:_2\n--- PASS: TestAdd (0.00s)\n    --- PASS: TestAdd/test_func_Add:_1 (0.00s)\n    --- PASS: TestAdd/test_func_Add:_2 (0.00s)\nPASS\nok      go_test 0.006s\n")])])]),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重构")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $GOPATH/src/tdd/main.go")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 测试重构的代码\n=== RUN   TestAdd\n=== RUN   TestAdd/test_func_Add:_1\n=== RUN   TestAdd/test_func_Add:_2\n--- PASS: TestAdd (0.00s)\n    --- PASS: TestAdd/test_func_Add:_1 (0.00s)\n    --- PASS: TestAdd/test_func_Add:_2 (0.00s)\nPASS\nok      go_test (cached)  ## 缓存？\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("js:tdd chenhao$ go test --count=1 -v ./\n=== RUN   TestAdd\n=== RUN   TestAdd/test_func_Add:_1\n=== RUN   TestAdd/test_func_Add:_2\n--- PASS: TestAdd (0.00s)\n    --- PASS: TestAdd/test_func_Add:_1 (0.00s)\n    --- PASS: TestAdd/test_func_Add:_2 (0.00s)\nPASS\nok      go_test 0.006s\n")])])]),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重构测试代码：$GOPATH/src/tdd/main_test.go")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("TestAdd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("testing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test func Add: 1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("testing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" actual "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\t\tactual "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\texpected "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEqual")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expected"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test func Add: 2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("testing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" actual "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\t\tactual "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\texpected "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEqual")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expected"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("assertEqual")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("testing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expected"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actual "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Helper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" expected "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" actual "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Errorf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"expected %d, got %d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expected"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actual"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 运行测试\n=== RUN   TestAdd\n=== RUN   TestAdd/test_func_Add:_1\n=== RUN   TestAdd/test_func_Add:_2\n--- PASS: TestAdd (0.00s)\n    --- PASS: TestAdd/test_func_Add:_1 (0.00s)\n    --- PASS: TestAdd/test_func_Add:_2 (0.00s)\nPASS\nok      go_test 0.005s\n")])])]),n("h4",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("TDD 百度百科"),n("br"),t._v("\nhttps://baike.baidu.com/item/TDD/9064369?fr=aladdin")])]),t._v(" "),n("li",[n("p",[t._v("深度解读 - TDD（测试驱动开发）"),n("br"),t._v("\nhttps://www.jianshu.com/p/62f16cd4fef3")])]),t._v(" "),n("li",[n("p",[t._v("「Live Coding」TDD - Word Frequency"),n("br"),t._v("\nhttps://www.bilibili.com/video/av9208705")])]),t._v(" "),n("li",[n("p",[t._v("《测试驱动开发--Kent Beck》阅读心得"),n("br"),t._v("\nhttps://www.jianshu.com/p/dfa00fe2d40b")])]),t._v(" "),n("li",[n("p",[t._v("一个实例搞懂 TDD（测试驱动开发）"),n("br"),t._v("\nhttp://blog.51cto.com/2681882/2120480")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);