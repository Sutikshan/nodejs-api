const fetch = require('node-fetch');
const apiUrlBuilder = require('./apiUrlBuilder');
const WooliesApiPaths = require('./wooliesApiPaths');

const fetchShoppingHistory = async () => {
  const url = apiUrlBuilder(WooliesApiPaths.API_SHOPPING_HISTORY_PATH);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  return await response.json();
};

module.exports = { fetchShoppingHistory };
