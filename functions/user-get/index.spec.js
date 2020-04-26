const httpFunction = require('./index');
const context = require('../testing/defaultContext');

describe('/user', () => {
  it('should return the name and token', async () => {
    await httpFunction(context);

    expect(context.log.mock.calls.length).toBe(1);
    expect(context.res.body.name).toEqual('Sutikshan Dubey');
  });
});
