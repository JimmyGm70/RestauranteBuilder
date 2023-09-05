import Fruta from "../../Model/Fruta";
import JugoCombinado from "../../Model/JugoCombinado";
import { CombinadoBuilder } from "../interfaces";


class MoraMangoBuilder implements CombinadoBuilder {

  combinado: JugoCombinado;

  constructor() {
    this.combinado = new JugoCombinado("MoraMango", 7500);
  }

  colocarSabores(): void {
    this.combinado.fruta.push(new Fruta("Mora"));
    this.combinado.fruta.push(new Fruta("Mango"));
  }

  getBebida(): JugoCombinado {
    return this.combinado;
  }

}

export default MoraMangoBuilder;