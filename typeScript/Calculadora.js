var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.dividir = function (a, b) {
        return a / b;
    };
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    Calculadora.prototype.factorial = function (n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        var resultado = 1;
        for (var i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
var calculadora = new Calculadora();
console.log("Suma: " + calculadora.sumar(5, 3));
console.log("Resta: " + calculadora.restar(5, 3));
console.log("Multiplicación: " + calculadora.multiplicar(5, 3));
console.log("División: " + calculadora.dividir(5, 3));
console.log("Potencia: " + calculadora.potencia(2, 3));
console.log("Factorial: " + calculadora.factorial(5));
