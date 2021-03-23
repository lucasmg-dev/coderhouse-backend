const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res(1)
  }, 7 * 1000)
})

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res(2)
  }, 3 * 1000)
})

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res(3)
  }, 5 * 1000)
})

Promise.resolve(2)
  .then(respuesta => respuesta * 2)
  .then(respuesta => respuesta * 2)
  .then(respuesta => respuesta * 2)
  .then(respuesta => respuesta * 2)
  .then(respuesta => respuesta * 2)
  .then(respuesta => {
    console.log(respuesta)
  })

// p1
//   .then(respuesta => {
//     console.log(respuesta)
//     return p2
//   })
//   .then(respuesta => {
//     console.log(respuesta)
//     return p3
//   })
//   .then(respuesta => {
//     console.log(respuesta)
//   })
//   .catch(respuesta => {
//     console.log('Ups! algo fallo',respuesta)
//   })

  // Promise.all([p2, p1, p3])
//   .then(respuesta => console.log(respuesta))
//   .catch(respuesta => {
//     console.log('Ups! algo fallo',respuesta)
//   })

// Promise.race([p1,p2,p3])
//   .then(respuesta => console.log(respuesta))
//   .catch(respuesta => {
//     console.log('Ups! algo fallo',respuesta)
//   })