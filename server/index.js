require('dotenv').config();

const express = require('express');
const router = require('./router');

const app = express();

app.use('/api', router);

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
