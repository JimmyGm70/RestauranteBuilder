import Carne from "../../Model/Carne";
import Guarnicion from "../../Model/Guarnicion";
import PlatoCarnivoro from "../../Model/PlatoCarnivoro";
import { PlatoCarnivoroBuilder } from "../interfaces";

class Plato2CBuilder implements PlatoCarnivoroBuilder {

  platoCarnivoro: PlatoCarnivoro;

  constructor() {
    this.platoCarnivoro = new PlatoCarnivoro(11000);
  }

  colocarCarne(): void {
    this.platoCarnivoro.carne = new Carne("Pollo Asado");
  }

  colocarGuarniciones(): void {
    this.platoCarnivoro.guarnicion.push(new Guarnicion("Arepitas"));
    this.platoCarnivoro.guarnicion.push(new Guarnicion("Papas"));
  }

  getPlatoCarnivoro(): PlatoCarnivoro {
    return this.platoCarnivoro;
  }

}

export default Plato2CBuilder;