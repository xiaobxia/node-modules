/**
 * Created by xiaobxia on 2017/9/7.
 */
const schedule = require('node-schedule');
/**
 * cron风格的
 *    *    *    *    *    *
 ┬    ┬    ┬    ┬    ┬    ┬
 │    │    │    │    │    |
 │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
 │    │    │    │    └───── month (1 - 12)
 │    │    │    └────────── day of month (1 - 31)
 │    │    └─────────────── hour (0 - 23)
 │    └──────────────────── minute (0 - 59)
 └───────────────────────── second (0 - 59, OPTIONAL)
 */
//TODO 相比cron，目前不支持 W,L,#
//TODO 和匹配很相似，数字10那就只匹配10
let a = schedule.scheduleJob('10 * * * * *', function(){
  console.log('每个分钟的第10秒');
});

let b = schedule.scheduleJob('*/5 * * * * *', function(){
  //匹配0,5,10,15,20...55
  console.log('每5秒');
});

let c = schedule.scheduleJob('4-10 * * * * *', function(){
  //7次
  console.log('4至10秒');
});

//TODO js风格, 专门用于指定某一个时刻
let date = new Date(2012, 11, 21, 5, 30, 0);
let x = 'Tada!';
let d = schedule.scheduleJob(date, function(y){
  //会打印Tada,因为x已经被绑定了
  console.log(y);
}.bind(null, x));
x = 'Changing Data';

//TODO rule风格
let rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(4, 6)];
rule.hour = 17;
rule.minute = 0;

let e = schedule.scheduleJob(rule, function(){
  console.log('The answer to life, the universe, and everything!');
});

//TODO 其他风格
let f = schedule.scheduleJob({hour: 14, minute: 30, dayOfWeek: 0}, function(){
  console.log('Time for tea!');
});

let startTime = new Date(Date.now() + 5000);
let endTime = new Date(startTime.getTime() + 5000);
let j = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function(){
  console.log('Time for tea!');
});

//TODO 方法
job.cancel(reshedule);
//所有计划的调用将被取消。 将参数重新设置为true时，此后将重新安排作业。

job.cancelNext(reshedule);
//此方法使下一次计划的调用或作业无效。 将参数重新设置为true时，此后将重新安排作业。

job.reschedule(SPEC);
//此方法取消所有待处理的调用，并使用给定的规范再次将作业完全注册。 成功/失败返回true / false。

job.nextInvocation();
//此方法返回一个Date对象，用于此Job的计划下一个调用。 如果没有计划调用，则该方法返回null。
