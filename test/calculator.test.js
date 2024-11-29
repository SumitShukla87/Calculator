const { add } = require('../calculator');

describe('String Calculator Tests', () => {
  it('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });
});
