const {limitCalls} = require('./limitCalls');

describe ('limitCalls test',()=> {
  test('Передаём положительное число вызовов функции 2, вызываем функцию 3 раза. 3ий раз ожидаем undefined', ()=> {
    const testLimitCalls = limitCalls(() => 2+2, 2);
    expect(testLimitCalls()).toEqual(4);
    expect(testLimitCalls()).toEqual(4);
    expect(testLimitCalls()).toBeUndefined();
  });

  test('Передаём нулевое число вызовов функции', ()=> {
    const testLimitCalls = limitCalls(() => 2+2, 0);
    expect(testLimitCalls()).toBeUndefined();
  });

  test('Передаём отрицательное число вызовов функции', ()=> {
    const testLimitCalls = limitCalls(() => 2+2, -1);
    expect(testLimitCalls()).toBeUndefined();
  });
});
