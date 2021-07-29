const operaciones = []

const agregar = operacion => {
    operaciones.push(operacion)
}

const listar = () => {
    return operaciones
}

module.exports = {
    agregar,
    listar
}
