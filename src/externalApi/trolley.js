const fetch = require('node-fetch');
const urlBuilder = require('./apiUrlBuilder');
const WooliesApiPaths = require('./wooliesApiPaths');

const fetchTrolleyTotal = async (trolleyProducts) => {
  const url = urlBuilder(WooliesApiPaths.API_TROLLEY_TOTAL_CALCULATOR);

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(trolleyProducts),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const trolleyTotal = await response.json();

  return trolleyTotal;
};

module.exports = { fetchTrolleyTotal };
