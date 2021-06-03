import express from 'express'

function crearRouterUsuarios(apiUsuarios) {
    const router = express.Router()
    router.post('/popular', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.popular(req.query.cant))
        } catch (err) {
            next(err)
        }
    })
    router.get('/', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.buscar())
        } catch (err) {
            next(err)
        }
    })
    router.get('/:id', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.buscar(req.params.id))
        } catch (err) {
            next(err)
        }
    })
    router.post('/', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.agregar(req.body))
        } catch (err) {
            next(err)
        }
    })
    router.put('/:id', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.actualizar(req.params.id, req.body))
        } catch (err) {
            next(err)
        }
    })
    router.delete('/:id', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.borrar(req.params.id))
        } catch (err) {
            next(err)
        }
    })

    router.use((err, req, res, next) => {
        if (err.message === 'usuario no encontrado') {
            res.status(404)
        } else {
            res.status(500)
        }
        res.json({ message: err.message })
    })

    return router
}

export {
    crearRouterUsuarios
}