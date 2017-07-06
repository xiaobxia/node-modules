/**
 * Created by xiaobxia on 2017/7/5.
 */

let mailOptions = {
    //格式 name<mail>
    from: '"Fred Foo" <chenlingjie@cd121.com>',
    //发送的
    to: '673806687@qq.com',
    //抄送
    // cc: '',
    // bcc: '0',
    //专门给apple watch的显示
    watchHtml: '<b>Hello</b> to myself',
    //标题
    subject: 'Hello ✔',
    //纯文本
    text: 'Hello world ?',
    //html
    html: '<b>Hello world ?</b>'
};

//附件部分
mailOptions.attachments = [
    {   // define custom content type for the attachment
        filename: 'text.bin',
        content: 'hello world!',
        contentType: 'text/plain'
    },
    {   // encoded string as an attachment
        filename: 'text1.txt',
        content: 'aGVsbG8gd29ybGQh',
        encoding: 'base64'
    },
    {
        // use pregenerated MIME node
        raw: 'Content-Type: text/plain\r\n' +
        'Content-Disposition: attachment;\r\n' +
        '\r\n' +
        'Hello world!'
    },
    // {
    //     filename: 'image.png',
    //     path: '/path/to/file',
    //     cid: 'unique@nodemailer.com' //same cid value as in the html img src
    // }
];

mailOptions.envelope = {
    from: '"Fred Foo" <chenlingjie@cd121.com>', // used as MAIL FROM: address for SMTP
    to: '673806687@qq.com' // used as RCPT TO: address for SMTP
    //抄送
    // cc:,
    // bcc:
};

mailOptions.list={
    // List-Help: <mailto:admin@example.com?subject=help>
    help: 'admin@example.com?subject=help',
        // List-Unsubscribe: <http://example.com> (Comment)
        unsubscribe: {
        url: 'http://example.com',
            comment: 'Comment'
    },
    // List-Subscribe: <mailto:admin@example.com?subject=subscribe>
    // List-Subscribe: <http://example.com> (Subscribe)
    subscribe: [
        'admin@example.com?subject=subscribe',
        {
            url: 'http://example.com',
            comment: 'Subscribe'
        }
    ],
        // List-Post: <http://example.com/post>, <mailto:admin@example.com?subject=post> (Post)
        post: [
        [
            'http://example.com/post',
            {
                url: 'admin@example.com?subject=post',
                comment: 'Post'
            }
        ]
    ]
};

mailOptions. headers= {
    'x-processed': 'a really long header or value with non-ascii characters 👮',
        'x-unprocessed': {
        prepared: true,
            value: 'a really long header or value with non-ascii characters 👮'
    }
};

module.exports = mailOptions;