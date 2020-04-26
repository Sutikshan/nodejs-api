const httpFunction = require('./index');
const context = require('../testing/defaultContext');
const apiUrlBuilder = require('../services/apiUrlBuilder');
const WooliesApiPaths = require('../services/wooliesApiPaths');

jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox());
const fetchMock = require('node-fetch');

describe('/trolleyTotal', () => {
  afterAll(() => {
    fetchMock.mockReset();
  });

  it('should accept shopping trolley details and return total after applying special', async () => {
    const apiTrolleyCalculatorUrl = apiUrlBuilder(
      WooliesApiPaths.API_TROLLEY_TOTAL_CALCULATOR
    );
    const mockTrolleyTotalResponse = { total: 10 };

    fetchMock.post(apiTrolleyCalculatorUrl, mockTrolleyTotalResponse, {
      headers: {
        Accept: 'application/json',
      },
    });

    const req = {
      body: {
        products: [
          {
            name: 'string',
            price: 10,
          },
        ],
        specials: [
          {
            quantities: [
              {
                name: 'string',
                quantity: 20,
              },
            ],
            total: 0,
          },
        ],
        quantities: [
          {
            name: 'string',
            quantity: 10,
          },
        ],
      },
    };

    await httpFunction(context, req);

    expect(context.res.body.total).toEqual(10);
  });
});
