class Cuenta {

    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: string;
  

    constructor(nombreP: string, cantidadP: number, tipoCuentaP: string, numeroCuentaP: string) {
      this.nombre = nombreP;
      this.cantidad = cantidadP;
      this.tipoCuenta = tipoCuentaP;
      this.numeroCuenta = numeroCuentaP;
    }
  
    depositar(): void {
      if (this.cantidad < 5) {
        console.log("El valor a depositar debe ser mayor a $5.00.");
      } else {
        console.log(`Se ha depositado correctamente. Cantidad depositada: $${this.cantidad}`);
      }
    }
  
    
    retirar(valor: number): void {
      if (valor > this.cantidad) {
        console.log("No hay suficiente saldo en la cuenta.");
      } else if (valor < 5) {
        console.log("No se pueden retirar cantidades menores a $5.00.");
      } else {
        this.cantidad -= valor;
        console.log(`Has retirado: $${valor}. Saldo restante: $${this.cantidad}.`);
      }
    }
  
    
    mostrarDatos(): void {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
      console.log(`Número de cuenta: ${this.numeroCuenta}`);
    }
  }
  
  
  const cuenta = new Cuenta("Ian Portillo", 100, "Ahorros", "44332434");
  cuenta.mostrarDatos();          
  cuenta.depositar();             
  cuenta.retirar(50);             
  cuenta.retirar(3);              
  cuenta.retirar(200);            
  