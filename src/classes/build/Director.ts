import MenuBuilder from "./MenuBuilder";
import { BebidaBuilder, EntradaBuilder, PlatoFuerteBuilder, PostreBuilder } from "./interfaces";

export default class Director {

  menuBuilder: MenuBuilder;

  constructor() {
    this.menuBuilder = new MenuBuilder();
  }

  public prepararMenu(eb: EntradaBuilder, bb: BebidaBuilder, pfb: PlatoFuerteBuilder, pb: PostreBuilder): void {
    this.menuBuilder.colocarEntrada(eb);
    this.menuBuilder.colocarBebida(bb);
    this.menuBuilder.colocarPlatoFuerte(pfb);
    this.menuBuilder.colocarPostre(pb);
  }

}