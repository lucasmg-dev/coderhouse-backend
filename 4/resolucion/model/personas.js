import persistenciaMemory from './personasMemory.js'
import persistenciaFileSystem from './personasFileSystem.js'
import persistenciaMongo from './personasMongoDB.js'

/* -------------------------------------- */
/*                FACTORY                 */
/* -------------------------------------- */
class FactoryPersonaModel {
    static set(opcion) {
        console.log('**** PERSISTENCIA SELECCIONADA **** [' + opcion + ']')
        switch(opcion) {
            case 'Mem': return new persistenciaMemory()
            case 'File': return new persistenciaFileSystem()
            case 'Mongo': return new persistenciaMongo()
        }
    }
}

const opcion = process.argv[2] || 'Mem'
export default FactoryPersonaModel.set(opcion)