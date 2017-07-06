/**
 * Created by xiaobxia on 2017/7/6.
 */
const fs = require('fs');
// const parser = require('node-feedparser');
//
// fs.readFile(__dirname+'/rss.xml',function (error,content) {
//     parser(content,function (error,obj) {
//         fs.writeFile(__dirname+'/feed.json',JSON.stringify(obj),function (error) {
//             console.log('error:',error)
//         });
//     })
// });
const xml2js = require('xml2js');

var parser = new xml2js.Parser({explicitArray : false});
fs.readFile(__dirname + '/rss.xml', function (err, data) {
    parser.parseString(data, function (err, result) {
        fs.writeFile(__dirname + '/feed.json', JSON.stringify(result), function (error) {
            console.log('error:', error)
        });
    });
});