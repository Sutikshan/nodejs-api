const express = require('express');
const bodyParser = require('body-parser');
const { getUser } = require('./routes/user');
const { getProducts } = require('./routes/products');
const { getTrolleyTotal } = require('./routes/trolley');

const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/user', getUser);
router.get('/sort', getProducts);
router.post('/trolleyTotal', jsonParser, getTrolleyTotal);

module.exports = router;
