import Adicion from "../../Model/Adicion";
import Base from "../../Model/Base";
import Postre from "../../Model/Postre";
import { PostreBuilder } from "../interfaces";

class Postre4Builder implements PostreBuilder {

  postre: Postre;

  constructor() {
    this.postre = new Postre(5500);
  }

  colocarBase(): void {
    this.postre.base = new Base('Brownie');
  }

  colocarAñadidos(): void {
    this.postre.adicion.push(new Adicion('Galleta'));
    this.postre.adicion.push(new Adicion('Oreo'));
  }

  getPostre(): Postre {
    return this.postre;
  }

}

export default Postre4Builder;