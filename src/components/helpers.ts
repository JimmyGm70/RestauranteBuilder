import { PlatoFuerteBuilder, BebidaBuilder } from '../classes/build/interfaces'
import SalchipapaBuilder from "../classes/build/Entradas/SalchipapaBuilder"
import ChicharronBuilder from '../classes/build/Entradas/ChicharronesBuilder';
import ArepitaBuilder from '../classes/build/Entradas/ArepitasBuilder';
import Postre1Builder from '../classes/build/Postres/Postre1Builder';
import Postre2Builder from '../classes/build/Postres/Postre2Builder';
import Postre3Builder from '../classes/build/Postres/Postre3Builder';
import Postre4Builder from '../classes/build/Postres/Postre4Builder';
import CocaColaBuilder from '../classes/build/Gaseosa/CocaColaBuilder';
import PepsiBuilder from '../classes/build/Gaseosa/PepsiBuilder';
import ColombianaBuilder from '../classes/build/Gaseosa/ColombianaBuilder';
import MangoBuilder from '../classes/build/Jugo/MangoBuilder';
import MoraBuilder from '../classes/build/Jugo/MoraBuilder';
import MaracuyaBuilder from '../classes/build/Jugo/MaracuyaBuilder';
import MoraMangoBuilder from '../classes/build/Combinados/MoraMangoBuilder';
import MaraMoraBuilder from '../classes/build/Combinados/MaraMoraBuilder';
import MaracuMangoBuilder from '../classes/build/Combinados/MaracuMangoBuilder';
import Plato1CBuilder from '../classes/build/PlatosFuertes/Plato1CBuilder';
import Plato2CBuilder from '../classes/build/PlatosFuertes/Plato2CBuilder';
import Plato3CBuilder from '../classes/build/PlatosFuertes/Plato3CBuilder';
import Plato4CBuilder from '../classes/build/PlatosFuertes/Plato4CBuilder';
import Plato1VBuilder from '../classes/build/PlatosFuertes/Plato1VBuilder';
import Plato2VBuilder from '../classes/build/PlatosFuertes/Plato2VBuilder';
import Plato3VBuilder from '../classes/build/PlatosFuertes/Plato3VBuilder';

export const handleSeleccionEntrada = (entrada: { id: number, name: string, unavailable: boolean }) => {
  let eb = new SalchipapaBuilder();
  if(entrada.id === 1) eb = new SalchipapaBuilder();
  else if(entrada.id === 2) eb = new ChicharronBuilder();
  else if(entrada.id === 3) eb = new ArepitaBuilder();
  else {
    return null;
  }
  return eb;
}

export const handleSeleccionBebida = (bebida: { id: number, name: string, unavailable: boolean }) => {
  let bb: BebidaBuilder;
  if(bebida.id === 1) bb = new CocaColaBuilder();
  else if(bebida.id === 2) bb = new PepsiBuilder();
  else if(bebida.id === 3) bb = new ColombianaBuilder();
  else if(bebida.id === 4) bb = new MangoBuilder();
  else if(bebida.id === 5) bb = new MoraBuilder();
  else if(bebida.id === 6) bb = new MaracuyaBuilder();
  else if(bebida.id === 7) bb = new MoraMangoBuilder();
  else if(bebida.id === 8) bb = new MaraMoraBuilder();
  else if(bebida.id === 9) bb = new MaracuMangoBuilder();
  else {
    return null;
  }
  return bb;  
}

export const handleSeleccionPlatoFuerte = (platoFuerte: { id: number, name: string, unavailable: boolean }) => {
  let pfb: PlatoFuerteBuilder;
  if(platoFuerte.id === 1) pfb = new Plato1CBuilder();
  else if(platoFuerte.id === 2) pfb = new Plato2CBuilder();
  else if(platoFuerte.id === 3) pfb = new Plato3CBuilder();
  else if(platoFuerte.id === 4) pfb = new Plato4CBuilder();
  else if(platoFuerte.id === 5) pfb = new Plato1VBuilder();
  else if(platoFuerte.id === 6) pfb = new Plato2VBuilder();
  else if(platoFuerte.id === 7) pfb = new Plato3VBuilder();
  else {
    return null;
  }
  return pfb;
}

export const handleSeleccionPostre = (postre: { id: number, name: string, unavailable: boolean }) => {
  console.log(postre)
  let pb = new Postre1Builder();
  if(postre.id === 1) pb = new Postre1Builder();
  if(postre.id === 2) pb = new Postre2Builder();
  if(postre.id === 3) pb = new Postre3Builder();
  if(postre.id === 4) pb = new Postre4Builder();
  return pb;
}