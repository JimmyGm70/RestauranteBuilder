import { Producto } from "./interfaces";
import Base from './Base'
import Adicion from "./Adicion";

export default class Postre implements Producto{
    base: Base;
    adicion: Adicion[];

    constructor(base: Base, public precio: number){
        this.base = base;
        this.precio = precio
        this.adicion = [];
    }
}