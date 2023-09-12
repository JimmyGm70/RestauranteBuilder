import Entrada from "../Model/Entrada"
import { Bebida } from "../Model/interfaces"
import Postre from "../Model/Postre"
import PlatoCarnivoro from "../Model/PlatoCarnivoro"
import PlatoVegetariano from "../Model/PlatoVegetariano"
import JugoCombinado from "../Model/JugoCombinado"
import Gaseosa from "../Model/Gaseosa"
import Jugo from "../Model/Jugo"

// Objetivo: Definir las interfaces de los builders

export interface GeneralBuilder {

}

export interface EntradaBuilder extends GeneralBuilder {
  entrada: Entrada
  getEntrada(): Entrada
}

export interface BebidaBuilder extends GeneralBuilder {   
  getBebida(): Bebida
} 

export interface PostreBuilder extends GeneralBuilder {
  postre: Postre
  colocarBase(): void
  colocarAñadidos(): void
  getPostre(): Postre
}

export interface PlatoFuerteBuilder extends GeneralBuilder { 
  colocarGuarniciones(): void
}


// ----------------------------------------------------------

export interface PlatoCarnivoroBuilder extends PlatoFuerteBuilder {
  platoCarnivoro: PlatoCarnivoro
  colocarCarne(): void
  getPlatoCarnivoro(): PlatoCarnivoro
}

export interface PlatoVegetarianoBuilder extends PlatoFuerteBuilder {
  platoVegetariano: PlatoVegetariano
  colorcarFuerteVegetariano(): void
  getPlatoVegetariano(): PlatoVegetariano
}

// ----------------------------------------------------------

export interface GaseosaBuilder extends BebidaBuilder {
  gaseosa: Gaseosa
}

export interface JugoBuilder extends BebidaBuilder {
  jugo: Jugo
  colocarFruta(): void
}

export interface CombinadoBuilder extends BebidaBuilder {
  combinado: JugoCombinado
  colocarSabores(): void
}
// ----------------------------------------------------------
