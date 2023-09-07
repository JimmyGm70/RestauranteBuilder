import Fruta from "../../Model/Fruta";
import JugoCombinado from "../../Model/JugoCombinado";
import { CombinadoBuilder } from "../interfaces";


class MaracuMangoBuilder implements CombinadoBuilder {

  combinado: JugoCombinado;

  constructor() {
    this.combinado = new JugoCombinado("MaracuMango", 7000);
  }

  colocarSabores(): void {
    this.combinado.fruta.push(new Fruta("Maracuya"));
    this.combinado.fruta.push(new Fruta("Mango"));
  }

  getBebida(): JugoCombinado {
    return this.combinado;
  }

}

export default MaracuMangoBuilder;