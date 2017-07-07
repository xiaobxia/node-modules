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
// @param options 列举操作的可选参数
//                prefix    列举的文件前缀
//                marker    上一次列举返回的位置标记，作为本次列举的起点信息
//                limit     每次返回的最大列举文件数量
//                delimiter 指定目录分隔符
var options = {
    limit: 10,
    //以七牛为前缀的
    prefix: 'qiniu',
};
bucketManager.listPrefix(bucket, options, function(err, respBody, respInfo) {
    if (err) {
        console.log(err);
        throw err;
    }
    if (respInfo.statusCode == 200) {
        //如果这个nextMarker不为空，那么还有未列举完毕的文件列表，下次调用listPrefix的时候，
        //指定options里面的marker为这个值
        var nextMarker = respBody.marker;
        var commonPrefixes = respBody.commonPrefixes;
        console.log(nextMarker);
        console.log(commonPrefixes);
        var items = respBody.items;
        items.forEach(function(item) {
            console.log(item);
        });
    } else {
        console.log(respInfo.statusCode);
        console.log(respBody);
    }
});