import Entrada from "../Model/Entrada"
import { Bebida } from "../Model/interfaces"
import Postre from "../Model/Postre"
import PlatoCarnivoro from "../Model/PlatoCarnivoro"
import PlatoVegetariano from "../Model/PlatoVegetariano"
import JugoCombinado from "../Model/JugoCombinado"
import Gaseosa from "../Model/Gaseosa"
import Jugo from "../Model/Jugo"

// Objetivo: Definir las interfaces de los builders

interface GeneralBuilder {

}

interface EntradaBuilder extends GeneralBuilder {
  entrada: Entrada
  getEntrada(): Entrada
}

interface BebidaBuilder extends GeneralBuilder {   
  getBebida(): Bebida
} 

interface PostreBuilder extends GeneralBuilder {
  postre: Postre
  colocarBase(): void
  colocarAñadidos(): void
  getPostre(): Postre
}

interface PlatoFuerteBuilder extends GeneralBuilder { 
  colocarGuarniciones(): void
}


// ----------------------------------------------------------

interface PlatoCarnivoroBuilder extends PlatoFuerteBuilder {
  platoCarnivoro: PlatoCarnivoro
  colocarCarne(): void
  getPlatoCarnivoro(): PlatoCarnivoro
}

interface PlatoVegetarianoBuilder extends PlatoFuerteBuilder {
  platoVegetariano: PlatoVegetariano
  colorcarFuerteVegetariano(): void
  getPlatoVegetariano(): PlatoVegetariano
}

// ----------------------------------------------------------

interface GaseosaBuilder extends BebidaBuilder {
  gaseosa: Gaseosa
}

interface JugoBuilder extends BebidaBuilder {
  jugo: Jugo
  colocarFruta(): void
}

interface CombinadoBuilder extends BebidaBuilder {
  combinado: JugoCombinado
  colocarSabores(): void
}

// ----------------------------------------------------------

export type {
  GeneralBuilder,
  EntradaBuilder,
  BebidaBuilder,
  PlatoFuerteBuilder,
  PostreBuilder,
  PlatoCarnivoroBuilder,
  PlatoVegetarianoBuilder,
  GaseosaBuilder,
  JugoBuilder,
  CombinadoBuilder
}