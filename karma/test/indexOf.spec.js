/**
 * Created by xiaobxia on 2017/8/24.
 */
//这里能用chai是因为在配置的frameworks中加了chai
//需要karma start karma/karma.config.js启动

//当前的环境就是浏览器的环境，所以不能用es6和模块系统
describe('indexOf', function () {
  //it声明测试实例
  it('["a","b"]索引1的位置是"b"', function () {
    expect(indexOf(['a', 'b'], 1)).to.be.equal('b');
  });
  it('["a","b"]索引2的位置是undefined', function () {
    expect(indexOf(['a', 'b'], 2)).to.be.equal(undefined);
  })
});
