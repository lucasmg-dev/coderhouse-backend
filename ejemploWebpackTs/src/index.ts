import express, { Application, Request, Response } from 'express'

import Persona from './models/Persona'
import { getTime } from './lib/tiempo'

const app: Application = express();

app.get('/tiempo', (req: Request, res: Response) => {
  const persona: Persona = new Persona('pepa', 'pig');
  res.json({
    tiempo: getTime(),
    firma: persona.getFullName()
  })
})

const PORT: number = 8080;
app.listen(PORT, () => {
  console.log(`escuchando en puerto: ${PORT}`)
})