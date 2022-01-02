import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Title from './Title'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contactus' },
]    



function headerDivzoon({ hrefbb,hrefab ,H1headerGray,pheader ,getStarted, imageSrc, imageAltText,whatWeDo}) {
  return (

    <header className="  mx-auto mb-10">
      <Title/>
          <div className="relative bg-white overflow-hidden  ">
      <div className="xl:ml-9 mx-auto">
        <div className="relative z-10 pb-8  bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">


          <Popover>

            <div className="relative pt-6 px-4  sm:px-6 lg:px-8">
              <nav className="relative flex  items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                
                <div className="flex items-center  flex-grow flex-shrink-0 lg:flex-grow-0 ">
                
                  <div className="flex items-center  justify-between w-full md:w-auto ">
                    <a href="/">
<h1  className="logoheader">Divzoon</h1>
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
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-4 font-bold	 text-gray-500 hover:text-gray-900">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className="font-bold	 text-gray-500 hover:text-gray-900">
                      {item.name}
                    </Link>
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
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="xl:ml-20 mt-10 mx-auto max-w-screen-xl		 px-4 sm:mt-12 sm:pl-6 md:mt-16 lg:mt-36 lg:pl-8 xl:mt-28">
            <div className="text-center sm:text-center lg:text-left">
              <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-8xl">
                <span className=" block xl:inline">{H1headerGray}</span><br/>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
              {pheader}         </p>
 
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-8 z-40 lg:right-0 lg:top-2  lg:w-1/2">

      <img   src={imageSrc} alt={imageAltText} layout="fill" objectFit="contain" className="h-60   sm:h-72 md:h-96 lg:w-full lg:h-full" />

      </div>
    </div>
    </header>
  )
}

export default headerDivzoon
