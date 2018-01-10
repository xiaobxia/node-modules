/**
 * Created by xiaobxia on 2018/1/10.
 */
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://39.108.114.91:27017');
var Schema = mongoose.Schema;
var mySchema = Schema({name: String});

var model = db.model('MyModel', mySchema);

model.create({name: 'inserting ' + Date.now()}, function (err, doc) {
  if (err) return console.error(err);
  console.log(doc);
});
