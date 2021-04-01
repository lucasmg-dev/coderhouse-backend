function main() {

    const productos = [
        { id: 1, nombre: 'Escuadra', precio: 323.45 },
        { id: 2, nombre: 'Calculadora', precio: 234.56 },
        { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
        { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
        { id: 5, nombre: 'Reloj', precio: 67.89 },
        { id: 6, nombre: 'Agenda', precio: 78.90 }
    ]

    const nombres = getNombres(productos)
    const total = to2decimales(getPrecioTotal(productos))
    const promedio = to2decimales(getPrecioPromedio(productos))
    const productoPrecioMinimo = getProdPrecioMinimo(productos)
    const productoPrecioMaximo = getProdPrecioMaximo(productos)

    const info = {
        nombres,
        total,
        promedio,
        productoPrecioMinimo,
        productoPrecioMaximo,
    }

    console.log(info)
}

main()

function getNombres(productos) {
    return productos.map(producto => producto.nombre).join(', ')
}

function getPrecioTotal(productos) {
    return productos.reduce((acum, producto) => acum + producto.precio, 0)
}

function getPrecioPromedio(productos) {
    return getPrecioTotal(productos) / productos.length
}

function getProdPrecioMinimo(productos) {
    let prod = productos[0].nombre
    let min = productos[0].precio
    for (const producto of productos) {
        if (producto.precio < min) {
            min = producto.precio
            prod = producto.nombre
        }
    }
    return prod
}

function getProdPrecioMaximo(productos) {
    let prod = productos[0].nombre
    let max = productos[0].precio
    for (const producto of productos) {
        if (producto.precio > max) {
            max = producto.precio
            prod = producto.nombre
        }
    }
    return prod
}

function to2decimales(valor) {
    return Number(valor.toFixed(2))
}
