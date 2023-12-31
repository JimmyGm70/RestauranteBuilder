import Entrada from "../../Model/Entrada";
import { EntradaBuilder } from "../interfaces";

class ArepitaBuilder implements EntradaBuilder {

  entrada: Entrada;

  constructor() {
    this.entrada = new Entrada("Arepitas", 5000);
  }
  
  getEntrada(): Entrada {
    return this.entrada;
  }

}

export default ArepitaBuilder;