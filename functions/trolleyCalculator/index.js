const { fetchTrolleyTotal } = require('../services/trolley');

module.exports = async (context, req) => {
  const trolleyProducts = req.body;
  const trolleyTotal = await fetchTrolleyTotal(trolleyProducts);

  context.res = { body: parseFloat(trolleyTotal) };
};
