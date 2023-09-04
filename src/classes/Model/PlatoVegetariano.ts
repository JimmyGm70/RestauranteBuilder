import FuerteVegetariano from "./FuerteVegetariano";
import {PlatoFuerte} from "./interfaces";

export default class PlatoVegetariano implements PlatoFuerte{
    fuerteVegetariano: FuerteVegetariano
    
    constructor(public guarnicion: [], fuerteVegetariano: FuerteVegetariano, public precio: number){
        this.guarnicion = [];
        this.fuerteVegetariano = fuerteVegetariano;
        this.precio = precio;
    }
}

