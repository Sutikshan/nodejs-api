require('dotenv').config();

const express = require('express');
const { getUser } = require('./resources/user');

const app = express();

app.post('/user', getUser);
app.post('/api/answers/user', getUser);

app.listen(5001, () => {
  console.log('Server running on port 5001');
});
