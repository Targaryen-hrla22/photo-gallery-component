const router = require('express').Router();

const { photoController } = require('./controllers/photoController.js');

router.route('/photos')
  .get(photoController.GET)
  .post(photoController.POST);

module.exports.router = router;