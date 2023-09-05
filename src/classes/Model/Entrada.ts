import { Producto } from "./interfaces";

export default class Entrada implements Producto {
    nombre: string;

    constructor(nombre: string, public precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }
}