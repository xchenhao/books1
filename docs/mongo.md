#### 起步

##### 安装

```shell
brew install mongodb

# 遇到 Error: An unexpected error occurred during the `brew link` step 解决方法
# 参考 https://blog.csdn.net/qq_24909089/article/details/83378210
sudo mkdir /usr/local/Frameworks
sudo chown -R $(whoami) /usr/local/Frameworks
```

##### 启动

```shell
# 启动服务器
mkdir -p ./mongodb/data/db
mongod --dbpath ./mongodb/data/db

# 启动客户端
mongo
```

#### 小试牛刀

##### 查看数据库
>show dbs

admin   0.000GB
config  0.000GB
local   0.000GB

##### 创建/进入数据库
>use test

	switched to db test

##### 查看当前数据库
>db

	test

##### 插入文档
>db.myCollection.insert({'fruit': 'apple'})

	WriteResult({ "nInserted" : 1 })

##### 查看文档
>db.myCollection.find()

	{ "_id" : ObjectId("5cd6931cb2978f4bd9becafc"), "fruit" : "apple" }

##### 查看当前数据库的所有集合
>show tables 或 show collections

	myCollection

##### 删除文档
>db.myCollection.remove()

	WriteResult({ "nRemoved" : 1 })

##### 删除集合
>db.myCollection.drop()

	true

##### 删除当前数据库
>db.dropDatabase()

	{ "dropped" : "test", "ok" : 1 } 

#### 更新 update(query, update, upsert, multi)
##### $inc 增加计数
>数据准备
>db.myCollection.insert({"fruit": "banana", "count": 1})

>增加 3
> db.myCollection.update({"fruit": "banana"}, {$inc: {"count": 3}})
> db.myCollection.find()

	# 由 1 变成 4
	{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4 }

##### \$set 设置字段值（若不存在则创建，已存在则覆盖），\$unset 删除字段
> 增加字段 owner
> db.myCollection.update({"fruit": "banana"}, {"$set": {"owner": "xchenhao"}})
> db.myCollection.find()

	{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : "xchenhao" }

>已存在情况下则覆盖原有
> db.myCollection.update({"fruit": "banana"}, {"$set": {"owner": "somebody"}})
> db.myCollection.find()

	{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : "somebody" }

>删除字段
> db.myCollection.update({"fruit": "banana"}, {"$unset": {"owner": 1}})
> db.myCollection.find()

	{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4 }

##### $push 对数组追加元素
> db.myCollection.update({"fruit": "banana"}, {$push: {"owner": "xchenhao"}})
> db.myCollection.update({"fruit": "banana"}, {$push: {"owner": "somebody"}})
> db.myCollection.update({"fruit": "banana"}, {$push: {"owner": "somebody"}})
> db.myCollection.find()

	{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "xchenhao", "somebody", "somebody" ] }

##### $pop 从数组元素中弹出元素（1 从尾部，-1 从头部）
> db.myCollection.update({"fruit": "banana"}, {$pop: {"owner": 1}})
> db.myCollection.find()
	
	{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "xchenhao", "somebody" ] }

##### $addToSet 添加到集合中（若已存在则不会增加）
> $each 可以依次增加
> db.myCollection.update({"fruit": "banana"}, {$addToSet: {"owner": {$each: ["somebody", "someone"]}}})
> db.myCollection.find()

	{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "xchenhao", "somebody", "someone" ] }

> db.myCollection.update({"fruit": "banana"}, {$pop: {"owner": -1}})
> db.myCollection.find()

	{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "somebody", "someone" ] }

##### $pull 删除数组中完全匹配的元素
> db.myCollection.update({"fruit": "banana"}, {$push: {"owner": "somebody"}})
> db.myCollection.find()

	{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "somebody", "someone", "somebody" ] }

> db.myCollection.update({"fruit": "banana"}, {$pull: {"owner": "somebody"}})
> db.myCollection.find()

	{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "someone" ] }

##### $set 的补充说明：对数组中的某个位置元素进行更新
> 准备数据
> db.myCollection.update({"fruit": "banana"}, {$set: {"owner": ["xchenhao", "somebody", "someone"]}})
> db.myCollection.find()

	{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "xchenhao", "somebody", "someone" ] }

