/**
 * Created by xiaobxia on 2017/7/10.
 */
const chai = require('chai');
const expect = chai.expect;
const should = chai.should()

function add(x, y) {
  return x + y;
}
//describe声明测试集合
describe('test demo', function () {
  //it声明测试实例
  it('1+1=2', function () {
    expect(add(1, 1)).to.be.equal(2);
  })
});

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      [1, 2, 3].indexOf(5).should.equal(-1);
      [1, 2, 3].indexOf(0).should.equal(-1);
    });
  });
});

describe('Array', function () {
  describe('#indexOf()', function () {
    function add() {
      return Array.prototype.slice.call(arguments).reduce(function (prev, curr) {
        return prev + curr;
      }, 0);
    }

    let tests = [
      {args: [1, 2], expected: 3},
      {args: [1, 2, 3], expected: 6},
      {args: [1, 2, 3, 4], expected: 10}
    ];

    tests.forEach(function (test) {
      it('correctly adds ' + test.args.length + ' args', function () {
        let res = add.apply(null, test.args);
        expect(res).to.equal(test.expected);
      });
    });
  });
});
