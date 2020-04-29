const getUser = async () => {
  return {
    name: 'Sutikshan Dubey',
    token: process.env.API_TOKEN,
  };
};

module.exports = { getUser };
