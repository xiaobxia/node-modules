/**
 * Created by xiaobxia on 2017/7/7.
 */
const qiniu = require('qiniu');
const config = require('./../config');
const path = require('path');
//1.创建鉴权对象
const accessKey = config.accessKey;
const secretKey = config.secretKey;
let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
//2.创建上传凭证
let options = {
    //上传的空间名
    scope: config.bucket,
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
//3.创建配置
let UploadConfig = new qiniu.conf.Config();
//华南
UploadConfig.zone = qiniu.zone.Zone_z2;
//4.上传对象
let formUploader = new qiniu.form_up.FormUploader(UploadConfig);
let putExtra = new qiniu.form_up.PutExtra();

//传字节
// formUploader.put(uploadToken, null, "hello", null, function(respErr, respBody, respInfo) {
//     if (respErr) {
//         throw respErr;
//     }
//     if (respInfo.statusCode == 200) {
//         console.log(respBody);
//     } else {
//         console.log(respInfo.statusCode);
//         console.log(respBody);
//     }
// });

let localFile = path.resolve(__dirname,'../newcomers2.jpg');
//传文件
formUploader.putFile(uploadToken, null, localFile, putExtra, function(respErr,respBody, respInfo) {
    if (respErr) {
        throw respErr;
    }
    if (respInfo.statusCode == 200) {
        console.log(respBody);
    } else {
        console.log(respInfo.statusCode);
        console.log(respBody);
    }
});
