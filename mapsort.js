// following map-sort combination is for performance reasons if products array is large.
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const mapSort = (list, compareFunction, fieldName) => {
  return list
    .map((product, index) => ({ index, value: product[fieldName] }))
    .sort(compareFunction)
    .map((item) => productsData[item.index]);
};

module.exports = { mapSort };
