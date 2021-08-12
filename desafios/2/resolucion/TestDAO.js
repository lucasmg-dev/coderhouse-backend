import PersonaFileDao from './PersonaFileDAO.js'

tests()

async function tests() {
    const personaFileDao = new PersonaFileDao()

    console.log('----------------------------------------------')
    console.log('1) Obtener todas las personas (debe dar error)')
    console.log(await personaFileDao.getAll())

    await personaFileDao.init('personas.json')

    console.log('-----------------------------')
    console.log('1) Obtener todas las personas')
    console.log(await personaFileDao.getAll())

    console.log('-----------------------------')
    console.log('2) Incorporar una persona')
    const persona1 = { nombre: 'Juan', apellido: 'Perez', DNI: '30555777' }
    console.log(await personaFileDao.add(persona1))

    console.log('-----------------------------')
    console.log('3) Obtener todas las personas')
    console.log(await personaFileDao.getAll())

    console.log('-----------------------------')
    console.log('4) Incorporar otra persona')
    const persona2 = { nombre: 'Pedro', apellido: 'Suarez', DNI: '35678907' }
    console.log(await personaFileDao.add(persona2))

    console.log('-----------------------------')
    console.log('5) Obtener todas las personas')
    console.log(await personaFileDao.getAll())

    console.log('--------------------------------')
    console.log('6) Obtener una persona por su id')
    console.log(await personaFileDao.getById(2))

    console.log('-----------------------------------')
    console.log('7) Actualizar una persona por su id')
    console.log(await personaFileDao.updateById(2, { nombre: 'Ana', apellido: 'Mei', DNI: '37123543' }))

    console.log('-----------------------------')
    console.log('8) Obtener todas las personas')
    console.log(await personaFileDao.getAll())

    console.log('--------------------------------')
    console.log('9) Borrar una persona por su id')
    console.log(await personaFileDao.deleteById(2))

    console.log('------------------------------')
    console.log('10) Obtener todas las personas')
    console.log(await personaFileDao.getAll())
}
