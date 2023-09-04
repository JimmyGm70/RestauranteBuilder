import MenuBuilder from "./MenuBuilder";

export default class Director {

  menuBuilder: MenuBuilder;

  constructor() {
    this.menuBuilder = new MenuBuilder();
  }

  public prepararMenu(): void {
    this.menuBuilder.colocarEntrada();
    this.menuBuilder.colocarBebida();
    this.menuBuilder.colocarPlatoFuerte();
    this.menuBuilder.colocarPostre();
  }

}