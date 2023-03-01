import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { UserGroupIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CalendarDaysIcon, ClockIcon, CurrencyDollarIcon, InformationCircleIcon } from '@heroicons/react/20/solid'


export default function DetailsModal({ opened, setOpened, data }: { opened: boolean, setOpened: any, data: any }) {
  const [open, setOpen] = useState(opened)

  useEffect(() => {
    setOpen(opened)
  }, [opened])


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10"  onClose={setOpened}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden md:inline-block md:h-screen md:align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setOpened(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <div className="grid w-full">
                    <div className="col-span-8">
                      <h2 className="text-xl font-medium text-cyan-500 overflow-x-auto sm:-mx-6 lg:-mx-8 sm:pl-2 md:pl-8 lg:pl-8">Turma de Treinamento</h2>
                      <section aria-labelledby="information-heading" className="mt-6">
                        <h3 id="information-heading" className="sr-only">
                          Project information
                        </h3>
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className='flex text-cyan-500 mb-2 ml-2'>
                              <InformationCircleIcon className='my-auto h-5 w-5 mr-1 ' />
                              <h3 className='text-xl'>Details</h3>
                            </div>
                            <div className="ml-6">
                              <p className="font-medium text-gray-900"><strong className='text-indigo-400'><CalendarDaysIcon className='my-auto w-4 h-4 inline ' /> Name</strong>: {data.name}</p>
                              <p className="font-medium text-gray-900"><strong className='text-indigo-400'><CurrencyDollarIcon className='my-auto w-4 h-4 inline ' /> Valor</strong>: zł {data.price}</p>
                            </div>
                          </div>
                        </div>
                        
                      </section>

                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )

}
