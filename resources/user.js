const fetch = require('node-fetch');
const { getEnvVar } = require('../getEnvVar');

const getUser = async (req, res) => {
  const token = getEnvVar('API_TOKEN');
  const baseUrl = getEnvVar('API_BASE_URL');
  const url = `${baseUrl}/api/Exercise/exercise1`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: {
        token,
      },
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        token,
        'api-key': token,
      },
    });

    res.json(await response.json());
  } catch (exc) {
    console.log(exc.message);
  }
};

module.exports = { getUser };
