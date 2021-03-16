const fruits = ['manzana', 'pera', 'banana', 'durazno']

console.log(fruits.indexOf('pera') !== -1)

const existApple = fruits.includes('manzana') // expected: true
const existBanana = fruits.includes('banana') // expected: true

const existPera = fruits.includes('pera', 4) // expected: false

const existBanana2 = fruits.includes('banana', -1) // expected: false
const existBanana3 = fruits.includes('banana', -2) // expected: true


console.log('apple:', existApple)
console.log('banana:', existBanana)

console.log('banana 2:', existBanana2)
console.log('banana 3:', existBanana3)

console.log('pera:', existPera)

console.log('\n')
console.log('-------------------')
console.log('\n')

const exist2String = [1, 2, NaN].includes('2') // expected: false
const exist2Number = [1, 2, NaN].includes(2) // expected: true
const existNaN = [1, 2, NaN].includes('NaN') // expected: false

console.log('string 2:', exist2String)
console.log('number 2:', exist2Number)
console.log('NaN:', existNaN)