const { Listing } = require('../../db/schema.js');
const seed = require('../../db/seed.js')

const photoController = {
  GET: (req, res) => {
    Listing.find({ listing_id: req.query.listing_id }, (err, data) => {
      console.log('Data retrieved from DB');
      res.send(data).status(200);
    })
  },
  POST: (req, res) => {
    console.log('POST body:', req.body);
    
    res.send().status(201);
  }
};

module.exports.photoController = photoController;