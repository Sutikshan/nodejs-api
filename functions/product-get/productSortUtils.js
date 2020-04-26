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
  if (PriceSortOptions.includes(sortOption)) {
    return 'price';
  }

  if (NameSortOptions.includes(sortOption)) {
    return 'name';
  }

  if (sortOption === SortParamEnum.Recommended) {
    return 'count';
  }
};

module.exports = { getProductCompareFunction, getProductSortField };
