import Fruta from "./Fruta";
import { BebidaNatural } from "./interfaces";

export default class Jugo implements BebidaNatural{

    fruta: Fruta | null;

    constructor(public nombre: string, public precio: number){
        this.nombre = nombre;
        this.precio = precio;
        this.fruta = null;
    }
}