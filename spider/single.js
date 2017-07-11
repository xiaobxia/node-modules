/**
 * Created by xiaobxia on 2017/7/11.
 */
const request = require('request');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const fs = require('fs-extra');

function getData(page) {
    let option = {
        encoding: null,
        url: ''
    };
    request(option, function (err, response, body) {
        if (!err && response.statusCode == 200) {
            //设置编码
            //let html = iconv.decode(body, 'gb2312');
            let $ = cheerio.load(body);
            let data = [];
            //do
            let filename = `./data/${page}.json`;
            //格式化json
            fs.writeFile(filename, JSON.stringify(data, ' ', 4), function (err) {
                if (err) {
                    console.error('写入失败');
                } else {
                    console.log(filename + ' 写入成功');
                }
            })
        }
    });
}