const sortObjects = (a, b, sortFieldMeta) => {
  const sortFunctions = Object.values(sortFieldMeta);

  // sort on first field
  const firstFieldCompareResult = sortFunctions[0](a.values[0], b.values[0]);
  if (firstFieldCompareResult !== 0) {
    return firstFieldCompareResult;
  }
  return sortFunctions[1](a.values[1], b.values[1]);
};

// .sort() method does in-place mutation which could cause performance issue if array is long and it's elements are huge in size.
// following map-sort first picks fields involved in sort and crates a thin array to sort it first, and
// then uses this thin array ([{ index, value }...]) to create new sorted list of original array elements.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const mapSort = (list, sortFieldMeta) => {
  const fieldNames = Object.keys(sortFieldMeta);

  return list
    .map((item, index) => ({
      index,
      values: [item[fieldNames[0]], item[fieldNames[1]]],
    }))
    .sort((a, b) => sortObjects(a, b, sortFieldMeta))
    .map((item) => list[item.index]);
};

module.exports = { mapSort };
