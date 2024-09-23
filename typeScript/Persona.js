"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombreP, apellidoP, direccionP, telefonoP, edadP) {
        this.nombre = nombreP;
        this.apellido = apellidoP;
        this.direccion = direccionP;
        this.telefono = telefonoP;
        this.edad = edadP;
    }
    Persona.prototype.esMayorDeEdad = function () {
        if (this.edad >= 18) {
            console.log("".concat(this.nombre, " es mayor de edad."));
        }
        else {
            console.log("".concat(this.nombre, " es menor de edad."));
        }
    };
    return Persona;
}());
exports.Persona = Persona;
