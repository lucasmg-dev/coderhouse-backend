const { suma, resta, mult, div } = require('cds-operaciones')
const operaciones = require('../persistencia/operaciones')

const sumar = (a,b) => {
    let r = suma(a,b)
    operaciones.agregar({
        tipo: 'sumar',
        params: [a,b],
        result: r,
        timestamp: Date.now()
    })
    return r
}

const restar = (a,b) => {
    let r = resta(a,b)
    operaciones.agregar({
        tipo: 'restar',
        params: [a,b],
        result: r,
        timestamp: Date.now()
    })
    return r
}

const multiplicar = (a,b) => {
    let r = mult(a,b)
    operaciones.agregar({
        tipo: 'multiplicar',
        params: [a,b],
        result: r,
        timestamp: Date.now()
    })
    return r
}

const dividir = (a,b) => {
    let r = div(a,b)
    operaciones.agregar({
        tipo: 'dividir',
        params: [a,b],
        result: r,
        timestamp: Date.now()
    })
    return r
}

const listar = () => operaciones.listar()

module.exports = {
    sumar, 
    restar,
    multiplicar,
    dividir,
    listar
}