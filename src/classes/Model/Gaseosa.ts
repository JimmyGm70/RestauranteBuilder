import { BebidaCarbonatada } from "./interfaces";

export default class Gaseosa implements BebidaCarbonatada{
    constructor(public sabor: string, public nombre: string, public precio: number){
        this.sabor = sabor;
        this.nombre = nombre;
        this.precio = precio;
    }
}