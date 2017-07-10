/**
 * Created by xiaobxia on 2017/7/10.
 */
/**
 * 异步的使用方法在于在callback当中添加参数done
 */
describe('User', function() {
    describe('#save()', function() {
        //添加done
        it('should save without error', function(done) {
            setTimeout(function () {
                done()
            },1000);
        });
    });
});