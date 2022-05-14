import React, { Fragment} from 'react'
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

import {useFetchAllStarWarFilmsQuery} from '../../redux/service/starWarApi';

export default function DropdownBox({selectedItem,setSelectedItem}) {
    const {data,isLoading,isFetching,isSuccess,isError} = useFetchAllStarWarFilmsQuery();

 
    
  return (
    <div className="w-56 fixed left-0 right-0 bottom-0 mx-auto">
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <div className="relative mt-1">

          <Listbox.Button className=" w-full cursor-pointer  bg-[#ffe919] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate font-semibold text-sm">{'Choose a star war movie'}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-800"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>


          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            
            <Listbox.Options className="absolute h-56 -top-56 mt-0 max-h-60 w-full overflow-auto 
              bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                {isLoading || isFetching  ? (<div className="h-full flex flex-col items-center justify-center">
                     <svg class="animate-spin -ml-1 mr-3 h-7 w-7 text-[#ffe919]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                     </svg>
                    Loading...
                </div>) :
                <>
                {data && isSuccess && data.results.length > 0 ? data.results.map((item, Idx) => {
                  return(
                    <Listbox.Option
                      key={Idx}
                      className={({ active }) =>
                        `relative cursor-pointer  select-none py-2 pl-10 pr-4 ${
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
                            {item.title}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}

                    </Listbox.Option>

                  )
                }

                ):null}
                
                </>
                
                }


            </Listbox.Options>
          </Transition>
          {/* // ): null} */}
        </div>
      </Listbox>
    </div>
  )
}

