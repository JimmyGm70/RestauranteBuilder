// Objetivo: Definir las interfaces de los builders

interface EntradaBuilder {
  entrada: Entrada
  colocarCaracteristicas(): void
  getEntrada(): Entrada
}

interface BebidaBuilder {   
  getBebida(): Bebida
} 

interface PlatoFuerteBuilder { 
  colocarFuerte(): void
  colocarGuarniciones(guarniciones: [Guarnicio, Guarnicion]): void
}

interface PostreBuilder {
  postre: Postre
  colocarBase(): void
  colocarAñadidos(adiciones: [Adicion, Adicion]): void
  getPostre(): Postre
}

// ----------------------------------------------------------

interface PlatoCarnivoroBuilder extends PlatoFuerteBuilder {
  platoCarnivoro: PlatoCarnivoro
  colocarCarne(carne: Carne): void
}

interface PlatoVegetarianoBuilder extends PlatoFuerteBuilder {
  platoVegetariano: PlatoVeGetariano
  colorcarFuerteVegetariano(Fuerte: FuerteVegetariano): void
}

// ----------------------------------------------------------

interface GaseosaBuilder extends BebidaBuilder {
  colocarSabor(): void
}

interface JugoBuilder extends BebidaBuilder {
  colocarFruta(fruta: Fruta): void
}

interface CombinadoBuilder extends BebidaBuilder {
  colocarSabores(sabores: [Fruta, Fruta]): void
}

// ----------------------------------------------------------

export type {
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