/**
 * Created by xiaobxia on 2017/8/3.
 */
/**
 * 简化版co用以研究co原理
 */
function co(gen) {
    /**
     * 源码中支持传参
     * co(function* (a,b) {
     *  //do
     * },'a','b');
     */
    return new Promise(function (resolve, reject) {
        //源码在这带参数执行gen
        let it = gen();
        //如果不是generator，直接返回结果
        if (!it || typeof it.next !== 'function') return resolve(it);
        onFulfilled();

        //执行器
        function onFulfilled(res) {
            let ret;
            try {
                /**
                 * let a = yield promise
                 * 如果不在next中传参，a就是undefined,a的值由next()中的参数赋予
                 *
                 * ret = {
                 *  value： promise,
                 *  done: false
                 * }
                 */
                ret = it.next(res);
            } catch (e) {
                return reject(e);
            }
            next(ret);
            return null;
        }

        /**
         *
         * @param ret
         * @returns {*}
         */
        function next(ret) {
            //如果结束了，返回值
            if (ret.done) return resolve(ret.value);
            //源码中会在这把value处理成一个promise，以应对值是[promise,promise]情况
            let value = ret.value;
            // 把promise中的值给到上次的参数let a
            //源码中有错误处理
            if (value) return value.then(onFulfilled);
        }
    })
}
// 测试简易版co
co(function*() {
    let a = yield new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('a');
        }, 1000);
    });
    let b = yield new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('b');
        }, 1000);
    });
    let c = [a, b];
    console.log(c)
});
