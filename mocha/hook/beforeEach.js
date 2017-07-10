/**
 * Created by xiaobxia on 2017/7/10.
 */
describe('Connection', function() {
    //在执行当前describe下的子describe前会执行beforeEach
    beforeEach(function(done) {
        setTimeout(function () {
            console.log('beforeEach_done');
            done();
        },500)
    });

    describe('#find1', function() {
        it('respond with matching records', function(done) {
            setTimeout(function () {
                console.log('find1_done');
                done();
            },1000)
        });
    });
    describe('#find2', function() {
        it('respond with matching records', function(done) {
            setTimeout(function () {
                console.log('find2_done');
                done();
            },1000)
        });
    });
});