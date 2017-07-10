/**
 * Created by xiaobxia on 2017/7/10.
 */
describe('Array', function() {
    /**
     * skip是only的对立面，指不执行的
     */
    describe('#indexOf()', function() {
        //it也有only方法
        it('respond with matching records', function() {
            if (true) {
                console.log('#indexOf_done')
            } else {
                //运行时跳过
                this.skip();
            }
        });
        it.skip('should return -1 unless present', function() {
            console.log('#indexOf_done_only')
        });
    });
    describe.skip('#indexOf()', function() {
        it('respond with matching records', function() {
            console.log('#indexOf2_done')
        });
    });
});