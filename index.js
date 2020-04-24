require('dotenv').config();

const express = require('express');
const { getUser } = require('./resources/user');
const { getProducts } = require('./resources/products');

const app = express();

app.get('/user', getUser);
app.get('/api/answers/user', getUser);
app.get('/sort', getProducts);

app.listen(5001, () => {
  console.log('Server running on port 5001');
});
