const {makeRequests} = require('./makeRequests');

const mockFunc = jest.fn(() => Promise.resolve([2,3]));
mockFunc();

test('Проверка на выполнение', ()=> {expect(makeRequests(['https://github.com/DmBorozdin','https://github.com/WebHeroSchool'],1)).resolves.toEqual([2,3])});
test('Проверка на выполнение', ()=> {expect(makeRequests(['https://github.com/DmBorozdin','https://github.com/DmBorozdin'],1)).resolves.toEqual([2,3])});
test('Проверка на выполнение', ()=> {expect(mockFunc).toHaveBeenCalledTimes(1)});
