// archivo: archivos/usuarios.txt
/*
  {
    id: N
    nombre: "Lucas"
  }
*/

import fs from "fs";

class Archivo {
  constructor() {
    this.filepath = "./archivos/usuarios.txt";
  }

  async leer() {
    try {
      const usuarios = await fs.promises.readFile(this.filepath, "utf-8");
      return JSON.parse(usuarios);
    } catch (err) {
      return [];
    }
  }

  async guardar(nombre) {
    try {
      const usuarios = await this.leer();
      const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre,
      };
      usuarios.push(nuevoUsuario);
      await fs.promises.writeFile(
        this.filepath,
        JSON.stringify(usuarios, null, 2)
      );
      return `Se ha agregado el usuario ${nombre}`;
    } catch (err) {
      console.log("Ups, algo paso", err);
    }
  }

  async borrar() {
    await fs.promises.unlink(this.filepath);
  }
}

(async () => {
  const manejadorDeArchivos = new Archivo();
  console.log("LEER:", await manejadorDeArchivos.leer());
  console.log(await manejadorDeArchivos.guardar("Jose"));
  console.log(await manejadorDeArchivos.guardar("Juan"));
  console.log(await manejadorDeArchivos.guardar("Lucas"));
  console.log("LEER:", await manejadorDeArchivos.leer());
  setTimeout(async () => {
    await manejadorDeArchivos.borrar();
  }, 5000);
  // console.log("LEER:", await manejadorDeArchivos.leer());
})();
