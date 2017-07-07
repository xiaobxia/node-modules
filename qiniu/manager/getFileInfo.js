/**
 * Created by xiaobxia on 2017/7/7.
 */
const qiniu = require('qiniu');
const config = require('./../config');
//1.创建鉴权对象
const accessKey = config.accessKey;
const secretKey = config.secretKey;
let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

//bucket管理对象
let bucketConfig = new qiniu.conf.Config();
//config.useHttpsDomain = true;
//华南
bucketConfig.zone = qiniu.zone.Zone_z2;
let bucketManager = new qiniu.rs.BucketManager(mac, bucketConfig);

let bucket = config.bucket;
let key = "aa.jpg";
bucketManager.stat(bucket, key, function(err, respBody, respInfo) {
    if (err) {
        console.log(err);
        //throw err;
    } else {
        if (respInfo.statusCode == 200) {
            console.log(respBody)
            // console.log(respBody.hash);
            // console.log(respBody.fsize);
            // console.log(respBody.mimeType);
            // console.log(respBody.putTime);
            // console.log(respBody.type);
        } else {
            console.log(respInfo.statusCode);
            console.log(respBody.error);
        }
    }
});