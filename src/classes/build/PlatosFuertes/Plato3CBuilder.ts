import Carne from "../../Model/Carne";
import Guarnicion from "../../Model/Guarnicion";
import PlatoCarnivoro from "../../Model/PlatoCarnivoro";
import { PlatoCarnivoroBuilder } from "../interfaces";

class Plato3CBuilder implements PlatoCarnivoroBuilder {

  platoCarnivoro: PlatoCarnivoro;

  constructor() {
    this.platoCarnivoro = new PlatoCarnivoro(10000);
  }

  colocarCarne(): void {
    this.platoCarnivoro.carne = new Carne("Pescado");
  }

  colocarGuarniciones(): void {
    this.platoCarnivoro.guarnicion.push(new Guarnicion("Papas"));
    this.platoCarnivoro.guarnicion.push(new Guarnicion("Ensalada"));
  }

  getPlatoCarnivoro(): PlatoCarnivoro {
    return this.platoCarnivoro;
  }

}

export default Plato3CBuilder;