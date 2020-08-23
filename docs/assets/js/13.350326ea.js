(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{748:function(e,a,t){"use strict";t.r(a);var n=t(49),d=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h4",{attrs:{id:"mongo-起步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongo-起步"}},[e._v("#")]),e._v(" Mongo 起步")]),e._v(" "),t("h5",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" mongodb\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 遇到 Error: An unexpected error occurred during the `brew link` step 解决方法")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 参考 https://blog.csdn.net/qq_24909089/article/details/83378210")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" /usr/local/Frameworks\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("whoami")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" /usr/local/Frameworks\n")])])]),t("h5",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[e._v("#")]),e._v(" 启动")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 启动服务器")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p ./mongodb/data/db\nmongod --dbpath ./mongodb/data/db\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 启动客户端")]),e._v("\nmongo\n")])])]),t("h4",{attrs:{id:"小试牛刀"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小试牛刀"}},[e._v("#")]),e._v(" 小试牛刀")]),e._v(" "),t("h5",{attrs:{id:"查看数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看数据库"}},[e._v("#")]),e._v(" 查看数据库")]),e._v(" "),t("blockquote",[t("p",[e._v("show dbs")])]),e._v(" "),t("p",[e._v("admin   0.000GB\nconfig  0.000GB\nlocal   0.000GB")]),e._v(" "),t("h5",{attrs:{id:"创建-进入数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-进入数据库"}},[e._v("#")]),e._v(" 创建/进入数据库")]),e._v(" "),t("blockquote",[t("p",[e._v("use test")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("switched to db test\n")])])]),t("h5",{attrs:{id:"查看当前数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前数据库"}},[e._v("#")]),e._v(" 查看当前数据库")]),e._v(" "),t("blockquote",[t("p",[e._v("db")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("test\n")])])]),t("h5",{attrs:{id:"插入文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入文档"}},[e._v("#")]),e._v(" 插入文档")]),e._v(" "),t("blockquote",[t("p",[e._v("db.myCollection.insert({'fruit': 'apple'})")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('WriteResult({ "nInserted" : 1 })\n')])])]),t("h5",{attrs:{id:"查看文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看文档"}},[e._v("#")]),e._v(" 查看文档")]),e._v(" "),t("blockquote",[t("p",[e._v("db.myCollection.find()")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6931cb2978f4bd9becafc"), "fruit" : "apple" }\n')])])]),t("h5",{attrs:{id:"查看当前数据库的所有集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前数据库的所有集合"}},[e._v("#")]),e._v(" 查看当前数据库的所有集合")]),e._v(" "),t("blockquote",[t("p",[e._v("show tables 或 show collections")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("myCollection\n")])])]),t("h5",{attrs:{id:"删除文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除文档"}},[e._v("#")]),e._v(" 删除文档")]),e._v(" "),t("blockquote",[t("p",[e._v("db.myCollection.remove()")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('WriteResult({ "nRemoved" : 1 })\n')])])]),t("h5",{attrs:{id:"删除集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除集合"}},[e._v("#")]),e._v(" 删除集合")]),e._v(" "),t("blockquote",[t("p",[e._v("db.myCollection.drop()")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("true\n")])])]),t("h5",{attrs:{id:"删除当前数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除当前数据库"}},[e._v("#")]),e._v(" 删除当前数据库")]),e._v(" "),t("blockquote",[t("p",[e._v("db.dropDatabase()")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "dropped" : "test", "ok" : 1 } \n')])])]),t("h4",{attrs:{id:"更新-update-query-update-upsert-multi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新-update-query-update-upsert-multi"}},[e._v("#")]),e._v(" 更新 update(query, update, upsert, multi)")]),e._v(" "),t("h5",{attrs:{id:"inc-增加计数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inc-增加计数"}},[e._v("#")]),e._v(" $inc 增加计数")]),e._v(" "),t("blockquote",[t("p",[e._v('数据准备\ndb.myCollection.insert({"fruit": "banana", "count": 1})')])]),e._v(" "),t("blockquote",[t("p",[e._v('增加 3\ndb.myCollection.update({"fruit": "banana"}, {$inc: {"count": 3}})\ndb.myCollection.find()')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('# 由 1 变成 4\n{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4 }\n')])])]),t("h5",{attrs:{id:"set-设置字段值（若不存在则创建，已存在则覆盖），-unset-删除字段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-设置字段值（若不存在则创建，已存在则覆盖），-unset-删除字段"}},[e._v("#")]),e._v(" $set 设置字段值（若不存在则创建，已存在则覆盖），$unset 删除字段")]),e._v(" "),t("blockquote",[t("p",[e._v('增加字段 owner\ndb.myCollection.update({"fruit": "banana"}, {"$set": {"owner": "xchenhao"}})\ndb.myCollection.find()')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : "xchenhao" }\n')])])]),t("blockquote",[t("p",[e._v('已存在情况下则覆盖原有\ndb.myCollection.update({"fruit": "banana"}, {"$set": {"owner": "somebody"}})\ndb.myCollection.find()')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : "somebody" }\n')])])]),t("blockquote",[t("p",[e._v('删除字段\ndb.myCollection.update({"fruit": "banana"}, {"$unset": {"owner": 1}})\ndb.myCollection.find()')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4 }\n')])])]),t("h5",{attrs:{id:"push-对数组追加元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#push-对数组追加元素"}},[e._v("#")]),e._v(" $push 对数组追加元素")]),e._v(" "),t("blockquote",[t("p",[e._v('db.myCollection.update({"fruit": "banana"}, {$push: {"owner": "xchenhao"}})\ndb.myCollection.update({"fruit": "banana"}, {$push: {"owner": "somebody"}})\ndb.myCollection.update({"fruit": "banana"}, {$push: {"owner": "somebody"}})\ndb.myCollection.find()')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "xchenhao", "somebody", "somebody" ] }\n')])])]),t("h5",{attrs:{id:"pop-从数组元素中弹出元素（1-从尾部，-1-从头部）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pop-从数组元素中弹出元素（1-从尾部，-1-从头部）"}},[e._v("#")]),e._v(" $pop 从数组元素中弹出元素（1 从尾部，-1 从头部）")]),e._v(" "),t("blockquote",[t("p",[e._v('db.myCollection.update({"fruit": "banana"}, {$pop: {"owner": 1}})\ndb.myCollection.find()')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "xchenhao", "somebody" ] }\n')])])]),t("h5",{attrs:{id:"addtoset-添加到集合中（若已存在则不会增加）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#addtoset-添加到集合中（若已存在则不会增加）"}},[e._v("#")]),e._v(" $addToSet 添加到集合中（若已存在则不会增加）")]),e._v(" "),t("blockquote",[t("p",[e._v('$each 可以依次增加\ndb.myCollection.update({"fruit": "banana"}, {$addToSet: {"owner": {$each: ["somebody", "someone"]}}})\ndb.myCollection.find()')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "xchenhao", "somebody", "someone" ] }\n')])])]),t("blockquote",[t("p",[e._v('db.myCollection.update({"fruit": "banana"}, {$pop: {"owner": -1}})\ndb.myCollection.find()')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "somebody", "someone" ] }\n')])])]),t("h5",{attrs:{id:"pull-删除数组中完全匹配的元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pull-删除数组中完全匹配的元素"}},[e._v("#")]),e._v(" $pull 删除数组中完全匹配的元素")]),e._v(" "),t("blockquote",[t("p",[e._v('db.myCollection.update({"fruit": "banana"}, {$push: {"owner": "somebody"}})\ndb.myCollection.find()')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "somebody", "someone", "somebody" ] }\n')])])]),t("blockquote",[t("p",[e._v('db.myCollection.update({"fruit": "banana"}, {$pull: {"owner": "somebody"}})\ndb.myCollection.find()')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "someone" ] }\n')])])]),t("h5",{attrs:{id:"set-的补充说明：对数组中的某个位置元素进行更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-的补充说明：对数组中的某个位置元素进行更新"}},[e._v("#")]),e._v(" $set 的补充说明：对数组中的某个位置元素进行更新")]),e._v(" "),t("blockquote",[t("p",[e._v('准备数据\ndb.myCollection.update({"fruit": "banana"}, {$set: {"owner": ["xchenhao", "somebody", "someone"]}})\ndb.myCollection.find()')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "xchenhao", "somebody", "someone" ] }\n')])])]),t("blockquote",[t("p",[e._v('对数组第一个元素进行更新\ndb.myCollection.update({"fruit": "banana"}, {$set: {"owner.0": "whoami"}})\ndb.myCollection.find()')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "whoami", "somebody", "someone" ] }\n')])])]),t("blockquote",[t("p",[e._v('不知道位置则用 $ 代替（查找到的位置）\ndb.myCollection.update({"owner": "whoami"}, {$set: {"owner.$": "It is me"}})\ndb.myCollection.find()')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "It is me", "somebody", "someone" ] }\n')])])]),t("h5",{attrs:{id:"update-第三个参数-upsert（是否在不存在的情况下进行插入）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-第三个参数-upsert（是否在不存在的情况下进行插入）"}},[e._v("#")]),e._v(" update 第三个参数 upsert（是否在不存在的情况下进行插入）")]),e._v(" "),t("blockquote",[t("p",[e._v('db.fruit.find()\ndb.fruit.update({"name": "apple"}, {$set: {"count": 100}}, true)')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('WriteResult({\n        "nMatched" : 0,\n        "nUpserted" : 1,\n        "nModified" : 0,\n        "_id" : ObjectId("5cd6a66105b099b1e534eaed")\n})\n')])])]),t("blockquote",[t("p",[e._v("db.fruit.find()")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6a66105b099b1e534eaed"), "name" : "apple", "count" : 100 }\n')])])]),t("blockquote",[t("p",[e._v('db.fruit.update({"name": "apple"}, {$set: {"count": 999}}, true)\ndb.fruit.find()')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6a66105b099b1e534eaed"), "name" : "apple", "count" : 999 }\n')])])]),t("h5",{attrs:{id:"save-更新或创建（更新时需要指定-id）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#save-更新或创建（更新时需要指定-id）"}},[e._v("#")]),e._v(" save() 更新或创建（更新时需要指定 _id）")]),e._v(" "),t("blockquote",[t("p",[e._v('db.fruit.save({"name": "banana", "count": 10})')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('WriteResult({ "nInserted" : 1 })\n')])])]),t("blockquote",[t("p",[e._v("db.fruit.find()")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6a66105b099b1e534eaed"), "name" : "apple", "count" : 999 }\n{ "_id" : ObjectId("5cd6a6a0b2978f4bd9becafe"), "name" : "banana", "count" : 10 }\n')])])]),t("blockquote",[t("p",[e._v('db.fruit.save({"_id": ObjectId("5cd6a6a0b2978f4bd9becafe"), "name": "banana", "count": 800})')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })\n')])])]),t("blockquote",[t("p",[e._v("db.fruit.find()")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6a66105b099b1e534eaed"), "name" : "apple", "count" : 999 }\n{ "_id" : ObjectId("5cd6a6a0b2978f4bd9becafe"), "name" : "banana", "count" : 800 }\n')])])]),t("h5",{attrs:{id:"update-第四个参数是否更新多个文档（默认只更新找到的第一个文档）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-第四个参数是否更新多个文档（默认只更新找到的第一个文档）"}},[e._v("#")]),e._v(" update 第四个参数是否更新多个文档（默认只更新找到的第一个文档）")]),e._v(" "),t("blockquote",[t("p",[e._v("db.fruit.find()")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6a66105b099b1e534eaed"), "name" : "apple", "count" : 999 }\n{ "_id" : ObjectId("5cd6a6a0b2978f4bd9becafe"), "name" : "banana", "count" : 800 }\n')])])]),t("blockquote",[t("p",[e._v('db.fruit.update({}, {$inc: {"count": -100}}, false, false)')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })\n')])])]),t("blockquote",[t("p",[e._v("db.fruit.find()")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6a66105b099b1e534eaed"), "name" : "apple", "count" : 899 }\n{ "_id" : ObjectId("5cd6a6a0b2978f4bd9becafe"), "name" : "banana", "count" : 800 }\n')])])]),t("blockquote",[t("p",[e._v('db.fruit.update({}, {$inc: {"count": -100}}, false, true)')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('WriteResult({ "nMatched" : 2, "nUpserted" : 0, "nModified" : 2 })\n')])])]),t("blockquote",[t("p",[e._v("db.fruit.find()")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6a66105b099b1e534eaed"), "name" : "apple", "count" : 799 }\n{ "_id" : ObjectId("5cd6a6a0b2978f4bd9becafe"), "name" : "banana", "count" : 700 }\n')])])]),t("blockquote",[t("p",[e._v("获取上次执行的反馈信息\ndb.runCommand({getLastError: 1})")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{\n        "connectionId" : 1,\n        "n" : 0,\n        "syncMillis" : 0,\n        "writtenTo" : null,\n        "err" : null,\n        "ok" : 1\n}\n')])])]),t("h4",{attrs:{id:"查询-find-query-show-fields"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询-find-query-show-fields"}},[e._v("#")]),e._v(" 查询 find(query, show_fields)")]),e._v(" "),t("blockquote",[t("p",[e._v("db.food.find()")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6ec90b2978f4bd9becaff"), "count" : 30, "name" : "薯条" }\n{ "_id" : ObjectId("5cd6ecb8b2978f4bd9becb00"), "name" : "炸鸡", "count" : 8 }\n{ "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"), "name" : "热狗", "count" : 12 }\n')])])]),t("blockquote",[t("p",[e._v('第二参数指定是否输出（0 为不输出，除了 _id 外，其它需全为 1 或 0）\n参考 https://www.runoob.com/mongodb/mongodb-query.html\ndb.food.find({}, {"name": 1, "_id": 0})')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "name" : "薯条" }\n{ "name" : "炸鸡" }\n{ "name" : "热狗" }\n')])])]),t("blockquote",[t("p",[e._v('查询 count 小于 10\ndb.food.find({"count": {$lt: 10}})')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6ecb8b2978f4bd9becb00"), "name" : "炸鸡", "count" : 8 }\n')])])]),t("blockquote",[t("p",[e._v('查询 count 大于 10 且小于 20\ndb.food.find({"count": {$gt: 10, $lt: 20}})')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"), "name" : "热狗", "count" : 12 }\n')])])]),t("blockquote",[t("p",[e._v('查询 name 不等于 炸鸡\ndb.food.find({"name": {$ne: "炸鸡"}})')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6ec90b2978f4bd9becaff"), "count" : 30, "name" : "薯条" }\n{ "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"), "name" : "热狗", "count" : 12 }\n')])])]),t("blockquote",[t("p",[e._v('查询 name 属于在热狗、薯条之中的\ndb.food.find({"name": {$in: ["热狗", "薯条"]}})')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6ec90b2978f4bd9becaff"), "count" : 30, "name" : "薯条" }\n{ "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"), "name" : "热狗", "count" : 12 }\n')])])]),t("blockquote",[t("p",[e._v('查询 name 为薯条或炸鸡\ndb.food.find({$or: [{"name": "薯条"}, {"name": "炸鸡"}]})')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6ec90b2978f4bd9becaff"), "count" : 30, "name" : "薯条" }\n{ "_id" : ObjectId("5cd6ecb8b2978f4bd9becb00"), "name" : "炸鸡", "count" : 8 }\n')])])]),t("blockquote",[t("p",[e._v("db.food2.find()")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6ec90b2978f4bd9becaff"), "count" : 30, "name" : "薯条", "style" : [ "微辣", "香辣" ] }\n{ "_id" : ObjectId("5cd6ecb8b2978f4bd9becb00"), "name" : "炸鸡", "count" : 8, "style" : [ "微辣", "香辣" ] }\n{ "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"), "name" : "热狗", "count" : 12, "style" : [ "原味" ] }\n')])])]),t("blockquote",[t("p",[e._v('查询 style 包含香辣及微辣的\ndb.food2.find({"style": {$all: ["香辣", "微辣"]}})')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6ec90b2978f4bd9becaff"), "count" : 30, "name" : "薯条", "style" : [ "微辣", "香辣" ] }\n{ "_id" : ObjectId("5cd6ecb8b2978f4bd9becb00"), "name" : "炸鸡", "count" : 8, "style" : [ "微辣", "香辣" ] }\n')])])]),t("blockquote",[t("p",[e._v('查询 style 只有 1 个\ndb.food.find({"style": {$size: 1}})')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"), "name" : "热狗", "count" : 12, "style" : [ "原味" ] }\n')])])]),t("blockquote",[t("p",[e._v('按 count 倒序排\ndb.food.find().sort({"count": -1})')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6ec90b2978f4bd9becaff"), "count" : 30, "name" : "薯条", "style" : [ "微辣", "香辣" ] }\n{ "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"), "name" : "热狗", "count" : 12, "style" : [ "原味" ] }\n{ "_id" : ObjectId("5cd6ecb8b2978f4bd9becb00"), "name" : "炸鸡", "count" : 8, "style" : [ "微辣", "香辣" ] }\n')])])]),t("blockquote",[t("p",[e._v('按 count 倒序排，跳过第 1 个，输出 1 个\ndb.food.find().sort({"count": -1}).skip(1).limit(1)')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{ "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"), "name" : "热狗", "count" : 12, "style" : [ "原味" ] }\n')])])]),t("blockquote",[t("p",[e._v("格式化输出\ndb.food2.find().pretty()")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('{\n        "_id" : ObjectId("5cd6ec90b2978f4bd9becaff"),\n        "count" : 30,\n        "name" : "薯条",\n        "style" : [\n                "微辣",\n                "香辣"\n        ]\n}\n{\n        "_id" : ObjectId("5cd6ecb8b2978f4bd9becb00"),\n        "name" : "炸鸡",\n        "count" : 8,\n        "style" : [\n                "微辣",\n                "香辣"\n        ]\n}\n{\n        "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"),\n        "name" : "热狗",\n        "count" : 12,\n        "style" : [\n                "原味"\n        ]\n}\n')])])]),t("h4",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("ul",[t("li",[e._v("https://www.runoob.com/mongodb/mongodb-update.html")]),e._v(" "),t("li",[e._v("https://github.com/qianjiahao/MongoDB")])])])}),[],!1,null,null,null);a.default=d.exports}}]);