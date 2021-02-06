const {getIntersection} = require('./getIntersection');

describe ('getIntersection test',()=> {
  test('Массивы с повторяющимися значениями', ()=> {expect(getIntersection([1, 3, 5, 7, 9], [1, 2, 3, 4])).toEqual([1, 3])});
  test('Массивы без повторяющихся значений', ()=> {expect(getIntersection([1, 3, 5], [7,9])).toEqual([])});
  test('Массивы с повторяющимися значениями несколько раз', ()=> {expect(getIntersection([1, 1, 1, 3, 5, 7, 9], [1, 1, 2, 3, 4])).toEqual([1, 1, 3])});
  test('Массивы с отрицательными значениями', ()=> {expect(getIntersection([ -1, 3, 5, -7, 9], [-1, 2, 3, 4, -7])).toEqual([-7, -1, 3])});
  test('Пустые массивы', ()=> {expect(getIntersection([], [])).toEqual([])});
  test('Один из массивов пустой', ()=> {expect(getIntersection([1, 3, 5], [])).toEqual([])});
  test('Значения массивов не упорядочены', ()=> {expect(getIntersection([11, 4, 1, 7, -3], [-3, 10, 2, -8, 4])).toEqual([-3,4])});
  test('Массивы содержат строку, которую нельзя преобразовать в число. Должна быть ошибка типа данных', ()=> {expect(getIntersection([1, "a", 5, 9], [1, 9, 3, 4, "a"])).toEqual([1,9])});
  test('Массивы содержат строку, которую можно преобразовать в число. Должна быть ошибка типа данных', ()=> {expect(getIntersection([1, '2', 5, 'b', 9], [1, 9, 3, 4, '2', 'b'])).toEqual([1, 2, 9])});
});
