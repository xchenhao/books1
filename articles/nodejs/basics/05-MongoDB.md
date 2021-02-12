# Ⅰ、MongoDB

### 一、安装数据库

https://docs.mongodb.com/manual/administration/install-community/

### 二、启动数据库

##### 1、windows

```s
mongod --dbpath d:/data/db
mongo
```

##### 2、mac

```s
mongod --config /usr/local/etc/mongod.conf
mongo
```

### 三、数据库操作

```s
use gp145
db/db.getName()
show dbs
db.createCollection('movies')
db.stats()
db.version()
db.getMongo() //connection to 127.0.0.1:27017
db.dropDatabase()
```

### 四、集合操作

```
db.createCollection('users')
db.getCollectionNames()
```

### 五、文档的操作

#### 5.1 添加

```js
db.users.insertOne({username: 'yangli', password: 'abc123'})
db.users.insertOne({username: 'haozeliang', email: 'hzl@126.com'})
db.users.insertOne({"username": 1, password: 123})
db.users.insertMany([{username: 'gaojie', password: 'gj', email: 'gj@126.com'}, {username: 'xinyi', password: 123, email: 123}])
db.users.insert([{username: 'yangli'}, {useranme: 'zeliang'}])
db.users.save()
```

#### 5.2 修改

```js
db.users.update({username: 'yangli'}, {username: 'yl'})

// 1、如果第二个参数是一个对象，后边两个参数无效
// 2、如果第二个参数是通过$set设置的话， 后两个参数才有效
// 3、后两个参数的第一个参数：true/如果数据查询不到，就创建 false/如果数据查询不到，就什么都不做
// 4、后两个参数第第二个参数：true/更新多条，false/更新一条
db.users.update({username: 'gp145'}, {$set: {username: 'yl'}}, true, true)
// 5、如果使用updateMany, 就不需要传递后两个参数第二个了
db.users.updateMany({username: 'yl'}, {$set: {username: 'yangli'}})
 ```

 ```js
 db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>,
     collation: <document>,
     arrayFilters: [ <filterdocument1>, ... ],
     hint:  <document|string>  // Available starting in MongoDB 4.2
   }
)

```
> 参考文档：https://docs.mongodb.com/manual/reference/method/db.collection.update/#db.collection.update

#### 5.3 删除

```js
db.users.remove({username: 'xinyi'}, true)

```
> 参考文档：https://docs.mongodb.com/manual/reference/method/db.collection.remove/

#### 5.4 查找

```js
db.movies.find({}, {nm: 1, _id: 0, rt: 1})
db.movies.find({}, {nm: 1, _id: 0, rt: 1}).sort({rt: -1})
db.movies.find({}, {nm: 1, _id: 0, rt: 1}).limit(10)
db.movies.find({}, {nm: 1, _id: 0, rt: 1}).sort({rt: -1}).limit(10)
db.movies.find({}, {nm: 1, _id: 0, rt: 1}).sort({rt: -1}).limit(3).skip(6)
db.movies.find({rt: {$gte: '2019-10-14'}}, {nm: 1, _id: 0, rt: 1})
db.movies.find({rt: {$gte: '2019-10-14'}}, {nm: 1, _id: 0, rt: 1})
db.movies.find({rt: {$gte: '2019-10-14'}}, {nm: 1, _id: 0, rt: 1}).count()
db.movies.find({rt: {$lte: '2019-10-14'}}, {nm: 1, _id: 0, rt: 1}).count()
db.movies.find({nm: /小/}, {nm: 1, _id: 0, rt: 1}).sort({rt: -1})
```

### 六、数据库管理工具

robo 3T

# Ⅱ、Mongoose

### 1、数据库连接

```js
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/lagou-admin', { useUnifiedTopology: true, useNewUrlParser: true })

const Users = mongoose.model('users', {
  username: String,
  password: String
})

module.exports = {
  Users
}
```

### 2、Route

```js
var express = require('express')
var router = express.Router()

const { signup, hasUsername } = require('../controllers/users')

router.post('/signup', hasUsername, signup)

module.exports = router
```

### 3、Model

```js
const { Users } = require('../utils/db')

const save = (data) => {
  const users = new Users(data)
  return users.save()
}

const findOne = (conditions) => {
  return Users.findOne(conditions)
}

module.exports = {
  save,
  findOne
}
```

### 4、View

art-template + express

```json
{
  "ret": true,
  "data": {{data}}
}
```

### 5、Controller

```js
const usersModel = require('../models/users')

const signup = async function(req, res, next) {
  res.set('Content-Type', 'application/json; charset=utf-8')

  let { username, password } = req.body

  let result = await usersModel.save({
    username,
    password: hash
  })
  
  if (result) {
    res.render('succ', {
      data: JSON.stringify({
        message: '用户注册成功.'
      })
    })
  } else {
    res.render('fail', {
      data: JSON.stringify({
        message: '用户注册失败.'
      })
    })
  }
}

const hasUsername = async function(req, res, next) {
  res.set('Content-Type', 'application/json; charset=utf-8')
  let { username } = req.body
  let result = await usersModel.findOne({username})
  if (result) {
    res.render('fail', {
      data: JSON.stringify({
        message: '用户名已经存在.'
      })
    })
  } else {
    next()
  }
}

module.exports = {
  signup,
  hasUsername
}
```