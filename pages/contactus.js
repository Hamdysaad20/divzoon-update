import Footer from '../components/footer'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import Alarm from '../components/alarm'
import Cuimg from '../components/cuimg'


const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Contact Us', href: '/contactus' },
  ]    
function contactus() {
    return (
       
       <div className="">
            
               <div className=" "><Alarm/></div>

  <div className="xl:ml-9 mx-auto  ">
       
          <Popover>

            <div className="relative pt-6 px-4  sm:px-6 lg:px-8">
              <nav className="relative flex  items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                
                <div className="flex items-center  flex-grow flex-shrink-0 lg:flex-grow-0 ">
                
                  <div className="flex items-center  justify-between w-full md:w-auto ">
                    <a href="/">
<h1 className="text-red-600 logoheader">Divzoon</h1>
                      <span className="sr-only">Workflow</span>

                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-4">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-bold	 text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}

                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-red-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>

                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

        </div>
        <Cuimg className=""/>

             </div>
             
     
    )
}

export default contactus
