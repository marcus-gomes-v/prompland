import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CubeTransparentIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from "next/image";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation({ page, menu, user }: {page: string, menu: any, user: any}) {


  const navigation = user.type === 'admin' ? [
    { name: 'Home', href: '/dashboard', current: page === 'dashboard'  },
    { name: 'Financial', href: '/financial', current: page === 'financial' },
    // { name: 'Alunos', href: '/clients', current: page === 'clients' },
    { name: 'Projects', href: '/projects', current: page === 'projects' },
  ] : 
  [
    { name: 'Home', href: '/dashboard', current: page === 'dashboard' },
  ]

  const userNavigation = [
    // { name: 'Your Profile', href: '#', action: undefined },
    // { name: 'Settings', href: '#', action: undefined },
    { name: 'Sign out', href: '#', action: menu.signOut },
  ]


  return (
    <Popover as="header" className="bg-gradient-to-r from-vibrant-blue-900 to-vibrant-blue-600 pb-24">
      {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
              {/* Logo */}
              <div className="absolute left-0 flex-shrink-0 py-5 lg:static">
                <a href="#" className='flex align-middle gap-2'>
                  <span className="sr-only">Prompland</span>
                    <div className='w-8 h-8 md:w-12 md:h-12 relative'>
                      <Image
                        layout='fill'
                        className="w-auto"
                        src="/images/logos/logo.svg"
                        alt="Prompland"
                      />
                    </div>
                    <span className='inline text-2xl mh-auto font-thin my-auto text-white'>Promp<b className='text-vibrant-blue-600 font-bold'>land</b></span>
                </a>
              </div>

              {/* Right section on desktop */}
              <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
                

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                      <span className="sr-only">Open user menu</span>
                      <Image width={32} height={32} className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }: { active: boolean }) => (
                            <a
                              href={item.href}
                              onClick={item.action}
                              className={classNames(
                                active ? 'bg-gray-400' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {item.name} 
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                <div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
                  {/* Left nav */}
                  <div className="hidden lg:col-span-2 lg:block">
                    <nav className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'text-vibrant-blue-300 bg-opacity-10' : 'text-vibrant-blue-100',
                            'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-20'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name} {item.current}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>

              {/* Menu button */}
              <div className="absolute right-0 flex-shrink-0 lg:hidden">
                {/* Mobile menu button */}
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-vibrant-blue-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
            </div>
          </div>

          <Transition.Root as={Fragment}>
            <div className="lg:hidden">
              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
                >
                  <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="pt-3 pb-2">
                      <div className="flex items-center justify-between px-4">
                        <div className='h-8 w-8 relative'>
                          <Image
                            layout='fill'
                            className="h-8 w-auto"
                            src="/images/logos/logo-vibrant-blue.svg"
                            alt="Prompland"
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-vibrant-blue-500">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-3 space-y-1 px-2">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 pb-2">
                      
                      <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                          <a
                            onClick={item.action}
                            key={item.name}
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition.Child>
            </div>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}