import { useState } from 'react'
import ListaSeleccion from './components/ListaSeleccion'
import Director from './classes/build/Director'
import { EntradaBuilder, PostreBuilder, PlatoFuerteBuilder, BebidaBuilder } from './classes/build/interfaces'
import { 
  handleSeleccionEntrada, 
  handleSeleccionBebida,
  handleSeleccionPlatoFuerte,
  handleSeleccionPostre
} from './components/helpers'

/**
 * Tabla y resumen en tiempo real - Jimmy comida de estadio
 * Landing Page y Formulario de Menú - Pablo Bichote 
 */

const entradas = [
  { id: 1, name: 'Salchipapa', unavailable: false },
  { id: 2, name: 'Chicharron', unavailable: false },
  { id: 3, name: 'Arepitas fritas', unavailable: false },
]

const platosPrincipales = [
  { id: 1, name: 'Carne a la plancha', unavailable: false },
  { id: 2, name: 'Pollo asado', unavailable: false },
  { id: 3, name: 'Pescado', unavailable: false },
  { id: 4, name: 'Mariscos', unavailable: false },
  { id: 5, name: 'Albondigas de lentejas', unavailable: false },
  { id: 6, name: 'Lasaña de maduritos', unavailable: false },
  { id: 7, name: 'Sopa de tomate', unavailable: false },
]

const postres = [
  { id: 1, name: 'Avalancha de Oreo', unavailable: false },
  { id: 2, name: 'Manjar de chocolate', unavailable: false },
  { id: 3, name: 'Brownie de chocolate', unavailable: false },
  { id: 4, name: 'Brownie de oreo', unavailable: false },
]

const bebidas = [
  { id: 1, name: 'CocaCola', unavailable: false },
  { id: 2, name: 'Pepsi', unavailable: false },
  { id: 3, name: 'Colombiana', unavailable: false },
  { id: 4, name: 'Jugo de mango', unavailable: false },
  { id: 5, name: 'Jugo de mora', unavailable: false },
  { id: 6, name: 'Jugo de maracuya', unavailable: false },
  { id: 7, name: 'Combinado de moramango', unavailable: false },
  { id: 8, name: 'Combinado de maramora', unavailable: false },
  { id: 9, name: 'Combinado de maracumango', unavailable: false },
]

function App() {

  const ACME_IMAGE = 'src/sources/acme.jpeg'
  const director = new Director();
  const menusCreados = [];

  let eb: EntradaBuilder;
  let pfb: PlatoFuerteBuilder;
  let pb: PostreBuilder;
  let bb: BebidaBuilder;

  const [cantidadMenus, setCantidadMenus] = useState(menusCreados.length);

  const handleCrearMenu = () => {
    const menu = director.prepararMenu(eb, bb, pfb, pb);
    menusCreados.push(menu);
    setCantidadMenus(menusCreados.length);
  }

  return (
    <>
      <section 
        className='bg-cover w-full h-screen'
        style={{
          backgroundImage: `url(${ACME_IMAGE})`
        }}>
      </section>

      <section className='h-screen grid grid-cols-2'>

        <section className='mx-auto my-auto w-[75%]'>
          
          <ListaSeleccion 
            listado={entradas} 
            onChangeFunction={handleSeleccionEntrada}
            builder={eb}
            titulo='Entrada'>
          </ListaSeleccion>

          <ListaSeleccion
            listado={platosPrincipales}
            onChangeFunction={handleSeleccionPlatoFuerte}
            builder={pfb}
            titulo='Plato Fuerte'>
          </ListaSeleccion>

          <ListaSeleccion
            listado={postres}
            onChangeFunction={handleSeleccionPostre}
            builder={pb}
            titulo='Postre'>
          </ListaSeleccion>

          <ListaSeleccion
            listado={bebidas}
            onChangeFunction={handleSeleccionBebida}
            builder={bb}
            titulo='Bebida'>
          </ListaSeleccion>

          <button className='w-full bg-[#F2EAD3] py-1.5 mt-[10%] shadow-md rounded-lg hover:transition-all hover:cursor-pointer hover:shadow-xl'
          onClick={handleCrearMenu}>
            Terminar menú!
          </button>

        </section>

      </section>

    </>
  )
}

export default App
