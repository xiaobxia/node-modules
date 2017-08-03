/**
 * Created by xiaobxia on 2017/7/7.
 */
let app = require('express')();
let server = require('http').Server(app);
let io = require('socket.io')(server, {
    // path: '/test',
    //是否提供客户端文件
    // serveClient: false,
    // 适配器
    // adapte
    //来源
    origins: null
    // 解析
    // parser
});
//也可以通过io.path();来配置
//在express下工作有影响，而且origin难以确定
// io.origins((origin, callback) => {
//     if (origin !== 'https://foo.example.com') {
//         return callback('origin not allowed', false);
//     }
//     callback(null, true);
// });
//初始化命名空间
// const adminNamespace = io.of('/admin');
//解除占用
// io.close();

const chat = io.of('/chat');
chat.emit('an event sent to all connected clients in chat namespace');

server.listen(80);
// app.get('/', function (req, res) {
//     res.sendfile(__dirname + '/page/index.html');
// });
io.on('connection', function (socket) {
    socket.emit('news', {hello: 'world'});
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

// io.on('connection', (socket) => {
//     //
//     socket.join('room 237', () => {
//         let rooms = Objects.keys(socket.rooms);
//         console.log(rooms); // [ <socket.id>, 'room 237' ]
//     });
// });
//
// io.on('connection', (socket) => {
//     // to one room
//     socket.to('others').emit('an event', { some: 'data' });
//     // to multiple rooms
//     socket.to('room1').to('room2').emit('hello');
//     // a private message to another socket
//     socket.to(/* another socket id */).emit('hey');
// });