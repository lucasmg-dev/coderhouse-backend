const operaciones = require('../negocio/operaciones')

const suma = (req,res) => {
    let {a,b} = req.query
    res.send(`La suma de ${a} y ${b} es ${operaciones.sumar(Number(a),Number(b))}`)
}

const resta = (req,res) => {
    let {a,b} = req.query
    res.send(`La resta de ${a} y ${b} es ${operaciones.restar(Number(a),Number(b))}`)
}

const mult = (req,res) => {
    let {a,b} = req.query
    res.send(`La mult de ${a} y ${b} es ${operaciones.multiplicar(Number(a),Number(b))}`)
}

const div = (req,res) => {
    let {a,b} = req.query
    res.send(`La div de ${a} y ${b} es ${operaciones.dividir(Number(a),Number(b))}`)
}

const listar = (req,res) => res.json(operaciones.listar())

module.exports = {
    suma,
    resta,
    mult,
    div,
    listar
}
