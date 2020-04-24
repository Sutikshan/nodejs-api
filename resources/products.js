const { getEnvVar } = require('../getEnvVar');
const {
  compareNumberAscending,
  compareNumberDescending,
  compareNameAscending,
  compareNameDescending,
} = require('../compareFunctions');
const { mapSort } = require('../mapsort');
const { fetchProducts } = require('../externalApi/products');
const { fetchProductsByHistory } = require('../externalApi/shoppingHistory');
const QueryParamKeys = {
  Low: 'Low',
  High: 'High',
  Ascending: 'Ascending',
  Descending: 'Descending',
  Recommended: 'Recommended',
};
const PriceSortOptions = [QueryParamKeys.Low, QueryParamKeys.High];
const NameSortOptions = [QueryParamKeys.Ascending, QueryParamKeys.Descending];

const getProductsByPrice = async (token, baseUrl, sortOption) => {
  const productsData = await fetchProducts(token, baseUrl);

  let compareFunction = compareNumberAscending;

  if (sortOption === QueryParamKeys.High) {
    compareFunction = compareNumberDescending;
  }

  return mapSort(productsData, compareFunction, 'price');
};

const getProductsByName = async (token, baseUrl, sortOption) => {
  const productsData = await fetchProducts(token, baseUrl);

  let compareFunction = compareNameAscending;

  if (sortOption === QueryParamKeys.Descending) {
    compareFunction = compareNameDescending;
  }

  return mapSort(productsData, compareFunction, 'price');
};

const getProductsByPopularity = async (token, baseUrl) => {
  fetchProductsByHistory(token, baseUrl);
};

const getProducts = async (req, res) => {
  const token = getEnvVar('API_TOKEN');
  const baseUrl = getEnvVar('API_BASE_URL');
  const sortOption = req.query.sortOption;

  if (PriceSortOptions.includes(sortOption)) {
    res.json(await getProductsByPrice(token, baseUrl, sortOption));
    return;
  }

  if (NameSortOptions.includes(sortOption)) {
    res.json(await getProductsByName(token, baseUrl, sortOption));
    return;
  }

  if (sortOption === QueryParamKeys.Recommended) {
    res.json(await getProductsByPopularity(token, baseUrl));
    return;
  }

  res.status(400).send('Invalid sortOption');
};

module.exports = { getProducts };
