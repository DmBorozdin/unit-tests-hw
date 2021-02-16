const {rejectOnTimeout} = require('./rejectOnTimeout');

describe('rejectOnTimeout tests', ()=>{
  beforeEach(()=>{
    jest.useFakeTimers();
  });

  test('1) Проверка вызова таймера', ()=> {

    expect(rejectOnTimeout(Promise.resolve(1),20000)).resolves.toEqual(2);
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
});
