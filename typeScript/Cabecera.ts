class CabeceraPagina{
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;


    propiedades(tituloP:string, colorP:string, fuenteP:string){
        this.titulo = tituloP;
        this.color = colorP;
        this.fuente = fuenteP;
    }

    Alineacion(alineacionP: string){
        this.alineacion = alineacionP;
    }

    imprimirPropiedades() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }
}

const cabecera = new CabeceraPagina();
cabecera.propiedades("Mi Página", "Azul", "Arial");
cabecera.Alineacion("Centrado");
cabecera.imprimirPropiedades();