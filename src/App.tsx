import { useState, Fragment, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react'
import Director from './classes/build/Director'
import Menu from './classes/Model/Menu'
import CheckIcon from '@mui/icons-material/Check'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { handleSeleccionBebida, handleSeleccionEntrada, handleSeleccionPlatoFuerte, handleSeleccionPostre } from './components/helpers';

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
const menusCreados: Menu[] = [];
const director = new Director();

function App() {

  const ACME_IMAGE = 'src/sources/acme.jpeg'

  const [entradaSeleccionada, setEntradaSeleccionada] = useState(entradas[0]);
  const [platoFuerteSeleccionado, setPlatoFuerteSeleccionado] = useState(platosPrincipales[0]);
  const [postreSeleccionado, setPostreSeleccionado] = useState(postres[0]);
  const [bebidaSeleccionada, setBebidaSeleccionada] = useState(bebidas[0]);

  useEffect(() => {
    director.eb = handleSeleccionEntrada(entradaSeleccionada);
  }, [entradaSeleccionada])

  useEffect(() => {
    director.pb = handleSeleccionPostre(postreSeleccionado);
  }, [postreSeleccionado])

  useEffect(() => {
    director.pfb = handleSeleccionPlatoFuerte(platoFuerteSeleccionado);
  }, [platoFuerteSeleccionado])

  useEffect(() => {
    director.bb = handleSeleccionBebida(bebidaSeleccionada);
  }, [bebidaSeleccionada])

  const handleCrearMenu = () => {
    director.prepararMenu();
    menusCreados.push(director.getResultado());
    director.menuBuilder.menu = new Menu();
    localStorage.setItem('menus', JSON.stringify(menusCreados));
    console.log(menusCreados)
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

            <Listbox value={entradaSeleccionada} onChange={setEntradaSeleccionada}>
              <div className='relative mt-1'>
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{entradaSeleccionada.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <KeyboardArrowDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {entradas.map((entrada, itemIdx) => (
                    <Listbox.Option
                      key={itemIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={entrada}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {entrada.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
              </div>
            </Listbox>

            <Listbox value={platoFuerteSeleccionado} onChange={setPlatoFuerteSeleccionado}>
              <div className='relative mt-1'>
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{platoFuerteSeleccionado.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <KeyboardArrowDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {platosPrincipales.map((plato, itemIdx) => (
                    <Listbox.Option
                      key={itemIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={plato}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {plato.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
              </div>
            </Listbox>

            <Listbox value={postreSeleccionado} onChange={setPostreSeleccionado}>
              <div className='relative mt-1'>
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{postreSeleccionado.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <KeyboardArrowDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {postres.map((postre, itemIdx) => (
                    <Listbox.Option
                      key={itemIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={postre}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {postre.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
              </div>
            </Listbox>

            <Listbox value={bebidaSeleccionada} onChange={setBebidaSeleccionada}>
              <div className='relative mt-1'>
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{bebidaSeleccionada.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <KeyboardArrowDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {bebidas.map((bebida, itemIdx) => (
                    <Listbox.Option
                      key={itemIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                        }`
                      }
                      value={bebida}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {bebida.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
              </div>
            </Listbox>

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
