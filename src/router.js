const express = require('express');
const bodyParser = require('body-parser');
const { getUser } = require('./resources/user');
const { getProducts } = require('./resources/products');
const { getTrolleyTotal } = require('./resources/trolley');

const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/user', getUser);
router.get('/sort', getProducts);
router.post('/trolleyTotal', jsonParser, getTrolleyTotal);

module.exports = router;
