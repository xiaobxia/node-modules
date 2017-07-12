/**
 * Created by xiaobxia on 2017/7/10.
 */
/**
 * 用于性能测试
 */
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;
let list = [1,2,3,4,5];
let tempValue = 0;
// add tests
suite
    .add('RegExp#test', function () {
        (function () {
            (function () {
                (function () {
                    (function () {

                    })()
                })()
            })()
        })()
        // let b = 'sahdahdiahdi';
        // let a = 'sql: '+ b;
        // let c = 'sql: '+ a;
        // let d = 'sql: '+ c;
        //测试1
        // for(let k=0;k<list.length;k++){
        //     tempValue=list[k];
        // }
        ///o/.test('Hello World!');
    })
    .add('String#indexOf', function () {
        (function () {

        })()
        // let b = 'sahdahdiahdi';
        // let a = `sql: ${b}`;
        // let c = `sql: ${a}`;
        // let d = `sql: ${c}`;
        //测试二
        // list.forEach(function (value) {
        //     tempValue = value;
        // })
        //'Hello World!'.indexOf('o') > -1;
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({'async': true});