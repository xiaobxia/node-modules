/**
 * Created by xiaobxia on 2017/7/10.
 */
const co = require('co');
/**
 * co和co之间是并行得
 */

co(function *() {
    let startTime = (new Date()).getTime();
    let result = yield new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(1111)
        }, 1000);
    });
    console.log('use time : ', (new Date()).getTime() - startTime);
    console.log(result)
}).catch(onerror);

co(function *() {
    let startTime = (new Date()).getTime();
    //加了yield就是串行的

        let a = yield new Promise(function (resolve, reject) {
            setTimeout(function () {
                reject(new Error())
            }, 1000);
        });
        let b = yield new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('bbbbb')
            }, 1000);
        });
        let c = yield new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('ccccc')
            }, 1000);
        });
        let res = [a, b, c];


    console.log('use time : ', (new Date()).getTime() - startTime)
    //console.log(res);
    // => [1, 2, 3]
}).catch(onerror);

co(function *() {
    let startTime = (new Date()).getTime();
    //这样写就是并行的
    let d = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('ddddd')
        }, 1000);
    });
    let e = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('eeeee')
        }, 1000);
    });
    let f = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('fffff')
        }, 1000);
    });
    let res = yield [d, e, f];
    console.log('use time : ', (new Date()).getTime() - startTime)
    console.log(res);
    // => [1, 2, 3]
}).catch(onerror);

// errors can be try/catched
// co(function *() {
//     try {
//         yield Promise.reject(new Error('boom'));
//     } catch (err) {
//         console.error(err.message); // "boom"
//     }
// }).catch(onerror);

function onerror(err) {
    // log any uncaught errors
    // co will not throw any errors you do not handle!!!
    // HANDLE ALL YOUR ERRORS!!!
    console.log('in')
    console.error(err.stack);
}