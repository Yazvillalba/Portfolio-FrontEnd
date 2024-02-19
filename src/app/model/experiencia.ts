export class Experiencia {
    id? : number;
    nombreE : string; 
    descripcionE : string;
    imagen: string;
    constructor(nombreE: string, descripcionE: string,  imagen: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imagen = imagen;
    }
}
