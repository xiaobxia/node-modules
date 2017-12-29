/**
 * Created by xiaobxia on 2017/12/29.
 */
const jwt = require('jsonwebtoken');
//5秒过期
const secretOrPublicKey = 'xiaobxia';
const token = jwt.sign({foo: 'bar'}, secretOrPublicKey, {expiresIn: 5});
console.log(token);
setTimeout(() => {
  const decoded = jwt.verify(token, secretOrPublicKey);
  console.log(decoded);
}, 2 * 1000);
setTimeout(() => {
  const decoded = jwt.verify(token, secretOrPublicKey);
  console.log(decoded);
}, 6 * 1000);
