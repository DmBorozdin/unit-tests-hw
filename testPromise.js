const {rejectOnTimeout} = require('./rejectOnTimeout');

rejectOnTimeout(Promise.resolve('string'),20000).then((res) =>{console.log(res)})
