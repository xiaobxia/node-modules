/**
 * Created by xiaobxia on 2017/8/7.
 */
const xlsx = require('node-xlsx').default;
const fs = require('fs');

fs.readFile('../file/data.json', function (err, data) {
    let buffer = xlsx.build(JSON.parse(data));
    fs.writeFileSync('../file/temp.xlsx', buffer, 'binary');
});
