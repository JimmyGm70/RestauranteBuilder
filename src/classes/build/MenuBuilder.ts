import { CombinadoBuilder, EntradaBuilder, JugoBuilder } from "./interfaces";
import { BebidaBuilder } from "./interfaces";
import { PlatoFuerteBuilder, PlatoCarnivoroBuilder, PlatoVegetarianoBuilder } from "./interfaces";
import { PostreBuilder } from "./interfaces";
import Menu from "../Model/Menu";
import Plato1CBuilder from "./PlatosFuertes/Plato1CBuilder";
import Plato2CBuilder from "./PlatosFuertes/Plato2CBuilder";
import Plato3CBuilder from "./PlatosFuertes/Plato3CBuilder";
import Plato4CBuilder from "./PlatosFuertes/Plato4CBuilder";
import Plato1VBuilder from "./PlatosFuertes/Plato1VBuilder";
import Plato2VBuilder from "./PlatosFuertes/Plato2VBuilder";
import Plato3VBuilder from "./PlatosFuertes/Plato3VBuilder";
import CocaColaBuilder from "./Gaseosa/CocaColaBuilder";
import ColombianaBuilder from "./Gaseosa/ColombianaBuilder";
import PepsiBuilder from "./Gaseosa/PepsiBuilder";
import MangoBuilder from "./Jugo/MangoBuilder";
import MaracuyaBuilder from "./Jugo/MaracuyaBuilder";
import MoraBuilder from "./Jugo/MoraBuilder";
import MaraMoraBuilder from "./Combinados/MaraMoraBuilder";
import MaracuMangoBuilder from "./Combinados/MaracuMangoBuilder";
import MoraMangoBuilder from "./Combinados/MoraMangoBuilder";

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
    } else if(this.esGaseosaBuilder(bb)) {
      
    }
    this.menu.bebida = bb.getBebida();
  }
  
  public colocarPlatoFuerte(pfb: PlatoFuerteBuilder): void {

    if(this.esPlatoCarnivoroBuilder(pfb)) {
      (pfb as PlatoCarnivoroBuilder).colocarCarne();
      (pfb as PlatoCarnivoroBuilder).colocarGuarniciones();
      this.menu.platoFuerte = (pfb as PlatoCarnivoroBuilder).getPlatoCarnivoro();
    } else if(this.esPlatoVegetarianoBuilder(pfb)) {
      (pfb as PlatoVegetarianoBuilder).colorcarFuerteVegetariano();
      (pfb as PlatoVegetarianoBuilder).colocarGuarniciones();
      this.menu.platoFuerte = (pfb as PlatoVegetarianoBuilder).getPlatoVegetariano();
    }
  }

  public colocarPostre(pb: PostreBuilder): void {
    pb.colocarBase();
    pb.colocarAñadidos();
    this.menu.postre = pb.getPostre();
  }

  esPlatoCarnivoroBuilder(pfb: PlatoFuerteBuilder): boolean {
    return pfb instanceof Plato1CBuilder || pfb instanceof Plato2CBuilder || pfb instanceof Plato3CBuilder || pfb instanceof Plato4CBuilder;
  }

  esPlatoVegetarianoBuilder(pfb: PlatoFuerteBuilder): boolean {
    return pfb.constructor instanceof Plato1VBuilder || pfb instanceof Plato2VBuilder || pfb instanceof Plato3VBuilder;
  }

  esGaseosaBuilder(bb: BebidaBuilder): boolean {
    return bb instanceof CocaColaBuilder || bb instanceof ColombianaBuilder || bb instanceof PepsiBuilder;
  }

  esJugoBuilder(bb: BebidaBuilder): boolean {
    return bb instanceof MangoBuilder || bb instanceof MaracuyaBuilder || bb instanceof MoraBuilder;
  }

  esCombinadoBuilder(bb: BebidaBuilder): boolean {
    return bb instanceof MaraMoraBuilder || bb instanceof MaracuMangoBuilder || bb instanceof MoraMangoBuilder;
  }

}