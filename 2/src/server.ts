import express from 'express'

import Perimetro from './operaciones/perimetro'
import Superficie from './operaciones/superficie'

const perimetro: Perimetro = new Perimetro()
const superficie: Superficie = new Superficie()

const app = express()

app.get('/perimetro', (req, res) => {
  const { figura, param1, param2 } = req.query
  const resultado = {
    calculo: 'perimetro',
    figura,
    param1,
    param2,
    resultado: NaN
  }
  switch (figura) {
    case 'cuadrado':
      resultado.resultado = perimetro.cuadrado(Number(param1))
      break
    case 'rectangulo':
      resultado.resultado = perimetro.rectangulo(Number(param1), Number(param2))
      break
    case 'circulo':
      resultado.resultado = perimetro.circulo(Number(param1))
      break
  }
  res.json(resultado)
})

app.get('/superficie', (req, res) => {
  const { figura, param1, param2 } = req.query
  let resultado
  switch (figura) {
    case 'cuadrado':
      resultado = superficie.cuadrado(Number(param1))
      break
    case 'rectangulo':
      resultado = superficie.rectangulo(Number(param1), Number(param2))
      break
    case 'circulo':
      resultado = superficie.circulo(Number(param1))
      break
  }
  res.json({
    calculo: 'superficie',
    figura,
    param1,
    param2,
    resultado
  })
})

const PORT: number = 8080
app.listen(PORT, () => {
  console.log(`Servidor express Typescript/Webpack en puerto ${PORT}`)
})
