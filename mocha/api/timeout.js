/**
 * Created by xiaobxia on 2017/7/10.
 */
describe('a suite of tests', function() {
    //里面的不能超过500毫秒
    this.timeout(500);
    beforeEach(function(done) {
        //也可以用在钩子当中
        this.timeout(300);
        setTimeout(done, 250);
    });

    it('should take less than 500ms', function(done){
        //也可以用在it当中
        this.timeout(100);
        setTimeout(done, 300);
    });

    it('should take less than 500ms as well', function(done){
        setTimeout(done, 250);
    });
})