/**
 * Created by xiaobxia on 2017/7/7.
 */
const qiniu = require('qiniu');
const config = require('./../config');
let mac = new qiniu.auth.digest.Mac(config.accessKey, config.secretKey);
let bucketConfig = new qiniu.conf.Config();
let bucketManager = new qiniu.rs.BucketManager(mac, bucketConfig);
let privateBucketDomain = config.domain;
let deadline = parseInt(Date.now() / 1000) + 3600; // 1小时过期
let key = 'aa.jpg';
let privateDownloadUrl = bucketManager.privateDownloadUrl(privateBucketDomain, key, deadline);
console.log(privateDownloadUrl)