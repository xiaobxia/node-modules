/**
 * Created by xiaobxia on 2017/7/5.
 */
const mailer = require('nodemailer');
const message = require('./message');
//创建一次就可以发很多邮件
let transporter = mailer.createTransport({
    //host可以上网查
    host: 'smtp.mxhichina.com',
    port: 25,
    //secure: true, // use TLS
    auth: {
        user: 'chenlingjie@cd121.com',
        pass: 'CLJclj214'
    },
    ignoreTLS: true,
});

// let mailOptions = {
//     //格式 name<mail>
//     from: '"Fred Foo" <chenlingjie@cd121.com>',
//     //发送的
//     to: '673806687@qq.com',
//     //标题
//     subject: 'Hello ✔',
//     //纯文本
//     text: 'Hello world ?',
//     //html
//     html: '<b>Hello world ?</b>'
// };


transporter.sendMail(message, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log(info);
});