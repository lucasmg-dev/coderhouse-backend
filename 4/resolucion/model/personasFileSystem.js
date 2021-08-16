import fs from 'fs'

export default class persistenciaFileSystem {
    constructor() {
        ;( async () => {
            try {
                await fs.promises.readFile('datos.txt')
            }
            catch {
                await fs.promises.writeFile('datos.txt', JSON.stringify([]))
            }
        })()
    }
    obtenerPersonas = async () => {
        try {
            let datos = await fs.promises.readFile('datos.txt')
            return JSON.parse(datos)
        }
        catch(error) {
            console.log(error)
        }
    }
    agregarPersona = async persona => {
        try {
            let personas = JSON.parse(await fs.promises.readFile('datos.txt'))
            personas.push(persona)
            await fs.promises.writeFile('datos.txt', JSON.stringify(personas))
        }
        catch(error) {
            console.log(error)
        }
    }
}

