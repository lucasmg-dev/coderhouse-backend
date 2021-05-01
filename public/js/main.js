const socket = io.connect();

document.getElementById('miBoton').addEventListener('click', () => {
  socket.emit('boton')
})

let productosTemplate

socket.on('productos', async (productos) => {
  if (!productosTemplate) {
    const archivo = await fetch('plantillas/tabla.hbs')
    const templateText = await archivo.text()
    productosTemplate = Handlebars.compile(templateText);
  }
  const tablaHtml = productosTemplate({ productos });
  document.getElementById('productos').innerHTML = tablaHtml
})

// const prodStrTemplate = "<li>id: {{id}} - nombre: {{nombre}}</li>"
// const productoTemplate = Handlebars.compile(prodStrTemplate);

// socket.on('productos', async (productos) => {
//   const productosHtml = []
//   if (productos.length) {
//     for (const { id, nombre } of productos) {
//       const elHtml = productoTemplate({ id, nombre });
//       productosHtml.push(elHtml)
//     }
//     const elHtml = `<ul>${productosHtml.join('')}</ul>`
//     document.getElementById('productos').innerHTML = elHtml
//   } else {
//     document.getElementById('productos').innerHTML = '<p>nada para mostrar</p>'
//   }
// })