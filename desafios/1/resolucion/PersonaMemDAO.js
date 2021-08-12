import { PersonaDTO } from "./PersonaDTO.js"

class PersonaMemDao {

    constructor(){
        this.personas = []
    }

    getNextId() {
        let lg = this.personas.length
        return lg? this.personas[lg-1].id + 1 : 1
    }
    getIndex(id) {
        return this.personas.findIndex(persona => persona.id === id)
    }
    getFyH() {
        return new Date().toLocaleString()
    }

    getAll() {
        return this.personas
    }

    getById(idBuscado) {
        return this.personas[this.getIndex(idBuscado)]
    }

    add(personaNueva) {
        let dto = PersonaDTO(personaNueva, this.getNextId(), this.getFyH())
        this.personas.push(dto)
        return dto
    }

    deleteById(idParaBorrar) {
        let persona = this.personas.splice(this.getIndex(idParaBorrar),1)
        return persona[0]
    }

    updateById(idParaReemplazar, nuevaPersona) {
        let dto = PersonaDTO(nuevaPersona, idParaReemplazar, this.getFyH())
        this.personas.splice(this.getIndex(idParaReemplazar),1,dto)
        return dto
    }
}

export default PersonaMemDao


