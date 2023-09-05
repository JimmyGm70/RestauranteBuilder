import Fruta from "../../Model/Fruta";
import Jugo from "../../Model/Jugo";
import { JugoBuilder } from "../interfaces";

class MoraBuilder implements JugoBuilder {

  jugo: Jugo;

  constructor() {
    this.jugo = new Jugo("Mora", 6000);
  }

  colocarFruta(): void {
    this.jugo.fruta = new Fruta("Mora");
  }

  getBebida(): Jugo {
    return this.jugo;
  }

}

export default MoraBuilder;