/**
 * Created by xiaobxia on 2017/7/10.
 */
describe('Array', function () {
  /**
   * 如果describe有only，而其他的没有only那么就执行有only的（如果大家都有那就都执行）
   */
  describe.only('#indexOf()', function () {
    //it也有only方法
    it('respond with matching records', function () {
      console.log('#indexOf_done')
    });
    it.only('should return -1 unless present', function () {
      console.log('#indexOf_done_only')
    });
  });
  describe.only('#indexOf()', function () {
    it('respond with matching records', function () {
      console.log('#indexOf2_done')
    });
  });
  describe('#indexOf2', function () {
    it('respond with matching records', function () {
      console.log('#indexOf2_done')
    });
  });
});
