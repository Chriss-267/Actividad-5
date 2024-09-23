export abstract class Persona {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    edad: number;
  
    constructor(nombreP: string, apellidoP: string, direccionP: string, telefonoP: string, edadP: number) {
      this.nombre = nombreP;
      this.apellido = apellidoP;
      this.direccion = direccionP;
      this.telefono = telefonoP;
      this.edad = edadP;
    }

    esMayorDeEdad(){
      if (this.edad >= 18) {
        console.log(`${this.nombre} es mayor de edad.`);
      } else {
        console.log(`${this.nombre} es menor de edad.`);
      }
    }
  
   
    abstract mostrarDatosPersonales();
  }