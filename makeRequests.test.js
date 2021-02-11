const {makeRequests} = require('./makeRequests');
const axios = require('axios');

jest.mock('axios');

describe('makeRequests test', ()=>{
  test('Успешная загрузка данных, массив состоит из 3 неповторяющихся ссылок, одновременно выполняется 1 запрос', ()=> {
    const data=[1,2,3];
    axios.get.mockImplementationOnce(()=>Promise.resolve(data));
    expect(makeRequests(['https://github.com/DmBorozdin','https://github.com/WebHeroSchool','https://github.com'],1)).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
  test('Успешная загрузка данных, массив состоит из 3 неповторяющихся ссылок, одновременно выполняется 3 запроса', ()=> {
    const data=[1,2,3];
    axios.get.mockImplementationOnce(()=>Promise.resolve(data));
    expect(makeRequests(['https://github.com/DmBorozdin','https://github.com/WebHeroSchool','https://github.com'],3)).resolves.toEqual(data);
  });
  test('Успешная загрузка данных, массив состоит из 3 неповторяющихся ссылок, одновременно выполняется 0 запросов', ()=> {
    const data=[1,2,3];
    axios.get.mockImplementationOnce(()=>Promise.resolve(data));
    expect(makeRequests(['https://github.com/DmBorozdin','https://github.com/WebHeroSchool','https://github.com'],0)).resolves.toEqual([]);
  });

  test('Успешная загрузка данных, массив состоит из 3 ссылок, 2 их которых повторяются', ()=> {
    const data=[1,1,3];
    axios.get.mockImplementationOnce(()=>Promise.resolve(data));
    expect(makeRequests(['https://github.com/DmBorozdin','https://github.com/DmBorozdin','https://github.com'],1)).resolves.toEqual(data);
  });
  test('Успешная загрузка данных, массив состоит из 1 ссылки', ()=> {
    const data=[1];
    axios.get.mockImplementationOnce(()=>Promise.resolve(data));
    expect(makeRequests(['https://github.com/DmBorozdin'],1)).resolves.toEqual(data);
  });
  test('Успешная загрузка данных, массив состоит из 0 ссылок', ()=> {
    const data=[1];
    axios.get.mockImplementationOnce(()=>Promise.resolve(data));
    expect(makeRequests([],1)).resolves.toEqual([]);
  });

  test('Ошибка загрузки данных', ()=> {
    const errorMessage='Error';
    axios.get.mockImplementationOnce(()=>Promise.reject(new Error(errorMessage)));
    expect(makeRequests(['https://github.com/DmBorozdin','https://github.com/WebHeroSchool'],1)).rejects.toThrow(errorMessage);
  });
});
