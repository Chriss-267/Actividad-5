class Cancion{
     titulo:string;
     genero:string;
     private autor:string;

     constructor(tituloP:string, generoP:string){
        this.titulo = tituloP;
        this.genero = generoP;
     }

     public getAutor(): string {
        return this.autor;
      }
    
      public setAutor(autor: string) {
        this.autor = autor;
      }
      public mostrarCancion(){
        console.log(`Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.autor}`);
      }

}

const cancion = new Cancion("Loafers", "Pop");
cancion.setAutor("BoyWithUke");
cancion.mostrarCancion();