/**
 * Created by xiaobxia on 2017/7/7.
 */
/**
 * 给浏览器使用，服务端负责生成token
 */
const qiniu = require('qiniu');
const config = require('./../config');
//1.创建鉴权对象
const accessKey = config.accessKey;
const secretKey = config.secretKey;
let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
//2.创建上传凭证
let options = {
    //上传的空间名
    scope: config.bucket+":aa.jpg",
    //scope: bucket + ":" + 'qiniu.mp4'  如果想要覆盖(这时空间里和客户端的文件名需要一致)
    //expires,凭证有效时间默认1小时
    expires: 7200,
    //返回的格式
    //默认{"hash":"$(etag)","key":"$(key)"}
    //returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}',
    //回调
    //callbackUrl: 'http://api.example.com/qiniu/upload/callback',
    //有callback，用callbackBody取代returnBody
    //callbackBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}',
    //指定callbackBody的格式
    //callbackBodyType: 'application/json'
};
let putPolicy = new qiniu.rs.PutPolicy(options);
let uploadToken=putPolicy.uploadToken(mac);
console.log(uploadToken);

