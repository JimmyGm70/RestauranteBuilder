import Adicion from "../../Model/Adicion";
import Base from "../../Model/Base";
import Postre from "../../Model/Postre";
import { PostreBuilder } from "../interfaces";

class Postre3Builder implements PostreBuilder {

  postre: Postre;

  constructor() {
    this.postre = new Postre(3000);
  }

  colocarBase(): void {
    this.postre.base = new Base('Brownie');
  }

  colocarAñadidos(): void {
    this.postre.adicion.push(new Adicion('Chispas de Chocolate'));
  }

  getPostre(): Postre {
    return this.postre;
  }

}

export default Postre3Builder;