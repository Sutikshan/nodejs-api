require('dotenv').config();

const express = require('express');
const router = require('./router');

const app = express();

app.use('/api', router);

app.listen(5001, () => {
  console.log('Server running on port 5001');
});
