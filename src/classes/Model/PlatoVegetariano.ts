import FuerteVegetariano from "./FuerteVegetariano";
import Guarnicion from "./Guarnicion";
import {PlatoFuerte} from "./interfaces";

export default class PlatoVegetariano implements PlatoFuerte{

    fuerteVegetariano: FuerteVegetariano | null;
    public guarnicion: Guarnicion[];
    
    constructor(public precio: number){
        this.guarnicion = [];
        this.fuerteVegetariano = null;
        this.precio = precio;
    }
}

