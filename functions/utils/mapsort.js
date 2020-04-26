// following map-sort combination is for performance reasons if products array is large.
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const mapSort = (list, compareFunction, fieldName) => {
  return list
    .map((item, index) => ({ index, value: item[fieldName] }))
    .sort(compareFunction)
    .map((item) => list[item.index]);
};

module.exports = { mapSort };
