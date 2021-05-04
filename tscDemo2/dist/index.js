"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as operaciones from './lib/operaciones'
var operaciones_1 = require("./lib/operaciones");
var mensaje = 'Hola';
console.log(mensaje);
var num1 = 10;
var num2 = 4;
// console.log(operaciones.sumar(num1, num2));
// console.log(operaciones.restar(num1, num2));
// console.log(operaciones.multiplicar(num1, num2));
// console.log(operaciones.dividir(num1, num2));
console.log(operaciones_1.sumar(num1, num2));
console.log(operaciones_1.restar(num1, num2));
console.log(operaciones_1.multiplicar(num1, num2));
console.log(operaciones_1.dividir(num1, num2));
