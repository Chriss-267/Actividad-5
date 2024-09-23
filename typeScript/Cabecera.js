var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina() {
    }
    CabeceraPagina.prototype.propiedades = function (tituloP, colorP, fuenteP) {
        this.titulo = tituloP;
        this.color = colorP;
        this.fuente = fuenteP;
    };
    CabeceraPagina.prototype.Alineacion = function (alineacionP) {
        this.alineacion = alineacionP;
    };
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
        console.log("Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
var cabecera = new CabeceraPagina();
cabecera.propiedades("Mi Página", "Azul", "Arial");
cabecera.Alineacion("Centrado");
cabecera.imprimirPropiedades();
