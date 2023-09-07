import Fruta from "../../Model/Fruta";
import Jugo from "../../Model/Jugo";
import { JugoBuilder } from "../interfaces";

class MaracuyaBuilder implements JugoBuilder {

  jugo: Jugo;

  constructor() {
    this.jugo = new Jugo("Maracuya", 6000);
  }

  colocarFruta(): void {
    this.jugo.fruta = new Fruta("Maracuya");
  }

  getBebida(): Jugo {
    return this.jugo;
  }

}

export default MaracuyaBuilder;