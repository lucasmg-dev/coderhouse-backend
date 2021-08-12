import ProductosDaoDB from '../dao/ProductosDAODB.js'
import DTO from '../dto/ProductoDTO.js'

class ProductosApi {

    constructor() {
        this.productosDao = new ProductosDaoDB()
    }

    async agregar(prodParaAgregar) {
        const prodAgregado = await this.productosDao.add(prodParaAgregar)
        return prodAgregado
    }

    async buscar(id) {
        let productos
        if (id) {
            productos = await this.productosDao.getById(id)

        } else {
            productos = await this.productosDao.getAll()
        }
        return productos
    }

    async borrar(id) {
        if (id) {
            await this.productosDao.deleteById(id)
        }
        else {
            await this.productosDao.deleteAll()
        }
    }

    async reemplazar(id, prodParaReemplazar) {
        const prodReemplazado = await this.productosDao.updateById(id, prodParaReemplazar)
        return prodReemplazado
    }

    async buscardto(id) {
        let producto
        if (id) {
            producto = await this.productosDao.getById(id)
            return DTO.productoConInfo(producto)
        }
        else {
            producto = {}
        }
        return producto
    }

    exit() {
        this.productosDao.exit()
    }

}

export default ProductosApi