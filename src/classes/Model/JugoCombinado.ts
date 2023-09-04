import { BebidaNatural } from "./interfaces";

export default class Jugo implements BebidaNatural{
    constructor(public nombre: string, public precio: number, public fruta: []){
        this.nombre = nombre;
        this.precio = precio;
        this.fruta = []
    }
}