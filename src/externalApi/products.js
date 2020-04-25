const fetch = require('node-fetch');
const urlBuilder = require('./apiUrlBuilder');
const WooliesApiPaths = require('./wooliesApiPaths');

const fetchProducts = async () => {
  const url = urlBuilder(WooliesApiPaths.API_PRODUCTS_PATH);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  return await response.json();
};

module.exports = { fetchProducts };
