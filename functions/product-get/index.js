const { mapSort } = require('../utils/mapsort');
const { fetchProducts } = require('../services/products');
const { fetchShoppingHistory } = require('../services/shoppingHistory');
const SortParamEnum = require('./sortParamEnum');
const { getProductSortField } = require('./productSortUtils');
const findProductPopularity = require('./findProductPopularity');

module.exports = async (context, req) => {
  const sortOption = req.query.sortOption;

  if (!Object.values(SortParamEnum).includes(sortOption)) {
    context.res = { status: 400, body: { message: 'Invalid sortOption' } };
    return;
  }

  try {
    const prductsList =
      sortOption === SortParamEnum.Recommended
        ? findProductPopularity(await fetchShoppingHistory())
        : await fetchProducts();

    const sortFieldMeta = getProductSortField(sortOption);

    const body = mapSort(prductsList, sortFieldMeta).map((product) => {
      const { name, price, quantity } = product;
      return { name, price, quantity };
    });

    context.res = { body };
  } catch (exc) {
    context.log(exc.message);
    context.res = { body: { message: 'Server error' }, status: 500 };
  }
};
