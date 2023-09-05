import FuerteVegetariano from "../../Model/FuerteVegetariano";
import Guarnicion from "../../Model/Guarnicion";
import PlatoVegetariano from "../../Model/PlatoVegetariano";
import { PlatoVegetarianoBuilder } from "../interfaces";

class Plato1VBuilder implements PlatoVegetarianoBuilder {

  platoVegetariano: PlatoVegetariano;

  constructor() {
    this.platoVegetariano = new PlatoVegetariano(12000);
  }

  colorcarFuerteVegetariano(): void {
    this.platoVegetariano.fuerteVegetariano = new FuerteVegetariano("Lasaña de madurito");
  }

  colocarGuarniciones(): void {
    this.platoVegetariano.guarnicion.push(new Guarnicion("Papas"));
    this.platoVegetariano.guarnicion.push(new Guarnicion("Ensalada"));  
  }

  getPlatoVegetariano(): PlatoVegetariano {
    return this.platoVegetariano;
  }

}

export default Plato1VBuilder;