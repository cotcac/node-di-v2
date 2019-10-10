const container = require('./container');
container.resolve('time')
container.resolve('time')
container.resolve('printTime')()
container.resolve('printTime')()
container.resolve('test')();
const test = container.resolve('test')();
console.log(test);
