import Fruta from "../../Model/Fruta";
import JugoCombinado from "../../Model/JugoCombinado";
import { CombinadoBuilder } from "../interfaces";


class MaraMoraBuilder implements CombinadoBuilder {

  combinado: JugoCombinado;

  constructor() {
    this.combinado = new JugoCombinado("MaraMora", 6500);
  }

  colocarSabores(): void {
    this.combinado.fruta.push(new Fruta("Maracuya"));
    this.combinado.fruta.push(new Fruta("Mora"));
  }

  getBebida(): JugoCombinado {
    return this.combinado;
  }

}

export default MaraMoraBuilder;