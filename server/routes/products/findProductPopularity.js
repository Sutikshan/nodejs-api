const findProductPopularity = (shoppingHistory) => {
  const productsData = shoppingHistory.reduce((acc, history) => {
    history.products.forEach((historyItem) => {
      const accIndex = acc.findIndex((item) => item.name === historyItem.name);
      if (accIndex > -1) {
        acc[accIndex].count = ++acc[accIndex].count;
      } else {
        acc.push({ ...historyItem, count: 1 });
      }
    });

    return acc;
  }, []);

  return productsData;
};

module.exports = findProductPopularity;
