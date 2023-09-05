import Adicion from "../../Model/Adicion";
import Base from "../../Model/Base";
import Postre from "../../Model/Postre";
import { PostreBuilder } from "../interfaces";

class Postre2Builder implements PostreBuilder {

  postre: Postre;

  constructor() {
    this.postre = new Postre(7000);
  }

  colocarBase(): void {
    this.postre.base = new Base('Helado');
  }

  colocarAñadidos(): void {
    this.postre.adicion.push(new Adicion('Galleta'));
    this.postre.adicion.push(new Adicion('Chispas de Chocolate'));
  }

  getPostre(): Postre {
    return this.postre;
  }

}

export default Postre2Builder;