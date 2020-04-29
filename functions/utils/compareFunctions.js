const compareNumberAscending = (a, b) => a - b;
const compareNumberDescending = (a, b) => b - a;

const compareNameAscending = (a, b) => {
  const nameA = a.toUpperCase(); // ignore upper and lowercase
  const nameB = b.toUpperCase(); // ignore upper and lowercase

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
  const nameA = a.toUpperCase(); // ignore upper and lowercase
  const nameB = b.toUpperCase(); // ignore upper and lowercase

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
