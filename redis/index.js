/**
 * Created by xiaobxia on 2017/12/14.
 */
const redis = require("redis");
const client = redis.createClient({
  host: '39.108.114.91',
  port: 6379
});
/**
 * 监听错误
 */
client.on("error", function (err) {
  console.log("Error " + err);
});
/**
 * 字符串类型，是二进制的，所以也可以放图片
 */
client.set("string key", "string val", redis.print);
client.setex("string ex", 5, 'string ex val', redis.print);

client.get("string key", function (err, reply) {
  // 如果key不见了，返回null
  console.log(reply);
});
client.get("string ex", function (err, reply) {
  // 如果key不见了，返回null
  console.log(reply);
});
/**
 * hash，用于存对象
 */
client.hmset("hash key array", ["test keys 1", "test val 1", "test keys 2", "test val 2"], function (err, res) {
  console.log(res);
});

client.hgetall("hash key array", function (err, res) {
  console.log(res);
});
//设置key的值
client.hmset("hash key array", "test keys 1", "test val 1 other", function (err, res) {
  console.log(res);
});

client.hgetall("hash key array", function (err, res) {
  console.log(res);
});
//添加键
client.hmset("hash key array", "test keys 3", "test val 3", function (err, res) {
  console.log(res);
});

client.hgetall("hash key array", function (err, res) {
  console.log(res);
});

// client.hset("hash key array", "hashtest 1", "some value", redis.print);
// client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
// client.hkeys("hash key", function (err, replies) {
//   console.log(replies.length + " replies:");
//   replies.forEach(function (reply, i) {
//     console.log("    " + i + ": " + reply);
//   });
//   client.quit();
// });
