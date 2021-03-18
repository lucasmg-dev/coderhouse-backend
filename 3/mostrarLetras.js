function mostrarLetras(palabra, termine) {
  let i = 0
  const id = setInterval(() => {
    if (i < palabra.length) {
      console.log(palabra[i])
      i++
    } else {
      clearInterval(id)
      termine()
    }
  }, 1000)
}


const fin = () => console.log('terminé')

setTimeout(() => { mostrarLetras('hola', fin); }, 0)
setTimeout(() => { mostrarLetras('hola', fin); }, 250)
setTimeout(() => { mostrarLetras('hola', fin); }, 500)