// const calc = require('./utils/calc.mjs')
// import calc from './utils/calc.mjs'
const CALC = true

if (CALC) {
    import('./utils/calc.js')
        .then(calcModule => {
            console.log(calcModule)
            calcModule.calc(3, 2, 'sum')
            calcModule.calc(3, 2, 'subtract')
            calcModule.calc(3, 2, 'multiply')
        })
}