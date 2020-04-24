const fetch = require('node-fetch');

const fetchProducts = async (token, baseUrl) => {
  const productsUrl = `${baseUrl}/api/resource/products?token=${token}`;
  let productsData = [];

  try {
    const response = await fetch(productsUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    productsData = await response.json();
  } catch (exc) {
    console.log(exc.message);
  }

  return productsData;
};

module.exports = { fetchProducts };
