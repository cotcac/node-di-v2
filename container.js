
const { createContainer, asFunction, asValue } = require('awilix');

const container = createContainer();


const getTime = () => new Date().toString()
const makePrintTime = ({ time }) => () => {
    console.log('Time:', time)
}

const test =(({x}) =>() =>{
    return 'hello ' + x;
    
})

container.register({
    printTime: asFunction(makePrintTime).singleton(),
    time: asFunction(getTime).transient(),
    test:asFunction(test),
    x:asValue('world')
})
module.exports = container;