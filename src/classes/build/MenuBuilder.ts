import { EntradaBuilder } from "./interfaces";
import { BebidaBuilder } from "./interfaces";
import { PlatoFuerteBuilder } from "./interfaces";
import { PostreBuilder } from "./interfaces";

export default class MenuBuilder {

  menu: Menu

  constructor() {
    this.menu = new Menu()
  }

  public colocarEntrada(eb: EntradaBuilder): void {

  }

  public colocarBebida(bb: BebidaBuilder): void {

  }
  
  public colocarPlatoFuerte(pfb: PlatoFuerteBuilder): void {

  }

  public colocarPostre(pb: PostreBuilder): void {

  }

}