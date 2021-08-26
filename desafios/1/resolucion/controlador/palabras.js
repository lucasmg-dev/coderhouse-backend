import ApiPalabras from '../api/palabras.js'

class ControladorPalabras {

    constructor() {
        this.apiPalabras = new ApiPalabras()
    }

    obtenerPalabras = async () => {
        try {
            let palabras = await this.apiPalabras.obtenerPalabras()
            return { palabras }
        }
        catch (error) {
            console.log('error obtenerPalabras', error)
        }
    }

    guardarPalabra = async ({ palabra }) => {
        try {
            let palabraAux = { palabra }
            let palabraGuardada = await this.apiPalabras.guardarPalabra(palabraAux)
            return palabraGuardada
        }
        catch (error) {
            console.log('error obtenerPalabras', error)
        }
    }
}

export default ControladorPalabras
