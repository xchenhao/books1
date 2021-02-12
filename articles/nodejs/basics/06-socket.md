# Socket 编程

### 一、基于 Net 模块的 Socket 编程

#### 1.1 ServerSocket.js

```js
const net = require('net')

const server = new net.createServer()

let clients = {}
let clientName = 0

server.on('connection', (client) => {
  client.name = ++clientName
  clients[client.name] = client

  client.on('data', (msg) => {
    // console.log('客户端传来：' + msg);
    broadcast(client, msg.toString())
  })

  client.on('error', (e) => {
    console.log('client error' + e);
    client.end()
  })

  client.on('close', (data) => {
    delete clients[client.name]
    console.log(client.name + ' 下线了');
  })
})

function broadcast(client, msg) {
  for (var key in clients) {
    clients[key].write(client.name + ' 说：' + msg)
  }
}

server.listen(9000, 'localhost')
```

#### 1.2 ClientSocket.js

```js
var net = require('net')
const readline = require('readline')

var port = 9000
var host = '127.0.0.1'

var socket = new net.Socket()

socket.setEncoding = 'UTF-8'

socket.connect(port, host, () => {
  socket.write('hello.')
})

socket.on('data', (msg) => {
  console.log(msg.toString())
  say()
})

socket.on('error', function (err) {
  console.log('error' + err);
})

socket.on('close', function () {
  console.log('connection closeed');
})

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function say() {
  r1.question('请输入：\n', (inputMsg) => {
    if (inputMsg != 'bye') {
      // socket.write(inputMsg + '\n')
    } else {
      socket.destroy()
      r1.close()
    }
  })
}
```

### 二、基于 WebSocket 的 Socket 编程

#### 2.1 WebSocketServer.js

```js
const WebSocket = require('ws')
const ws = new WebSocket.Server({ port: 8081 })

let clients = {}
let clientName = 0

ws.on('connection', (client) => {
  
  client.name = ++clientName
  clients[client.name] = client

  client.on('message', (msg) => {
    broadcast(client, msg)
  })

  client.on('close', () => {
    delete clients[client.name]
    console.log(client.name + ' 离开了~')
  })
})

function broadcast(client, msg) {
  for (var key in clients) {
    clients[key].send(client.name + ' 说：' + msg)
  }
}
```

#### 2.2 index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>WebSocket</title>
  <script src="WsClient.js" charset="utf-8"></script>
</head>
<body>
  <h1>gp 交流区</h1>
  <div id="content" name="name" style="overflow-y: scroll; width: 400px; height: 300px; border: solid 1px #000"></div>
  <br />
  <div>
    <input type="text" id="msg" style="width: 200px;">
  </div>
  <button id="submit">提交</button>
  <script>
    document.querySelector('#submit')
      .addEventListener('click', function () {
        var msg2 = msg.value
        ws.send(msg2) // 核心代码，将表单里的数据提交给server端
        msg.value = ''
      }, false)
  </script>
</body>
</html>
```

#### 2.3 WsClient.js

```js
const ws = new WebSocket('ws://localhost:8081/')

ws.onopen = () => {
  ws.send('大家好!')
}

ws.onmessage = (msg) => {
  const content = document.getElementById('content')
  content.innerHTML += msg.data + '<br/>'
}

ws.onerror = (err) => {
  console.log(err);
}

ws.onclose = () => {
  console.log('closed~');
}
```



### 三、基于 Socket.io 的 Socket 编程

#### 3.1 SocketIoServer.js

```js
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// app.use(express.static(__dirname + '/client'))

io.on('connection', function (socket) {
  // setInterval(function () {
  //   socket.emit('list', 'abc')
  // }, 1000)
  // socket.broadcast.emit('list', 'test');
  // socket.on('backend', (msg) => {
  //   console.log(msg);
  // })

  socket.on('receive', (msg) => {
    socket.broadcast.emit('message', msg);
  })
});

server.listen(8082, '10.9.49.156');
```

#### 3.2 index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>socket.io</title>
  <script src="socket.io.js" charset="utf-8"></script>
</head>
<body>
  <h1>gp 交流区</h1>
  <div id="content" name="name" style="overflow-y: scroll; width: 400px; height: 300px; border: solid 1px #000"></div>
  <br />
  <div>
    <input type="text" id="msg" style="width: 200px;">
  </div>
  <button id="submit">提交</button>
  <script>
    var socket = io.connect('http://10.9.49.156:8082');
    const content = document.getElementById('content')
    document.querySelector('#submit')
      .addEventListener('click', function () {
        var msg2 = msg.value
        socket.emit('receive', msg2) // 核心代码
        msg.value = ''
        content.innerHTML += msg2 + '<br/>'
      }, false)

      socket.on('message', function(msg){
        content.innerHTML += msg + '<br/>'
      })
  </script>
</body>
</html>
```

#### socket.io.js

```s
# 安装包
npm i socket.io
# 在 node_modules/socket.io-client/dist/ 找到 socket.io.js
```