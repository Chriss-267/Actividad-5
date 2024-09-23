var Cuenta = /** @class */ (function () {
    function Cuenta(nombreP, cantidadP, tipoCuentaP, numeroCuentaP) {
        this.nombre = nombreP;
        this.cantidad = cantidadP;
        this.tipoCuenta = tipoCuentaP;
        this.numeroCuenta = numeroCuentaP;
    }
    Cuenta.prototype.depositar = function () {
        if (this.cantidad < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00.");
        }
        else {
            console.log("Se ha depositado correctamente. Cantidad depositada: $".concat(this.cantidad));
        }
    };
    Cuenta.prototype.retirar = function (valor) {
        if (valor > this.cantidad) {
            console.log("No hay suficiente saldo en la cuenta.");
        }
        else if (valor < 5) {
            console.log("No se pueden retirar cantidades menores a $5.00.");
        }
        else {
            this.cantidad -= valor;
            console.log("Has retirado: $".concat(valor, ". Saldo restante: $").concat(this.cantidad, "."));
        }
    };
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Tipo de cuenta: ".concat(this.tipoCuenta));
        console.log("N\u00FAmero de cuenta: ".concat(this.numeroCuenta));
    };
    return Cuenta;
}());
var cuenta = new Cuenta("Ian Portillo", 100, "Ahorros", "44332434");
cuenta.mostrarDatos();
cuenta.depositar();
cuenta.retirar(50);
cuenta.retirar(3);
cuenta.retirar(200);
