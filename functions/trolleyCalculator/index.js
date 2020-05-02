const { fetchTrolleyTotal } = require('../services/trolley');

module.exports = async (context, req) => {
  const trolleyProducts = req.body;
  try {
    const trolleyTotal = await fetchTrolleyTotal(trolleyProducts);
    context.res = { body: trolleyTotal };
  } catch (exc) {
    context.log(exc.message);
    context.res = { body: { message: 'Server error' }, status: 500 };
  }
};
