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
let srcBucket = bucket;
let destBucket = bucket;

//每个operations的数量不可以超过1000个，如果总数量超过1000，需要分批发送
//qiniu.rs.[单个操作时的方法+'Op']
let deleteOperations = [
    qiniu.rs.deleteOp(bucket, 'qiniu1.png'),
    qiniu.rs.deleteOp(bucket, 'qiniu2.png'),
];
// let copyOperations = [
//     qiniu.rs.copyOp(srcBucket, srcKey, destBucket, 'qiniu1.mp4'),
//     qiniu.rs.copyOp(srcBucket, srcKey, destBucket, 'qiniu2.mp4'),
//     qiniu.rs.copyOp(srcBucket, srcKey, destBucket, 'qiniu3.mp4'),
//     qiniu.rs.copyOp(srcBucket, srcKey, destBucket, 'qiniu4.mp4'),
// ];



bucketManager.batch(deleteOperations, function(err, respBody, respInfo) {
    if (err) {
        console.log(err);
        //throw err;
    } else {
        // 200 is success, 298 is part success
        if (parseInt(respInfo.statusCode / 100) == 2) {
            respBody.forEach(function(item) {
                if (item.code == 200) {
                    console.log(item.code + "\tsuccess");
                } else {
                    console.log(item.code + "\t" + item.data.error);
                }
            });
        } else {
            console.log(respInfo.deleteusCode);
            console.log(respBody);
        }
    }
});