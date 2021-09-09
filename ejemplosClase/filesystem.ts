// https://medium.com/deno-the-complete-reference/basic-file-ops-denos-equivalent-of-node-js-b45154b81e26

// escritura (pero no lo vamos a hacer así)
// const encoder = new TextEncoder()
// const data = encoder.encode('Hello Deno!')
// await Deno.writeFile('test.txt', data)

// escritura simplificada
await Deno.writeTextFile("test.txt", "Hola deno facil!");

// // lectura (pero no lo vamos a hacer así)
// // const denoFile = await Deno.open('test.txt', { read: true })
// // await Deno.copy(denoFile, Deno.stdout)

// // lectura simplificada
const content = await Deno.readTextFile("test.txt");
console.log(content);

// // copia (pero no lo vamos a hacer asi...)
// // import { copy } from 'https://deno.land/std@0.100.0/fs/copy.ts';
// // copy("archivo-origen.csv", "archivo-destino.csv");

// // copia simplificada
await Deno.copyFile("test.txt", "test2.txt");

// // no esta en la clase, pero esta bueno:
await Deno.remove("test.txt");
