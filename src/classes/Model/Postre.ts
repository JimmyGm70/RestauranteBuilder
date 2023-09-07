import { Producto } from "./interfaces";
import Base from './Base'
import Adicion from "./Adicion";

export default class Postre implements Producto {

    base: Base | null;
    adicion: Adicion[];

    constructor(public precio: number){
        this.base = null;
        this.precio = precio
        this.adicion = [];
    }
}