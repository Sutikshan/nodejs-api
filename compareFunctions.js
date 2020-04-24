const compareNumberAscending = (a, b) => a.value - b.value;
const compareNumberDescending = (a, b) => b.value - a.value;
const compareNameAscending = (a, b) => {
  const nameA = a.value.toUpperCase(); // ignore upper and lowercase
  const nameB = b.value.toUpperCase(); // ignore upper and lowercase

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
};
const compareNameDescending = (a, b) => {
  const nameA = a.value.toUpperCase(); // ignore upper and lowercase
  const nameB = b.value.toUpperCase(); // ignore upper and lowercase

  if (nameA > nameB) {
    return -1;
  }
  if (nameA < nameB) {
    return 1;
  }

  // names must be equal
  return 0;
};

module.exports = {
  compareNumberAscending,
  compareNumberDescending,
  compareNameAscending,
  compareNameDescending,
};
