import PersonaMemDao from './PersonaMemDAO.js'

tests()

function tests() {
    const personaMemDao = new PersonaMemDao()

    console.log('-----------------------------')
    console.log('1) Obtener todas las personas')
    console.log(personaMemDao.getAll())

    console.log('-----------------------------')
    console.log('2) Incorporar una persona')
    const persona1 = {nombre:'Juan', apellido:'Perez', DNI: '30555777'}
    console.log(personaMemDao.add(persona1))

    console.log('-----------------------------')
    console.log('3) Obtener todas las personas')
    console.log(personaMemDao.getAll())

    console.log('-----------------------------')
    console.log('4) Incorporar otra persona')
    const persona2 = {nombre:'Pedro', apellido:'Suarez', DNI: '35678907'}
    console.log(personaMemDao.add(persona2))

    console.log('-----------------------------')
    console.log('5) Obtener todas las personas')
    console.log(personaMemDao.getAll())

    console.log('--------------------------------')
    console.log('6) Obtener una persona por su id')
    console.log(personaMemDao.getById(2))

    console.log('--------------------------------')
    console.log('7) Actualizar una persona por su id')
    console.log(personaMemDao.updateById(2,{nombre:'Ana', apellido:'Mei', DNI: '37123543'}))

    console.log('-----------------------------')
    console.log('8) Obtener todas las personas')
    console.log(personaMemDao.getAll())

    console.log('--------------------------------')
    console.log('9) Borrar una persona por su id')
    console.log(personaMemDao.deleteById(2))

    console.log('-----------------------------')
    console.log('10) Obtener todas las personas')
    console.log(personaMemDao.getAll())
}
