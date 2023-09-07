import {PlatoFuerte, Bebida} from "./interfaces";
import Entrada from './Entrada'
import Postre from './Postre'

export default class Menu{
    bebida: Bebida | null;
    entrada: Entrada | null;
    platoFuerte: PlatoFuerte | null;
    postre: Postre | null;

    constructor() {
        this.bebida = null;
        this.entrada = null;
        this.platoFuerte = null;
        this.postre = null;
    }

    //Métodos

    calcularCosto(): number {
        let valorMenu = 0;

        if (this.bebida) valorMenu += this.bebida.precio;
        if (this.entrada) valorMenu += this.entrada.precio;
        if (this.platoFuerte) valorMenu += this.platoFuerte.precio;
        if (this.postre) valorMenu += this.postre.precio;

        return valorMenu;
    }
}