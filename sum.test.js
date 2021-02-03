const { sum } = require('./sum');

describe('sum test', ()=> {
  test('Endpoint 0', ()=> expect(sum()).toBe(0));
  test('Value on the right end point, 1 positive number', ()=> expect(sum(1)()).toBe(1));
  test('Value on the right end point, 3 positive number', ()=> expect(sum(1)(2)(3)()).toBe(6));

  test('Value on the left end point, 1 negative number', ()=> expect(sum(-1)()).toBe(-1));
  test('Value on the left end point, 2 negative number', ()=> expect(sum(-1)(-2)()).toBe(-3));

  test('Positive and negative number', ()=> expect(sum(1)(-2)(3)()).toBe(2));
});
