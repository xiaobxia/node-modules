/**
 * Created by xiaobxia on 2017/7/10.
 */
const chai = require('chai');
const expect = chai.expect;
const should = chai.should()

function add(x,y){
    return x+y;
}
//describe声明测试集合
describe('test demo',function(){
    //it声明测试实例
    it('1+1=2',function(){
        expect(add(1,1)).to.be.equal(2);
    })
});

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            [1,2,3].indexOf(5).should.equal(-1);
            [1,2,3].indexOf(0).should.equal(-1);
        });
    });
});