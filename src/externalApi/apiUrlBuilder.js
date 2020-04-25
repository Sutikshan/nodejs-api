const { getEnvVar } = require('../utils/getEnvVar');

const apiUrlBuilder = (endpointUrl) => {
  const token = getEnvVar('API_TOKEN');
  const baseUrl = getEnvVar('API_BASE_URL');

  return `${baseUrl}${endpointUrl}?token=${token}`;
};

module.exports = apiUrlBuilder;
