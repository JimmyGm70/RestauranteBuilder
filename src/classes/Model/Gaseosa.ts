import { BebidaCarbonatada } from "./interfaces";

export default class Gaseosa implements BebidaCarbonatada {

    constructor(public nombre: string, public precio: number){
        this.nombre = nombre;
        this.precio = precio;
    }
    
}