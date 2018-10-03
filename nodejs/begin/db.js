var mongoose = require('mongoose');
mongoose.connect('mongodb://jangster3794:rohan03794@ds255262.mlab.com:55262/flights');
module.exports = mongoose.connection;