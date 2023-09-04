import Guarnicion from './Guarnicion'
import Fruta from './Fruta';

export interface Producto{
    precio: number;
}

export interface PlatoFuerte extends Producto{
    //Atributos
    guarnicion: Guarnicion[]
}

export interface Bebida extends Producto{
    nombre: string;
}

export interface BebidaCarbonatada extends Bebida{
    sabor: string;
}

export interface BebidaNatural extends Bebida{
    fruta: Fruta[]
}

