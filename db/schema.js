const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema ({
  listing_id: Number,
  url: String,
  description: String
})

const Photo = mongoose.model('Photo', photoSchema);

module.exports.Photo = Photo;