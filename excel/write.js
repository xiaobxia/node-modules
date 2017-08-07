/**
 * Created by xiaobxia on 2017/8/7.
 */
const Excel = require('exceljs');
/**
 * https://www.npmjs.com/package/exceljs
 */
let workbook = new Excel.stream.xlsx.WorkbookWriter({
    filename: './file/temp2.xlsx',
    useStyles: true,
    useSharedStrings: true
});
let worksheet = workbook.addWorksheet('Sheet', {
    properties: {
        tabColor: {
            argb: 'FFC0000'
        },
        showGridLines: false,
        views: [{xSplit: 1, ySplit: 1}]
    }
});

worksheet.columns = [
    {header: 'id', key: 'id'},
    {header: 'name', key: 'name'},
    {header: 'phone', key: 'phone'},
    {header: 'date', key: 'dob', width: 10, outlineLevel: 1}
];
//得到column,参数可以是key,id,(A,B,C...)
let column = worksheet.getColumn('id');
column.eachCell({includeEmpty: true}, function (cell, rowNumber) {
    console.log('Row ' + rowNumber + ' = ' + JSON.stringify(cell.value));
});

let data = [
    {
        id: 100,
        name: 'abc',
        phone: '123456789',
        dob: new Date(1970, 1, 1)
    },
    {
        id: 101,
        name: 'abc',
        phone: '123456789',
        dob: new Date(1970, 1, 1)
    }];

for (let i in data) {
    worksheet.addRow(data[i]);
}
//TODO column也算是一个row

//遍历row
worksheet.eachRow(function (row, rowNumber) {
    console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
});
//得到row
let row = worksheet.getRow(1);
//设置样式
row.getCell(1).font = {
    name: 'Comic Sans MS',
    family: 4,
    size: 16,
    underline: 'double',
    bold: true,
    color: {argb: 'FF00FF00'}
};
// let lastrow = worksheet.lastRow;
//遍历cell
row.eachCell({includeEmpty: true}, function (cell, colNumber) {
    console.log('Cell ' + colNumber + ' = ' + cell.value);
});
//合并单元格
// worksheet.mergeCells('A1','B2');

// row.getCell(1).value = 5;

//验证数据
// worksheet.getCell('A1').dataValidation = {
//     type: 'decimal',
//     operator: 'between',
//     allowBlank: true,
//     showInputMessage: true,
//     formulae: [1.5, 7],
//     promptTitle: 'Decimal',
//     prompt: 'The value must between 1.5 and 7'
// };

workbook.commit();
