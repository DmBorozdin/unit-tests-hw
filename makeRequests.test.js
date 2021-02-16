const {makeRequests} = require('./makeRequests');
const axios = require('axios');

jest.mock('axios');

describe('makeRequests test', ()=>{
  afterEach(()=>{
    jest.clearAllMocks();
  });

  test('1) Успешная загрузка данных, массив состоит из 3 неповторяющихся ссылок, одновременно выполняется 0 запросов', ()=> {
    const data=[1,2,3];
    const urls=['https://github.com/DmBorozdin','https://github.com/WebHeroSchool','https://github.com'];
    axios.get.mockImplementation(()=>Promise.resolve(data));
    expect(makeRequests(urls,0)).resolves.toEqual([]);
    expect(axios.get).toHaveBeenCalledTimes(0);
  });
  test('2) Успешная загрузка данных, массив состоит из 3 неповторяющихся ссылок, одновременно выполняется -1 запрос', ()=> {
    const data=[1,2,3];
    const urls=['https://github.com/DmBorozdin','https://github.com/WebHeroSchool','https://github.com'];
    axios.get.mockImplementation(()=>Promise.resolve(data));
    expect(makeRequests(urls,-1)).resolves.toEqual([]);
    expect(axios.get).toHaveBeenCalledTimes(0);
  });
  test('3) Успешная загрузка данных, массив состоит из 3 неповторяющихся ссылок, одновременно выполняется 1 запрос', ()=> {
    const data=[1,2,3];
    const urls=['https://github.com/DmBorozdin','https://github.com/WebHeroSchool','https://github.com'];
    axios.get.mockImplementation(()=>Promise.resolve(data));
    expect(makeRequests(urls,1)).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith({url:urls[0]});
    });
  test('4) Успешная загрузка данных, массив состоит из 3 неповторяющихся ссылок, одновременно выполняется 3 запроса, последовательность ссылок 1,2,3', ()=> {
    const data=[
      {url:'https://github.com/DmBorozdin', result:1},
      {url:'https://github.com/WebHeroSchool', result:2},
      {url:'https://github.com', result:3},
    ];
    axios.get.mockImplementation(()=>Promise.resolve([data[0].result,data[1].result,data[2].result]));
    expect(makeRequests([data[0].url,data[1].url,data[2].url],3)).resolves.toEqual([data[0].result,data[1].result,data[2].result]);
    expect(axios.get).toHaveBeenCalledTimes(3);
    expect(axios.get).toHaveBeenNthCalledWith(1,{url:data[0].url});
    expect(axios.get).toHaveBeenNthCalledWith(2,{url:data[1].url});
    expect(axios.get).toHaveBeenNthCalledWith(3,{url:data[2].url});
  });
  test('5) Успешная загрузка данных, массив состоит из 3 неповторяющихся ссылок, одновременно выполняется 3 запроса, изменена последовательность ссылок в массиве на 3,1,2', ()=> {
    const data=[
      {url:'https://github.com/DmBorozdin', result:1},
      {url:'https://github.com/WebHeroSchool', result:2},
      {url:'https://github.com', result:3},
    ];
    axios.get.mockImplementation(()=>Promise.resolve([data[2].result,data[0].result,data[1].result]));
    expect(makeRequests([data[2].url,data[0].url,data[1].url],3)).resolves.toEqual([data[2].result,data[0].result,data[1].result]);
    expect(axios.get).toHaveBeenCalledTimes(3);
    expect(axios.get).toHaveBeenNthCalledWith(1,{url:data[2].url});
    expect(axios.get).toHaveBeenNthCalledWith(2,{url:data[0].url});
    expect(axios.get).toHaveBeenNthCalledWith(3,{url:data[1].url});
  });

  test('6) Успешная загрузка данных, массив состоит из 3 ссылок, 2 их которых повторяются, одновременно выполняется 3 запроса', ()=> {
    const data=[
      {url:'https://github.com/DmBorozdin', result:1},
      {url:'https://github.com/WebHeroSchool', result:2},
      {url:'https://github.com', result:3},
    ];
    axios.get.mockImplementation(()=>Promise.resolve([data[0].result,data[0].result,data[2].result]));
    expect(makeRequests([data[0].url,data[0].url,data[2].url],3)).resolves.toEqual([data[0].result,data[0].result,data[2].result]);
    expect(axios.get).toHaveBeenCalledTimes(3);
    expect(axios.get).toHaveBeenNthCalledWith(1,{url:data[0].url});
    expect(axios.get).toHaveBeenNthCalledWith(2,{url:data[0].url});
    expect(axios.get).toHaveBeenNthCalledWith(3,{url:data[2].url});
  });
  test('7) Успешная загрузка данных, массив состоит из 3 ссылок, 2 их которых повторяются, одновременно выполняется 1 запрос', ()=> {
    const data=[
      {url:'https://github.com/DmBorozdin', result:1},
      {url:'https://github.com/WebHeroSchool', result:2},
      {url:'https://github.com', result:3},
    ];
    axios.get.mockImplementation(()=>Promise.resolve([data[0].result,data[0].result,data[2].result]));
    expect(makeRequests([data[0].url,data[0].url,data[2].url],1)).resolves.toEqual([data[0].result,data[0].result,data[2].result]);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenNthCalledWith(1,{url:data[0].url});
  });

  test('8) Успешная загрузка данных, массив состоит из 1 ссылки', ()=> {
    const data=[1];
    const urls=['https://github.com/DmBorozdin'];
    axios.get.mockImplementation(()=>Promise.resolve(data));
    expect(makeRequests(urls,1)).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith({url:urls[0]});
  });
  test('9) Успешная загрузка данных, массив состоит из 1 ссылки, одновременно выполняется 3 запроса', ()=> {
    const data=[1];
    const urls=['https://github.com/DmBorozdin'];
    axios.get.mockImplementation(()=>Promise.resolve(data));
    expect(makeRequests(urls,3)).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith({url:urls[0]});
  });
  test('10) Успешная загрузка данных, массив состоит из 0 ссылок', ()=> {
    const data=[1];
    axios.get.mockImplementation(()=>Promise.resolve(data));
    expect(makeRequests([],1)).resolves.toEqual([]);
  });

  test('11) Ошибка загрузки данных', ()=> {
    const errorMessage='Error';
    axios.get.mockImplementation(()=>Promise.reject(new Error(errorMessage)));
    expect(makeRequests(['https://github.com/DmBorozdin','https://github.com/WebHeroSchool'],1)).rejects.toThrow(errorMessage);
  });
});
