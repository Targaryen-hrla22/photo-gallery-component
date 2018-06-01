const { Listing } = require('../../db/schema.js');
const seed = require('../../db/seed.js')

const photoController = {
  GET: (req, res) => {

  },
  POST: (req, res) => {
    console.log('POST body:', req.body);
    
    res.send().status(201);
  }
};

module.exports.photoController = photoController;