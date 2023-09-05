import Carne from "../../Model/Carne";
import Guarnicion from "../../Model/Guarnicion";
import PlatoCarnivoro from "../../Model/PlatoCarnivoro";
import { PlatoCarnivoroBuilder } from "../interfaces";

class Plato1CBuilder implements PlatoCarnivoroBuilder {

  platoCarnivoro: PlatoCarnivoro;

  constructor() {
    this.platoCarnivoro = new PlatoCarnivoro(15000);
  }

  colocarCarne(): void {
    this.platoCarnivoro.carne = new Carne("Carne a la Plancha");
  }

  colocarGuarniciones(): void {
    this.platoCarnivoro.guarnicion.push(new Guarnicion("Papas"));
    this.platoCarnivoro.guarnicion.push(new Guarnicion("Ensalada"));
  }

  getPlatoCarnivoro(): PlatoCarnivoro {
    return this.platoCarnivoro;
  }

}

export default Plato1CBuilder;