> 对数组第一个元素进行更新
> db.myCollection.update({"fruit": "banana"}, {$set: {"owner.0": "whoami"}})
> db.myCollection.find()

	{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "whoami", "somebody", "someone" ] }

> 不知道位置则用 $ 代替（查找到的位置）
> db.myCollection.update({"owner": "whoami"}, {$set: {"owner.$": "It is me"}})
> db.myCollection.find()

	{ "_id" : ObjectId("5cd69a30b2978f4bd9becafd"), "fruit" : "banana", "count" : 4, "owner" : [ "It is me", "somebody", "someone" ] }

##### update 第三个参数 upsert（是否在不存在的情况下进行插入）

> db.fruit.find()
> db.fruit.update({"name": "apple"}, {$set: {"count": 100}}, true)

	WriteResult({
	        "nMatched" : 0,
	        "nUpserted" : 1,
	        "nModified" : 0,
	        "_id" : ObjectId("5cd6a66105b099b1e534eaed")
	})

> db.fruit.find()

	{ "_id" : ObjectId("5cd6a66105b099b1e534eaed"), "name" : "apple", "count" : 100 }

> db.fruit.update({"name": "apple"}, {$set: {"count": 999}}, true)
> db.fruit.find()

	{ "_id" : ObjectId("5cd6a66105b099b1e534eaed"), "name" : "apple", "count" : 999 }


##### save() 更新或创建（更新时需要指定 _id）
> db.fruit.save({"name": "banana", "count": 10})

	WriteResult({ "nInserted" : 1 })

> db.fruit.find()

	{ "_id" : ObjectId("5cd6a66105b099b1e534eaed"), "name" : "apple", "count" : 999 }
	{ "_id" : ObjectId("5cd6a6a0b2978f4bd9becafe"), "name" : "banana", "count" : 10 }

> db.fruit.save({"_id": ObjectId("5cd6a6a0b2978f4bd9becafe"), "name": "banana", "count": 800})

	WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

> db.fruit.find()
	
	{ "_id" : ObjectId("5cd6a66105b099b1e534eaed"), "name" : "apple", "count" : 999 }
	{ "_id" : ObjectId("5cd6a6a0b2978f4bd9becafe"), "name" : "banana", "count" : 800 }

##### update 第四个参数是否更新多个文档（默认只更新找到的第一个文档）
> db.fruit.find()

	{ "_id" : ObjectId("5cd6a66105b099b1e534eaed"), "name" : "apple", "count" : 999 }
	{ "_id" : ObjectId("5cd6a6a0b2978f4bd9becafe"), "name" : "banana", "count" : 800 }

> db.fruit.update({}, {$inc: {"count": -100}}, false, false)

	WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

> db.fruit.find()

	{ "_id" : ObjectId("5cd6a66105b099b1e534eaed"), "name" : "apple", "count" : 899 }
	{ "_id" : ObjectId("5cd6a6a0b2978f4bd9becafe"), "name" : "banana", "count" : 800 }

> db.fruit.update({}, {$inc: {"count": -100}}, false, true)

	WriteResult({ "nMatched" : 2, "nUpserted" : 0, "nModified" : 2 })

> db.fruit.find()

	{ "_id" : ObjectId("5cd6a66105b099b1e534eaed"), "name" : "apple", "count" : 799 }
	{ "_id" : ObjectId("5cd6a6a0b2978f4bd9becafe"), "name" : "banana", "count" : 700 }

> 获取上次执行的反馈信息
> db.runCommand({getLastError: 1})

	{
	        "connectionId" : 1,
	        "n" : 0,
	        "syncMillis" : 0,
	        "writtenTo" : null,
	        "err" : null,
	        "ok" : 1
	}

#### 查询 find(query, show_fields)
> db.food.find()

	{ "_id" : ObjectId("5cd6ec90b2978f4bd9becaff"), "count" : 30, "name" : "薯条" }
	{ "_id" : ObjectId("5cd6ecb8b2978f4bd9becb00"), "name" : "炸鸡", "count" : 8 }
	{ "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"), "name" : "热狗", "count" : 12 }

>第二参数指定是否输出（0 为不输出，除了 _id 外，其它需全为 1 或 0）
>参考 https://www.runoob.com/mongodb/mongodb-query.html
>db.food.find({}, {"name": 1, "_id": 0})
	
	{ "name" : "薯条" }
	{ "name" : "炸鸡" }
	{ "name" : "热狗" }

