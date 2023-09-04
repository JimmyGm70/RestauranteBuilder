import Carne from "./Carne";
import PlatoFuerte from "./interfaces";

export default class PlatoCarnivoro implements PlatoFuerte{
    //atributos
    carne: Carne
    
    constructor(public guarnicion: [], carne: Carne){
        this.guarnicion = [];
        this.carne = carne;
    }
}

