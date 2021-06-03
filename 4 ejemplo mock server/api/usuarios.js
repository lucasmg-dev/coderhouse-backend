import { generarUsuario } from '../utils/generadorDeUsuarios.js'

function crearApiUsuariosMock() {
    const usuarios = []

    function getNextId() {
        let nextId
        if (usuarios.length === 0) {
            nextId = 1
        } else {
            nextId = usuarios[usuarios.length - 1].id + 1
        }
        return nextId
    }

    function getFechaActual() {
        return new Date().toLocaleString()
    }

    return {
        popular: (cant = 50) => {
            const nuevos = []
            for (let i = 1; i <= cant; i++) {
                const nuevoUsuario = { id: getNextId(), ...generarUsuario(), fecha: getFechaActual() }
                usuarios.push(nuevoUsuario)
                nuevos.push(nuevoUsuario)
            }
            return nuevos
        },
        buscar: (datoId) => {

            if (!datoId) {
                return [...usuarios]
            }

            const id = Number(datoId)
            const index = usuarios.findIndex(u => u.id === id)

            if (index === -1) {
                throw new Error('usuario no encontrado')
            }

            const usuario = usuarios[index]
            return { ...usuario }
        },
        agregar: (datosUsuario) => {
            const usuario = {
                ...datosUsuario,
                fecha: getFechaActual(),
                id: getNextId(),
            }
            usuarios.push(usuario)
            return usuario
        },
        actualizar: (datoId, nuevosDatos) => {
            const id = Number(datoId)
            const index = usuarios.findIndex(u => u.id === id)

            if (index === -1) {
                throw new Error('usuario no encontrado')
            }

            const usuario = usuarios[index]

            const usuarioActualizado = { ...usuario, ...nuevosDatos }
            usuarioActualizado.fecha = getFechaActual()

            usuarios[index] = usuarioActualizado

            return usuarioActualizado
        },
        borrar: (datoId) => {
            const id = Number(datoId)
            const index = usuarios.findIndex(u => u.id === id)

            if (index === -1) {
                throw new Error('usuario no encontrado')
            }

            const usuario = usuarios.splice(index, 1)

            return usuario
        }

    }
}

export {
    crearApiUsuariosMock
}