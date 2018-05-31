const mongoose = require('mongoose');
const URI = 'mongodb://admin:admin22@ds161823.mlab.com:61823/airbnb-clone';

const db = mongoose.connect(URI, {}).then(() => {
  console.log('Connected to Database!');
});

module.exports.db = db;