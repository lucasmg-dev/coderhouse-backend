import ProductosApi from './api/ProductosAPI.js'

import minimist from 'minimist'

console.log('Instanciando la API')
const productosApi = new ProductosApi()

async function ejecutarCmds() {
    const argv = minimist(process.argv.slice(2))
    const { cmd, id, nombre, precio, stock } = argv
    try {
        switch (cmd.toLowerCase()) {
            case 'buscar':
                console.log(cmd)
                console.log(await productosApi.buscar(id))
                break

            case 'agregar':
                console.log(cmd)
                console.log(await productosApi.agregar({ nombre, precio, stock }))
                break

            case 'reemplazar':
                console.log(cmd)
                console.log(await productosApi.reemplazar(id, { nombre, precio, stock }))
                break

            case 'borrar':
                console.log(cmd)
                await productosApi.borrar(id)
                break

            case 'buscardto':
                console.log(cmd)
                console.log(await productosApi.buscardto(id))
                break

            default:
                console.log('comando no válido:', cmd)
        }
    }
    catch (error) {
        console.log(error)
    }

    productosApi.exit()
}

ejecutarCmds()