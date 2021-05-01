const socket = io.connect();

const prodStrTemplate = "<li>id: {{id}} - nombre: {{nombre}}</li>"
const productoTemplate = Handlebars.compile(prodStrTemplate);

document.getElementById('miBoton').addEventListener('click', () => {
  socket.emit('boton')
})

socket.on('productos', async (productos) => {
  const archivo = await fetch('plantillas/tabla.hbs')
  const template = await archivo.text()
  const tablaHtml = Handlebars.compile(template, productos);
  document.getElementById('productos').innerHTML = tablaHtml
})

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