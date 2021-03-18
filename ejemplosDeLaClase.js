let a = 10;

(function () {
  let a = 20;
  console.log(a);
  if (true) {
    let a = 30;
    console.log(a);
    a = 40;
    console.log(a);
  }
  console.log(a);
})()
console.log(a);




// var a = 10;

// (function () {
//   var a = 20;
//   console.log(a);
//   if (true) {
//     var a = 30;
//     console.log(a);
//     a = 40;
//     console.log(a);
//   }
//   console.log(a);
// })()
// console.log(a);

//////////////////////////////////////////

// function createPersona(nombre) {
//   return {
//     nombre: nombre,
//     getNombre: function() {
//       return nombre
//     }
//   }
// }

// const persona = new Persona('mariano')

// console.log(persona.getNombre())

//////////////////////////////////////////

// class Persona {
//   constructor(nombre) {
//     this.nombre = nombre
//   }
//   getNombre() {
//     return this.nombre
//   }
// }

// const persona = new Persona('mariano')

// console.log(persona.getNombre())

//////////////////////////////////////////

// function Persona(nombre) {
//   this.nombre = nombre
// }

// Persona.prototype.getNombre = function() {
//   return this.nombre
// }

// const persona = new Persona('mariano')

// console.log(persona.getNombre())

//////////////////////////////////////////

// const rouco = {
//   nombre: 'rouco',
//   saludar() {
//     console.log(`hola, soy ${this.nombre}`)
//   },
//   verificar() {
//     console.log(this === rouco)
//   }
// }

// rouco.saludar()
// rouco.verificar()

// const saludar2 = rouco.saludar
// const verificar2 = rouco.verificar

// saludar2()
// verificar2()

//////////////////////////////////////////

// 'use strict'

// const o = {
//   n: 5,
//   f: function() {
//     return this.n
//   }
// }

// console.log(o)

// console.log(o.f())

// console.log(globalThis)

// this.r = 8

// console.log(this)

// function f(a,b) {
//   'use strict';

//   console.log(f.caller)
//   console.log(f.arguments)
//   console.log(this,a,b)
// }

// function mainCaller() {
//   f(1,2)
// }

// mainCaller()

// const num = 8;

// const o = Object.create(null, {
//   x: {
//     value: 5,
//     // writable: false
//   }
// })

// o.getNum = function() {
//   return this.num;
// }

// console.log(o.x);

// o.x = 7;

// console.log(o.x);

// console.log(o.getNum());