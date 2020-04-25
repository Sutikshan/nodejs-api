const express = require('express');
const { getUser } = require('./resources/user');
const { getProducts } = require('./resources/products');

const router = express.Router();

router.get('/user', getUser);
router.get('/sort', getProducts);

module.exports = router;
