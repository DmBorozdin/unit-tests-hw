const { getMinMax } = require('./getMinMax');


describe('getMinMax test', ()=> {
  test('Empty string', ()=>{expect(getMinMax(" ")).toEqual({min:Infinity, max: -Infinity})});
  test('String without numbers', ()=>{expect(getMinMax("String without numbers")).toEqual({min:Infinity, max: -Infinity})});

  test('String with 1 positive numbers', ()=>{expect(getMinMax("String with 1 positive numbers")).toEqual({min:1, max: 1})});
  test('String with 1 negative numbers', ()=>{expect(getMinMax("String with -1 positive numbers")).toEqual({min:-1, max: -1})});

  test('String with 0', ()=>{expect(getMinMax("0, а затем")).toEqual({min:0, max: 0})});
  test('String with min 0 and positive numbers ', ()=>{expect(getMinMax("0 и 6.45, 2, но 8, а затем 15, то есть 2.7 и 1028")).toEqual({min:0, max: 1028})});
  test('String with all positive numbers', ()=>{expect(getMinMax("1 и 6.45, 2, но 8, а затем 15, то есть 2.7 и 1028")).toEqual({min:1, max: 1028})});
  test('String with all negative numbers', ()=>{expect(getMinMax("-1 и -6.45, -2, но -8, а затем -15, то есть -2.7 и -1028")).toEqual({min:-1028, max: -1})});
  test('String with max 0 and negative numbers ', ()=>{expect(getMinMax("0 и -6.45, -2, но -8, а затем -15, то есть -2.7 и -1028")).toEqual({min:-1028, max: 0})});
  test('String with min < 0 and max > 0 ', ()=>{expect(getMinMax("1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028")).toEqual({min:-1028, max: 15})});

  test('String with Infinity', ()=>{expect(getMinMax("Infinity и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028")).toEqual({min:-1028, max: Infinity})});
  test('String with -Infinity', ()=>{expect(getMinMax("-Infinity и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028")).toEqual({min:-Infinity, max: 15})});
});
