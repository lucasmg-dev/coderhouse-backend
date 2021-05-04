// import * as operaciones from './lib/operaciones'
import { sumar, restar, multiplicar, dividir } from './lib/operaciones';

const mensaje: string = 'Hola'

console.log(mensaje)

const num1: number = 10;
const num2: number = 4;

// console.log(operaciones.sumar(num1, num2));
// console.log(operaciones.restar(num1, num2));
// console.log(operaciones.multiplicar(num1, num2));
// console.log(operaciones.dividir(num1, num2));

console.log(sumar(num1, num2));
console.log(restar(num1, num2));
console.log(multiplicar(num1, num2));
console.log(dividir(num1, num2));
