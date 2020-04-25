const { mapSort } = require('../../utils/mapsort');
const { fetchProducts } = require('../../services/products');
const { fetchShoppingHistory } = require('../../services/shoppingHistory');
const SortParamEnum = require('./sortParamEnum');
const {
  getProductCompareFunction,
  getProductSortField,
} = require('./productSortUtils');
const findProductPopularity = require('./findProductPopularity');

const getProducts = async (req, res) => {
  const sortOption = req.query.sortOption;

  if (!Object.values(SortParamEnum).includes(sortOption)) {
    res.status(400).send('Invalid sortOption');
    return;
  }

  const prductsList =
    sortOption === SortParamEnum.Recommended
      ? findProductPopularity(await fetchShoppingHistory())
      : await fetchProducts();

  const compareFunction = getProductCompareFunction(sortOption);
  const sortField = getProductSortField(sortOption);

  res.json(mapSort(prductsList, compareFunction, sortField));
};

module.exports = { getProducts };
