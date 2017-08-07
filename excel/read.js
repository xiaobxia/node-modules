/**
 * Created by xiaobxia on 2017/8/7.
 */
const Excel = require('exceljs');
const fs = require('fs');

let workbook = new Excel.Workbook();
workbook.xlsx.readFile('./file/temp2.xlsx')
    .then(function(data) {
        //console.log(data);
        console.log(data._worksheets[1]);
        //fs.writeFile('../file/data2.json', JSON.stringify(data._worksheets, ' ', 2));
    });