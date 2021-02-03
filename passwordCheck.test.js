const { passwordCheck } = require('./passwordCheck');

describe('passwordCheck test', ()=> {
  test('True password', ()=>{expect(passwordCheck('Nagibator7!')).toBeTruthy()});

  test('Only number', ()=>{expect(passwordCheck('7')).toBeFalsy()});
  test('Number + 1 Letter in Uppercase', ()=>{expect(passwordCheck('N7')).toBeFalsy()});
  test('Number + 1 letter in Lowercase', ()=>{expect(passwordCheck('n7')).toBeFalsy()});
  test('Number + 2 letter', ()=>{expect(passwordCheck('Na7')).toBeFalsy()});
  test('Number + special symbol', ()=>{expect(passwordCheck('7!')).toBeFalsy()});
  test('Number + > 10 symbol', ()=>{expect(passwordCheck('Nagibator777')).toBeFalsy()});
  test('Number + special symbol + < 10 symbol', ()=>{expect(passwordCheck('Nag7!')).toBeFalsy()});

  test('1 Letter in Uppercase', ()=>{expect(passwordCheck('N')).toBeFalsy()});
  test('1 letter in Lowercase', ()=>{expect(passwordCheck('n')).toBeFalsy()});
  test('2 letter', ()=>{expect(passwordCheck('Na')).toBeFalsy()});
  test('2 letter + special symbol', ()=>{expect(passwordCheck('Na!')).toBeFalsy()});
  test('special symbol + > 10 symbol', ()=>{expect(passwordCheck('Nagibator!!')).toBeFalsy()});

  test('special symbol', ()=>{expect(passwordCheck('!')).toBeFalsy()});
  test('special symbol > 10 symbol', ()=>{expect(passwordCheck('!!!!!!!!!!!!!!')).toBeFalsy()});
});
