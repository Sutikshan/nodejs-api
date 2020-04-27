const httpFunction = require('./index');
const context = require('../testing/defaultContext');
const apiUrlBuilder = require('../services/apiUrlBuilder');
const WooliesApiPaths = require('../services/wooliesApiPaths');

jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox());
const fetchMock = require('node-fetch');

describe('/sort?sortOption=<value>', () => {
  afterAll(() => {
    fetchMock.mockReset();
  });

  const apiProductsUrl = apiUrlBuilder(WooliesApiPaths.API_PRODUCTS_PATH);
  const apiShoppingHistoryUrl = apiUrlBuilder(
    WooliesApiPaths.API_SHOPPING_HISTORY_PATH
  );
  const mockProductsResponse = [
    { name: 'productB', price: 15, quantity: 0 },
    { name: 'productA', price: 8, quantity: 0 },
    { name: 'productC', price: 5, quantity: 0 },
  ];
  fetchMock.get(apiProductsUrl, mockProductsResponse, {
    headers: {
      Accept: 'application/json',
    },
  });

  const mockShoppingHistoryResponse = [
    {
      customerId: 1,
      products: [
        { name: 'productB', price: 200, quantity: 100 },
        { name: 'productA', price: 10, quantity: 2 },
        { name: 'productC', price: 30, quantity: 3 },
      ],
    },
    {
      customerId: 2,
      products: [
        { name: 'productB', price: 20, quantity: 1 },
        { name: 'productC', price: 10, quantity: 2 },
      ],
    },
  ];
  fetchMock.get(apiShoppingHistoryUrl, mockShoppingHistoryResponse, {
    headers: {
      Accept: 'application/json',
    },
  });

  it('should return the 400 if unknown sortOption is supplied', async () => {
    const req = { query: { sortOption: 'unknown' } };

    await httpFunction(context, req);

    expect(context.res.status).toEqual(400);
  });

  it('should return the products sorted by name in ascending order when sortOption is Ascending', async () => {
    const req = { query: { sortOption: 'Ascending' } };
    await httpFunction(context, req);
    expect(context.res.body[0].name).toEqual('productA');
    expect(context.res.body[1].name).toEqual('productB');
    expect(context.res.body[2].name).toEqual('productC');
  });

  it('should return the products sorted by name in descending order when sortOption is Descending', async () => {
    const req = { query: { sortOption: 'Descending' } };
    await httpFunction(context, req);

    expect(context.res.body[0].name).toEqual('productC');
    expect(context.res.body[1].name).toEqual('productB');
    expect(context.res.body[2].name).toEqual('productA');
  });

  it('should return the products sorted by price in ascending order when sortOption is Low', async () => {
    const req = { query: { sortOption: 'Low' } };
    await httpFunction(context, req);

    expect(context.res.body[0].name).toEqual('productC');
    expect(context.res.body[1].name).toEqual('productA');
    expect(context.res.body[2].name).toEqual('productB');
  });

  it('should return the products sorted by price in descending order when sortOption is High', async () => {
    const req = { query: { sortOption: 'High' } };
    await httpFunction(context, req);

    expect(context.res.body[0].name).toEqual('productB');
    expect(context.res.body[1].name).toEqual('productA');
    expect(context.res.body[2].name).toEqual('productC');
  });

  it('should return the products sorted by popularity when sortOption is Recommended', async () => {
    const req = { query: { sortOption: 'Recommended' } };
    await httpFunction(context, req);

    expect(context.res.body[0].name).toEqual('productB');
    expect(context.res.body[1].name).toEqual('productC');
    expect(context.res.body[2].name).toEqual('productA');
  });
});
