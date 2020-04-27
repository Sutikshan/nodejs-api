const findProductPopularity = (shoppingHistory) => {
  const productsData = shoppingHistory.reduce((acc, history) => {
    history.products.forEach((historyItem) => {
      const accIndex = acc.findIndex((item) => item.name === historyItem.name);

      if (accIndex > -1) {
        acc[accIndex].count = acc[accIndex].count + historyItem.quantity;
      } else {
        acc.push({ ...historyItem, count: historyItem.quantity });
      }
    });

    return acc;
  }, []);

  return productsData;
};

module.exports = findProductPopularity;
