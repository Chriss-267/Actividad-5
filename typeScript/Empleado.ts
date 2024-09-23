import { Persona } from "./Persona";

class Empleado extends Persona {
    sueldo: number;
  
    constructor(nombreP: string, apellidoP: string, direccionP: string, telefonoP: string, edadP: number, sueldoP: number) {
      super(nombreP, apellidoP, direccionP, telefonoP, edadP);
      this.sueldo = sueldoP;
    }
  
    
    cargarSueldo(sueldo: number){
      this.sueldo = sueldo;
    }
  
    imprimirSueldo(){
      console.log(`Sueldo: $${this.sueldo}`);
    }
  

    mostrarDatosPersonales(): void {
      console.log(`Nombre: ${this.nombre} ${this.apellido}`);
      console.log(`Dirección: ${this.direccion}`);
      console.log(`Teléfono: ${this.telefono}`);
      console.log(`Edad: ${this.edad}`);
      this.esMayorDeEdad();
    }
  }
  

  const empleado = new Empleado("Chris", "Monterrosa", "mi casa", "25252525", 19, 200);
  empleado.mostrarDatosPersonales(); 
  empleado.imprimirSueldo();