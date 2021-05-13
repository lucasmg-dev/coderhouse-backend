import knex from 'knex'

class ArticulosDB {
  constructor(config) {
    this.knex = knex(config)
  }

  crearTabla() {
    return this.knex.schema.dropTableIfExists('articulos')
      .then(() => {
        return this.knex.schema.createTable('articulos', table => {
          table.increments('id').primary();
          table.string('nombre', 15).notNullable();
          table.string('codigo', 10).notNullable();
          table.float('precio');
          table.integer('stock');
        })
      })
  }

  insertar(articulos) {
    return this.knex('articulos').insert(articulos)
  }

  listar() {
    return this.knex('articulos').select()
  }
  borrarPorId(id) {
    return this.knex.from('articulos').where('id', id).del()
  }
  actualizarStockPorId(id, nuevoStock) {
    return this.knex.from('articulos').where('id', id).update({ stock: nuevoStock })
  }
  cerrar() {
    return this.knex.destroy()
  }
}

export default ArticulosDB