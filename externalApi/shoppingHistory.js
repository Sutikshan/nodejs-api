const fetch = require('node-fetch');

const fetchProductsByHistory = async (token, baseUrl) => {
  const productsUrl = `${baseUrl}/api/resource/shopperHistory?token=${token}`;
  let historyData = [];

  try {
    const response = await fetch(productsUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    historyData = await response.json();
  } catch (exc) {
    console.log(exc.message);
  }
  const productsData = historyData.reduce((acc, history) => {
    history.products.forEach((historyItem) => {
      const accIndex = acc.findIndex((item) => item.name === historyItem.name);
      if (accIndex > -1) {
        acc[accIndex].count = acc[accIndex].count ? ++acc[accIndex].count : 0;
      }
    });

    return acc.concat(history.products);
  }, []);

  return productsData;
};

module.exports = { fetchProductsByHistory };
