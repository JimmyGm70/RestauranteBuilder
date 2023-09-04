import {PlatoFuerte, Bebida} from "./interfaces";
import Entrada from './Entrada'
import Postre from './Postre'

export default class Menu{
    bebida: Bebida;
    entrada: Entrada;
    platoFuerte: PlatoFuerte;
    postre: Postre;

    constructor(bebida: Bebida, entrada: Entrada, platoFuerte: PlatoFuerte, postre: Postre){
        this.bebida = bebida;
        this.entrada = entrada;
        this.platoFuerte = platoFuerte;
        this.postre = postre;
    }

    //Métodos

    calcularCosto(): number {
        return (this.bebida.precio+this.entrada.precio+this.platoFuerte.precio+this.postre.precio)
    };
}