const { meanMode } = require('./meanMode');

describe('meanMode test', ()=> {
  test('1 number', ()=>{expect(meanMode([1])).toBeTruthy()});
  test('[4, 4, 4, 6, 2]', ()=>{expect(meanMode([4, 4, 4, 6, 2])).toBeTruthy()});
  test('[1, 2, 3]', ()=>{expect(meanMode([1, 2, 3])).toBeFalsy()});
  test('[1, 1, 1, 2, 5]', ()=>{expect(meanMode([1, 1, 1, 2, 5])).toBeFalsy()});
  test('[]', ()=>{expect(meanMode([])).toBeFalsy()});
});
