const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { router } = require('./router.js');
require('../db');
require('../db/seed.js')

const PORT = 1337;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../static')));

app.use('/api', router);

app.listen(PORT, (err) => {
  if (err) { console.log('Error starting server:', err) }
  else { console.log('Server started on PORT:', PORT) }
});