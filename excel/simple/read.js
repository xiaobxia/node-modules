/**
 * Created by xiaobxia on 2017/8/7.
 */
const xlsx = require('node-xlsx').default;
const fs = require('fs');
// Parse a file
const workSheetsFromFile = xlsx.parse('../file/example.xls');
//new Date(1900, 0, 41090)，转换时间格式
fs.writeFile('../file/data.json', JSON.stringify(workSheetsFromFile, ' ', 2));