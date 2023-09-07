import Carne from "../../Model/Carne";
import Guarnicion from "../../Model/Guarnicion";
import PlatoCarnivoro from "../../Model/PlatoCarnivoro";
import { PlatoCarnivoroBuilder } from "../interfaces";

class Plato4CBuilder implements PlatoCarnivoroBuilder {

  platoCarnivoro: PlatoCarnivoro;

  constructor() {
    this.platoCarnivoro = new PlatoCarnivoro(12000);
  }

  colocarCarne(): void {
    this.platoCarnivoro.carne = new Carne("Mariscos");
  }

  colocarGuarniciones(): void {
    this.platoCarnivoro.guarnicion.push(new Guarnicion("Ensalada"));
    this.platoCarnivoro.guarnicion.push(new Guarnicion("Arepitas"));
  }

  getPlatoCarnivoro(): PlatoCarnivoro {
    return this.platoCarnivoro;
  }

}

export default Plato4CBuilder;