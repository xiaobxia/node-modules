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
/**
 * 复制和移动和重命名很像
 */
let srcBucket = config.bucket;
let srcKey = "qiniu_new.png";
let destBucket = config.bucket;
let destKey = "qiniu_new1.png";
// 强制覆盖已有同名文件
let options = {
    force: true
};
bucketManager.copy(srcBucket, srcKey, destBucket, destKey, options, function(
    err, respBody, respInfo) {
    if (err) {
        console.log(err);
        //throw err;
    } else {
        //200 is success
        console.log(respInfo.statusCode);
        console.log(respBody);
    }
});