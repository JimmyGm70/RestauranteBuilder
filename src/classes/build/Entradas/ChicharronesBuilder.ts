import Entrada from "../../Model/Entrada";
import { EntradaBuilder } from "../interfaces";

class ChicharronBuilder implements EntradaBuilder {

  entrada: Entrada;

  constructor() {
    this.entrada = new Entrada("Chicharrones", 8000);
  }

  getEntrada(): Entrada {
    return this.entrada;
  }

}

export default ChicharronBuilder;