> 查询 count 小于 10
> db.food.find({"count": {$lt: 10}})
	
	{ "_id" : ObjectId("5cd6ecb8b2978f4bd9becb00"), "name" : "炸鸡", "count" : 8 }

> 查询 count 大于 10 且小于 20
> db.food.find({"count": {$gt: 10, $lt: 20}})

	{ "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"), "name" : "热狗", "count" : 12 }

> 查询 name 不等于 炸鸡
> db.food.find({"name": {$ne: "炸鸡"}})

	{ "_id" : ObjectId("5cd6ec90b2978f4bd9becaff"), "count" : 30, "name" : "薯条" }
	{ "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"), "name" : "热狗", "count" : 12 }

> 查询 name 属于在热狗、薯条之中的
> db.food.find({"name": {$in: ["热狗", "薯条"]}})

	{ "_id" : ObjectId("5cd6ec90b2978f4bd9becaff"), "count" : 30, "name" : "薯条" }
	{ "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"), "name" : "热狗", "count" : 12 }

> 查询 name 为薯条或炸鸡
> db.food.find({$or: [{"name": "薯条"}, {"name": "炸鸡"}]})
	
	{ "_id" : ObjectId("5cd6ec90b2978f4bd9becaff"), "count" : 30, "name" : "薯条" }
	{ "_id" : ObjectId("5cd6ecb8b2978f4bd9becb00"), "name" : "炸鸡", "count" : 8 }

> db.food2.find()
	
	{ "_id" : ObjectId("5cd6ec90b2978f4bd9becaff"), "count" : 30, "name" : "薯条", "style" : [ "微辣", "香辣" ] }
	{ "_id" : ObjectId("5cd6ecb8b2978f4bd9becb00"), "name" : "炸鸡", "count" : 8, "style" : [ "微辣", "香辣" ] }
	{ "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"), "name" : "热狗", "count" : 12, "style" : [ "原味" ] }

> 查询 style 包含香辣及微辣的
> db.food2.find({"style": {$all: ["香辣", "微辣"]}})

	{ "_id" : ObjectId("5cd6ec90b2978f4bd9becaff"), "count" : 30, "name" : "薯条", "style" : [ "微辣", "香辣" ] }
	{ "_id" : ObjectId("5cd6ecb8b2978f4bd9becb00"), "name" : "炸鸡", "count" : 8, "style" : [ "微辣", "香辣" ] }

> 查询 style 只有 1 个
> db.food.find({"style": {$size: 1}})

	{ "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"), "name" : "热狗", "count" : 12, "style" : [ "原味" ] }

> 按 count 倒序排
> db.food.find().sort({"count": -1})

	{ "_id" : ObjectId("5cd6ec90b2978f4bd9becaff"), "count" : 30, "name" : "薯条", "style" : [ "微辣", "香辣" ] }
	{ "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"), "name" : "热狗", "count" : 12, "style" : [ "原味" ] }
	{ "_id" : ObjectId("5cd6ecb8b2978f4bd9becb00"), "name" : "炸鸡", "count" : 8, "style" : [ "微辣", "香辣" ] }

> 按 count 倒序排，跳过第 1 个，输出 1 个
> db.food.find().sort({"count": -1}).skip(1).limit(1)

	{ "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"), "name" : "热狗", "count" : 12, "style" : [ "原味" ] }

> 格式化输出
> db.food2.find().pretty()

	{
	        "_id" : ObjectId("5cd6ec90b2978f4bd9becaff"),
	        "count" : 30,
	        "name" : "薯条",
	        "style" : [
	                "微辣",
	                "香辣"
	        ]
	}
	{
	        "_id" : ObjectId("5cd6ecb8b2978f4bd9becb00"),
	        "name" : "炸鸡",
	        "count" : 8,
	        "style" : [
	                "微辣",
	                "香辣"
	        ]
	}
	{
	        "_id" : ObjectId("5cd6ecc2b2978f4bd9becb01"),
	        "name" : "热狗",
	        "count" : 12,
	        "style" : [
	                "原味"
	        ]
	}


#### 参考
- https://www.runoob.com/mongodb/mongodb-update.html
- https://github.com/qianjiahao/MongoDB

