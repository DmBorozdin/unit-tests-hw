const axios = require('axios');

/**
 * Напишите функцию makeRequests(urls, maxRequests), получающую
 * на вход массив ссылок urls и число maxRequests - максимальное
 * количество одновременных запросов. Условия:
 *
 * 1. Одновременно должно выполняться не более указанного
 *    числа запросов.
 * 2. Должен возвращаться promise, резолвящийся в массив результатов
 *    в той же последовательности, что и адреса запросов.
 * 3. Дублирующиеся урлы должны игнорироваться (при этом
 *    результат всё равно должен присутствовать в результате
 *    на нужной позиции).
 * 4. При падении любого из запросов вернувшийся промис
 *    должен реджектиться с той же ошибкой, что и оригинальный
 *    запрос.
 *
 * @param  {string[]} urls      массив с адресами
 * @param  {number} maxRequests максимальное количество одновременных запросов
 * @return {Promise}
 */
const makeRequests = (urls, maxRequests) => {
    const results = [];
    const urlsStatus = urls.reduce((acc, value, index) => {
        if (acc[value]) {
            acc[value].indexes = [...acc[value].indexes, index];
            acc[value].status = 'waiting';
            return acc;
        }

        acc[value] = {};
        acc[value].indexes = [index];
        acc[value].status = 'waiting';
        return acc;
    }, {});
    let counter = 0;
    let currentIndex = 0;

    return new Promise((resolve, reject) => {
        const requestResolved = (url) => res => {
            urlsStatus[url].status = 'success';
            urlsStatus[url].indexes.forEach(value => results[value] = res.data);

            counter--;
            makeNewRequests();
        };

        const requestRejected = res => {
            reject(res);
        };

        const makeNewRequests = () => {
            if (results.filter(value => value).length === urls.length) {
                resolve(results);
                return;
            }

            while (counter < maxRequests && currentIndex < urls.length) {
                const url = urls[currentIndex];

                if (urlsStatus[url].status === 'waiting') {
                    axios.get({
                        url
                    })
                        .then(requestResolved(url), requestRejected);

                    urlsStatus[url].status === 'progress';
                    counter++;
                }

                currentIndex++;
            }
        };

        makeNewRequests();
    });
};

module.exports = { makeRequests };
