/**
 * Created by xiaobxia on 2017/7/7.
 */
let app = require('express')();
let server = require('http').Server(app);
let io = require('socket.io')(server);

server.listen(80);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/page/index.html');
});
io.on('connection', function (socket) {
    setInterval(function () {
        socket.emit('news', { hello: 'world' });
    },2000);
    socket.on('my other event', function (data) {
        console.log(data);
    });
});
