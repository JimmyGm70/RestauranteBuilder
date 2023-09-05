import Gaseosa from "../../Model/Gaseosa";
import { GaseosaBuilder } from "../interfaces";

class CocaColaBuilder implements GaseosaBuilder {

  gaseosa: Gaseosa;

  constructor() {
    this.gaseosa = new Gaseosa("Coca Cola", 4000);
  }

  getBebida(): Gaseosa {
    return this.gaseosa;
  }

}

export default CocaColaBuilder;