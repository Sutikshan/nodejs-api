const { fetchTrolleyTotal } = require('../externalApi/trolley');

const getTrolleyTotal = async (req, res) => {
  const trolleyProducts = req.body;
  const trolleyTotal = await fetchTrolleyTotal(trolleyProducts);

  res.json(trolleyTotal);
};

module.exports = { getTrolleyTotal };
