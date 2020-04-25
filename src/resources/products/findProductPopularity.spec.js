const findProductPopularity = require('./findProductPopularity');

describe('findProductPopularity', () => {
  it('should return the total count of given products sold', () => {
    const shoppingHistory = [
      {
        customerId: 1,
        products: [
          {
            name: 'productA',
            price: 10,
            quantity: 10,
          },
          {
            name: 'productB',
            price: 10,
            quantity: 10,
          },
        ],
      },
      {
        customerId: 1,
        products: [
          {
            name: 'productA',
            price: 10,
            quantity: 10,
          },
          {
            name: 'productC',
            price: 10,
            quantity: 10,
          },
        ],
      },
    ];
    const productPopularity = findProductPopularity(shoppingHistory);
    expect(productPopularity.length).toEqual(3);

    const productACount = productPopularity.find(
      (product) => product.name === 'productA'
    );
    const productBCount = productPopularity.find(
      (product) => product.name === 'productB'
    );
    const productCCount = productPopularity.find(
      (product) => product.name === 'productC'
    );

    expect(productACount.count).toEqual(2);
    expect(productBCount.count).toEqual(1);
    expect(productCCount.count).toEqual(1);
  });
});
