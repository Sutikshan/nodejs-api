const getUser = async (req, res) => {
  res.json({ name: 'Anand', token: 'a1dbf4ba-8e71-4fcf-b021-70780f1ec292' });
};

module.exports = { getUser };
