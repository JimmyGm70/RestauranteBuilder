import FuerteVegetariano from "../../Model/FuerteVegetariano";
import Guarnicion from "../../Model/Guarnicion";
import PlatoVegetariano from "../../Model/PlatoVegetariano";
import { PlatoVegetarianoBuilder } from "../interfaces";

class Plato1VBuilder implements PlatoVegetarianoBuilder {

  platoVegetariano: PlatoVegetariano;

  constructor() {
    this.platoVegetariano = new PlatoVegetariano(8500);
  }

  colorcarFuerteVegetariano(): void {
    this.platoVegetariano.fuerteVegetariano = new FuerteVegetariano("Sopa de tomate");
  }

  colocarGuarniciones(): void {
    this.platoVegetariano.guarnicion.push(new Guarnicion("Ensalada"));  
    this.platoVegetariano.guarnicion.push(new Guarnicion("Papas"));
  }

  getPlatoVegetariano(): PlatoVegetariano {
    return this.platoVegetariano;
  }

}

export default Plato1VBuilder;