/**
 * Created by xiaobxia on 2017/7/11.
 */
//使用request的版本
const request = require('request');
let proxy = 'http://114.215.241.176:8080';
let url = 'xxxxxx'
let option = {
    //encoding可以指定编码
    url: url,
    proxy: proxy,
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.6',
        'Host': 'www.dianping.com',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Mobile Safari/537.36',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive'
    }
};
request(option,function () {
});
//使用原生的http版
let http = require('http'); // 使用http模块，也可以换成https模块
let opt = {
    host: '58.246.194.70', // 这里是代理服务器的地址
    port: '808', // 这里是代理服务器的端口号
    method: 'GET', // 这里是发送的方法
    path: 'url', // 这里是访问的路径
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.6',
        'Host': 'www.dianping.com',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Mobile Safari/537.36',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive'
    }
};
let body = '';
let req = http.request(opt, function(res) {
    console.log("Got response: " + res.statusCode);
    res.on('data', function(d) {
        body += d;
    }).on('end', function() {
        //console.log(res);
        console.info('============');

        console.log(body)
    });

}).on('error', function(e) {
    console.log("Got error: " + e.message);
});

req.end();