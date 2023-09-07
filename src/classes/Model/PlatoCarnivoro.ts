import Carne from "./Carne";
import Guarnicion from "./Guarnicion";
import { PlatoFuerte } from "./interfaces";

export default class PlatoCarnivoro implements PlatoFuerte{
    //atributos
    carne: Carne | null;
    guarnicion: Guarnicion[]

    constructor(public precio: number){
        this.guarnicion = [];
        this.carne = null;
    }
}

