import Entrada from "../../Model/Entrada";
import { EntradaBuilder } from "../interfaces";

class  SalchipapaBuilder implements EntradaBuilder {

  entrada: Entrada;

  constructor() {
    this.entrada = new Entrada("Salchipapa", 7000);
  }

  getEntrada(): Entrada {
    return this.entrada;
  }

}

export default SalchipapaBuilder;