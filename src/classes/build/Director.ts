import Menu from "../Model/Menu";
import MenuBuilder from "./MenuBuilder";
import { BebidaBuilder, EntradaBuilder, PlatoFuerteBuilder, PostreBuilder } from "./interfaces";

export default class Director {

  menuBuilder: MenuBuilder;
  eb: EntradaBuilder | null;
  bb: BebidaBuilder | null;
  pfb: PlatoFuerteBuilder | null;
  pb: PostreBuilder | null;

  constructor() {
    this.menuBuilder = new MenuBuilder();
    this.eb = null;
    this.bb = null;
    this.pfb = null;
    this.pb = null;
  }

  public prepararMenu(): void {
    this.menuBuilder.colocarEntrada(this.eb as EntradaBuilder);
    this.menuBuilder.colocarBebida(this.bb as BebidaBuilder);
    this.menuBuilder.colocarPlatoFuerte(this.pfb as PlatoFuerteBuilder);
    this.menuBuilder.colocarPostre(this.pb as PostreBuilder);
  }

  public getResultado(): Menu {
    return this.menuBuilder.menu;
  }

}