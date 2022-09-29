import frame from './frame.svg'
import iphone from './iphone.svg'
import image from './Image.svg'
import arrow from './arrow.png'
import android from './android.svg'
import logo from './Logo.svg'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Link} from 'react-router-dom'
const navigation = [
  { name: 'How it works', href: '#' },
  { name: 'Support', href: '#' },
]

function Hero() {
  return (
    <div className="relative  overflow-hidden bg-red-50">
      <div className="hidden sm:absolute sm:inset-0 sm:block" aria-hidden="true">
        
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <nav
            className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center justify-between md:w-auto">
                <a href="#">
                  <span className="sr-only">Bele-Bank</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src={frame}
                    alt=""
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-10 md:ml-10 md:flex lg:ml-72">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-medium text-black hover:text-gray-700">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex">
              <a
                href="/contact"
                className="inline-flex items-center px-10 rounded-md border border-red-700 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white"
              >
                Contact sales
              </a>
            </div>
          </nav>

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
              className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src={frame}
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                >
                  Contact Sales
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mt-16 -mb-40 sm:mt-24 lg:-mt-10">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                <div>
                 
                  <h1 className="mt-4  text-center lg:text-left sm:text-center text-6xl font-bold text-red-900 sm:text-5xl md:text-7xl">
                  Never run out <br />of  <span className="text-orange-500">food stuff</span> 
                  </h1>
                  <p className="mt-3 text-center lg:text-left mx-0 text-xl text-red-900 sm:mt-5 sm:text-xl lg:text-7xl xl:text-xl">
                  Belle Bank give you a flexible loan for foodstuff<br /> while your it cutting 10-20% from 
                  your salary<br /> easily without hassle.
                  </p>
                  
                  <a href='/access'
                className="inline-flex items-center text-center lg:w-60 text w-full mt-10 px-10 rounded-md border border-red-700 bg-red-700 py-2 text-sm font-medium text-white hover:bg-red-50 hover:text-red-700"
              >
                 Join wailist <img src={arrow} />
              </a>
                  <p className="mt-8 text-base font-semibold text-gray-400 sm:mt-10">Coming soon on</p>
                  <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                    <div className="flex flex-wrap items-start justify-between">
                      <div className="flex justify-center px-1 ">
                        <img
                          className="h-9 sm:h-10"
                          src={android}
                          alt="Tuple"
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        <img
                          className="h-9 sm:h-10"
                          src={iphone}
                          alt="Workcation"
                        />
                      </div>
                      <div className="flex justify-center px-1">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                 <div className="px-4 py-8 sm:px-10">
                    <img src={image} className='w-full' />
                  
                </div>
                
              </div>
              
            </div>
            
          </div>
        </main>
      </div>
      <div className="relative bg-white pt-32">
      <div className="relative bg-red-200 mb-28">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 py-10 lg:px-8">
        <div className="pr-16 sm:px-16 sm:text-center">
          <p className="font-medium text-red-900 inline-flex items-center">
            <span className="md:hidden"></span>
            <span className=" text-red-900">Powered By</span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href="#" className="font-bold text-red-900 underline">
              <img src={logo} />
              </a>
            </span>
          </p>
        </div>
        {/* <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2">
          <button
            type="button"
            className="flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div> */}
      </div>
    </div>
    </div>
   </div>
  )
}
export default Hero