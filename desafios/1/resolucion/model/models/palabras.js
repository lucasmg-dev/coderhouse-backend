import Joi from 'joi'

class Palabras {

    constructor(palabra) {
        this.palabra = palabra
    }

    equals(otroPalabras) {
        if (!(otroPalabras instanceof Palabras)) {
            return false
        }
        if (this.palabra != otroPalabras.palabra) {
            return false
        }
        return true
    }

    static validar(palabra, requerido) {
        const PalabraSchema = Joi.object({
            palabra: requerido ? Joi.string().required() : Joi.string()
        })

        const { error } = PalabraSchema.validate(palabra)
        if (error) {
            throw error
        }
    }
}

export default Palabras