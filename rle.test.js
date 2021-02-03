const { rle } = require('./rle');

describe('rle test', ()=> {
  test('No repetitions', ()=>{expect(rle('ABC')).toBe('ABC')});
  test('Repetition at the beginning', ()=>{expect(rle('AAABC')).toBe('A3BC')});
  test('Repetition not at the beginning', ()=>{expect(rle('ABBBBC')).toBe('AB4C')});
  test('Multiple repetition', ()=>{expect(rle('AABBBBCCC')).toBe('A2B4C3')});
  test('Repetition with number', ()=>{expect(rle('AABBBB2C')).toBe('A2B42C')});
});
