import Fruta from "../../Model/Fruta";
import Jugo from "../../Model/Jugo";
import { JugoBuilder } from "../interfaces";

class MangoBuilder implements JugoBuilder {

  jugo: Jugo;

  constructor() {
    this.jugo = new Jugo("Mango", 6000);
  }

  colocarFruta(): void {
    this.jugo.fruta = new Fruta("Mango");
  }

  getBebida(): Jugo {
    return this.jugo;
  }

}

export default MangoBuilder;