import ApiNoticias from '../api/noticias.js'

class ControladorNoticias {

    constructor() {
        this.apiNoticias = new ApiNoticias()
    }

    obtenerNoticias = async ({ _id }) => {
        try {
            const noticias = await this.apiNoticias.obtenerNoticias(_id)
            return noticias
        } catch (error) {
            console.log('error obtenerNoticias', error)
        }
    }

    guardarNoticia = async ({ titulo, cuerpo, autor, imagen, email, vista }) => {
        try {
            const noticia = { titulo, cuerpo, autor, imagen, email, vista }
            const noticiaGuardada = await this.apiNoticias.guardarNoticia(noticia)
            return noticiaGuardada
        } catch (error) {
            console.log('error obtenerNoticias', error)
        }
    }

    actualizarNoticia = async ({ _id, vista }) => {
        try {
            const noticiaActualizada = await this.apiNoticias.actualizarNoticia(_id, { vista })
            return noticiaActualizada
        } catch (error) {
            console.log('error obtenerNoticias', error)
        }
    }

    borrarNoticia = async ({ _id }) => {
        try {
            const noticiaBorrada = await this.apiNoticias.borrarNoticia(_id)
            return noticiaBorrada
        } catch (error) {
            console.log('error obtenerNoticias', error)
        }
    }
}

export default ControladorNoticias
