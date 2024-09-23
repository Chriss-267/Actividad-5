var Cancion = /** @class */ (function () {
    function Cancion(tituloP, generoP) {
        this.titulo = tituloP;
        this.genero = generoP;
    }
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Cancion.prototype.mostrarCancion = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", G\u00E9nero: ").concat(this.genero, ", Autor: ").concat(this.autor));
    };
    return Cancion;
}());
var cancion = new Cancion("Loafers", "Pop");
cancion.setAutor("BoyWithUke");
cancion.mostrarCancion();
