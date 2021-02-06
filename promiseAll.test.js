const {promiseAll} = require('./promiseAll');

describe ('promiseAll test',()=> {
  test('Передаём промисы с resolve', ()=> {expect(promiseAll([Promise.resolve(2), Promise.resolve(3)])).resolves.toEqual([2, 3])});
  test('Передаём промисы с resolve и reject', ()=> {expect(promiseAll([Promise.resolve(2), Promise.reject(3)])).rejects.toEqual(3)});
  test('Передаём пустой массив', ()=> {expect(promiseAll([])).rejects.toEqual('empty arr')});
  test('Передаём строку и число вместо промисов. JS преобразует их в массив промисов но с ошибкой. Проверим наличие массива', ()=> {expect(promiseAll(['promise1', 123])).resolves.toEqual(['promise1', 123])});
  test('Передаём строку и число вместо промисов. JS преобразует их в массив промисов но с ошибкой. Проверим наличие ошибки', ()=> {expect(promiseAll(['promise1', 123])).rejects.toThrow()});
});
