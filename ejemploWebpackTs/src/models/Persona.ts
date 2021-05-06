class Persona {

  private nombre: string;
  private apellido: string;

  constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`
  }
}

export default Persona