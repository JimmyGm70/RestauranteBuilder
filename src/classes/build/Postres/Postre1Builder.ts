import Adicion from "../../Model/Adicion";
import Base from "../../Model/Base";
import Postre from "../../Model/Postre";
import { PostreBuilder } from "../interfaces";

class Postre1Builder implements PostreBuilder {

  postre: Postre;

  constructor() {
    this.postre = new Postre(6000);
  }

  colocarBase(): void {
    this.postre.base = new Base('Helado');
  }

  colocarAñadidos(): void {
    this.postre.adicion.push(new Adicion('Oreo'));
    this.postre.adicion.push(new Adicion('Galleta'));
  }

  getPostre(): Postre {
    return this.postre;
  }

}

export default Postre1Builder;