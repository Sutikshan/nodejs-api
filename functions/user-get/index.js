const { getUser } = require('./user');

module.exports = async function (context) {
  context.log(
    'JavaScript HTTP trigger function processed a request for GET user'
  );
  const body = await getUser();

  context.res = { body };
};
