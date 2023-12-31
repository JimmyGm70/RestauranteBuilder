import { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react'
import CheckIcon from '@mui/icons-material/Check'
import { GeneralBuilder} from '../classes/build/interfaces'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ListaSeleccion(props: {
   listado: { id: number, name: string, unavailable: boolean }[],
   onChangeFunction: (value: { id: number, name: string, unavailable: boolean }, builder: GeneralBuilder) => void,
   titulo: string,
   builder: GeneralBuilder,
   children?: React.ReactNode
  }) {

  const { listado, onChangeFunction } = props
  const [itemSeleccionado, setItemSeleccionado] = useState(listado[0])

  return (
    <Listbox value={itemSeleccionado} onChange={setItemSeleccionado}>
      <div className='relative mt-1'>
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate">{props.titulo}</span>
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
          {listado.map((item, itemIdx) => (
            <Listbox.Option
              key={itemIdx}
              onChange={() => onChangeFunction(item, props.builder)}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                }`
              }
              value={item}
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}
                  >
                    {item.name}
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
  )

}