import { CombinadoBuilder, EntradaBuilder, JugoBuilder } from "./interfaces";
import { BebidaBuilder } from "./interfaces";
import { PlatoFuerteBuilder, PlatoCarnivoroBuilder, PlatoVegetarianoBuilder } from "./interfaces";
import { PostreBuilder } from "./interfaces";
import Menu from "../Model/Menu";

export default class MenuBuilder {

  menu: Menu

  constructor() {
    this.menu = new Menu();
  }

  public colocarEntrada(eb: EntradaBuilder): void {
    this.menu.entrada = eb.getEntrada();
  }

  public colocarBebida(bb: BebidaBuilder): void {
    if(this.esJugoBuilder(bb)) {
      (bb as JugoBuilder).colocarFruta();
    } else if(this.esCombinadoBuilder(bb)) {
      (bb as CombinadoBuilder).colocarSabores();
    }
    this.menu.bebida = bb.getBebida();
  }
  
  public colocarPlatoFuerte(pfb: PlatoFuerteBuilder): void {

    if(this.esPlatoCarnivoroBuilder(pfb)) {
      (pfb as PlatoCarnivoroBuilder).colocarCarne();
    } else if(this.esPlatoVegetarianoBuilder(pfb)) {
      (pfb as PlatoVegetarianoBuilder).colorcarFuerteVegetariano();
    }
    pfb.colocarGuarniciones();
    
  }

  public colocarPostre(pb: PostreBuilder): void {
    pb.colocarBase();
    pb.colocarAñadidos();
    this.menu.postre = pb.getPostre();
  }

  esPlatoCarnivoroBuilder(pfb: PlatoFuerteBuilder): boolean {
    return pfb.constructor.name === 'PlatoCarnivoroBuilder';
  }

  esPlatoVegetarianoBuilder(pfb: PlatoFuerteBuilder): boolean {
    return pfb.constructor.name === 'PlatoVegetarianoBuilder';
  }

  esGaseosaBuilder(bb: BebidaBuilder): boolean {
    return bb.constructor.name === 'GaseosaBuilder';
  }

  esJugoBuilder(bb: BebidaBuilder): boolean {
    return bb.constructor.name === 'JugoBuilder';
  }

  esCombinadoBuilder(bb: BebidaBuilder): boolean {
    return bb.constructor.name === 'CombinadoBuilder';
  }

}