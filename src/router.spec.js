const request = require('supertest');
const express = require('express');
const router = require('./router');
const WooliesApiPaths = require('./services/wooliesApiPaths');
const apiUrlBuilder = require('./services/apiUrlBuilder');

jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox());
const fetchMock = require('node-fetch');

describe('router', () => {
  const app = express();
  app.use('/api', router);
  afterAll(() => {
    fetchMock.mockReset();
  });

  describe('/user', () => {
    it('should return the name and token', () => {
      return request(app)
        .get('/api/user')
        .set('Accept', 'application/json')
        .then((res) => {
          return expect(res.body.name).toEqual('Anand');
        });
    });
  });

  describe('/sort?sortOption=<value>', () => {
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
          { name: 'productB', price: 20, quantity: 1 },
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

    it('should return the 400 if unknown sortOption is supplied', () => {
      return request(app)
        .get('/api/sort?sortOption=unknown')
        .set('Accept', 'application/json')
        .then((res) => {
          return expect(res.status).toEqual(400);
        });
    });

    it('should return the products sorted by name in ascending order when sortOption is Ascending', () => {
      return request(app)
        .get('/api/sort?sortOption=Ascending')
        .then((res) => {
          expect(res.body[0].name).toEqual('productA');
          expect(res.body[1].name).toEqual('productB');
          expect(res.body[2].name).toEqual('productC');
        });
    });

    it('should return the products sorted by name in descending order when sortOption is Descending', () => {
      return request(app)
        .get('/api/sort?sortOption=Descending')
        .then((res) => {
          expect(res.body[0].name).toEqual('productC');
          expect(res.body[1].name).toEqual('productB');
          expect(res.body[2].name).toEqual('productA');
        });
    });

    it('should return the products sorted by price in ascending order when sortOption is Low', () => {
      return request(app)
        .get('/api/sort?sortOption=Low')
        .then((res) => {
          expect(res.body[0].name).toEqual('productC');
          expect(res.body[1].name).toEqual('productA');
          expect(res.body[2].name).toEqual('productB');
        });
    });

    it('should return the products sorted by price in descending order when sortOption is High', () => {
      return request(app)
        .get('/api/sort?sortOption=High')
        .then((res) => {
          expect(res.body[0].name).toEqual('productB');
          expect(res.body[1].name).toEqual('productA');
          expect(res.body[2].name).toEqual('productC');
        });
    });

    it('should return the products sorted by popularity when sortOption is Recommended', () => {
      return request(app)
        .get('/api/sort?sortOption=Recommended')
        .then((res) => {
          expect(res.body[0].name).toEqual('productB');
          expect(res.body[1].name).toEqual('productC');
          expect(res.body[2].name).toEqual('productA');
        });
    });
  });

  describe('/trolleyTotal', () => {
    it('should accept shopping trolley details and return total after applying special', () => {
      const apiTrolleyCalculatorUrl = apiUrlBuilder(
        WooliesApiPaths.API_TROLLEY_TOTAL_CALCULATOR
      );
      const mockTrolleyTotalResponse = { total: 10 };

      fetchMock.post(apiTrolleyCalculatorUrl, mockTrolleyTotalResponse, {
        headers: {
          Accept: 'application/json',
        },
      });

      return request(app)
        .post('/api/trolleyTotal')
        .then((res) => {
          expect(res.body).toEqual({ total: 10 });
        });
    });
  });
});
