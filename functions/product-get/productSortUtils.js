const {
  compareNumberAscending,
  compareNumberDescending,
  compareNameAscending,
  compareNameDescending,
} = require('../utils/compareFunctions');
const SortParamEnum = require('./sortParamEnum');

const getProductCompareFunction = (sortOption) => {
  switch (sortOption) {
    case SortParamEnum.High:
      return compareNumberDescending;

    case SortParamEnum.Low:
      return compareNumberAscending;

    case SortParamEnum.Ascending:
      return compareNameAscending;

    case SortParamEnum.Descending:
      return compareNameDescending;

    case SortParamEnum.Recommended:
      return compareNumberDescending;
  }

  return compareNameAscending;
};

const PriceSortOptions = [SortParamEnum.Low, SortParamEnum.High];
const NameSortOptions = [SortParamEnum.Ascending, SortParamEnum.Descending];

const getProductSortField = (sortOption) => {
  const primarySortFunction = getProductCompareFunction(sortOption);

  if (PriceSortOptions.includes(sortOption)) {
    return { price: primarySortFunction, name: compareNameAscending };
  }

  if (NameSortOptions.includes(sortOption)) {
    return { name: primarySortFunction, price: compareNumberAscending };
  }

  if (sortOption === SortParamEnum.Recommended) {
    return { count: primarySortFunction, name: compareNameAscending };
  }
};

module.exports = { getProductSortField };
