/**
 * Created by xiaobxia on 2017/7/7.
 */
var express = require('express')
var app = express()
var multiparty = require('multiparty')

let form = new multiparty.Form();
//form.encoding = 'utf-8';
//设置文件存储路径
form.uploadDir = "uploads/";
//设置单文件大小限制
//form.maxFilesSize = 2 * 1024 * 1024;
app.post('/profile', function (req, res, next) {
  form.parse(req, function (err, fields, files) {
    console.log(err)
    console.log(fields)
    console.log(files)
    //需要对文件重命名
    res.end('ok')
  })
});

//启动服务器
module.exports = app.listen(4000, function (err) {
  if (err) {
    logger.debug(err)
    return
  }
  let uri = 'http://localhost:' + 4000;
  console.log('Listening at ' + uri)
});
