import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import AnimationLogo from '../animation/AnimationLogo'
import { useRouter } from 'next/router'


interface ActiveLinkProps {
  href: string
  children: React.ReactNode
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ children, href }) => {
  const router = useRouter()

  // Check if the current URL matches the link's href
  const isActive = router.pathname === href

  return (
    <Link href={href}>
      <a className={`text-sm font-semibold leading-6 ${isActive ? 'text-vibrant-blue-600' : 'text-gray-900'}`}>
        {children}
      </a>
    </Link>
  )
}

const navigation: any = [
  { name: 'For Creators', href: '/for-creators' },
  { name: 'For Individuals', href: '/for-individuals' },
  { name: 'For Companies', href: '/for-companies' },
]


export default function NavigationHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const ActiveLinkMobile: React.FC<ActiveLinkProps> = ({ children, href }) => {
    const router = useRouter()

    // Check if the current URL matches the link's href
    const isActive = router.pathname === href

    return (
      <Link href={href}>
        <a onClick={() => setMobileMenuOpen(false)} className={`-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 ${isActive ? 'text-vibrant-blue-600' : 'text-gray-900'}`}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <header className="sticky inset-x-0 top-0 z-50  bg-gray-50">
      <nav className="flex items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" >
            <a  className="-m-1.5 p-1.5 align-middle">
              <span className="sr-only">Prompland</span>
              <div className='inline-block'>
                <AnimationLogo width={32} height={32} amount={700} />
              </div>
              <span className='inline-block align-top text-2xl font-thin'>Promp<b className='text-vibrant-blue-600 font-bold'>land</b></span>
            </a>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item: any) => (
            <ActiveLink key={item.name} href={item.href}>
              {item.name}
            </ActiveLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href={"/authentication"}>
            <a className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" >
              <a  className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Prompland</span>
                <div className='inline-block'>
                  <AnimationLogo width={64} height={64} amount={700} />
                </div>
              </a>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item: any) => (
                  <ActiveLinkMobile key={item.name} href={item.href}>
                    {item.name}
                  </ActiveLinkMobile>
                ))}
              </div>
              <div className="py-6">
                <Link href="/authentication" >
                  <a
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}