import firebase from 'firebase'
import 'firebase/firestore'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { UserGroupIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CalendarDaysIcon, ClockIcon, CurrencyDollarIcon, InformationCircleIcon, StarIcon } from '@heroicons/react/20/solid'


const product = {
  name: "Women's Basic Tee",
  price: '$32',
  rating: 3.9,
  reviewCount: 512,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
  imageAlt: "Back of women's Basic Tee in black.",
  colors: [
    { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
    { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: false },
  ],
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function DetailsTeamModal({ opened, setOpened, team }: { opened: boolean, setOpened: any, team: any }) {
  const [open, setOpen] = useState(opened)

  useEffect(() => {
    setOpen(opened)
  }, [opened])

  const cancelButtonRef = useRef(null)

  const handleFields = () => {
    sendData()
  }

  const sendData = async () => {
    try {
      console.log('Send Data')
    } catch (error) {
      console.log(error)
    }
  }

  const selectDateData = [
    { title: "Segundas", key: "seg" },
    { title: "Terças", key: "terc" },
    { title: "Quartas", key: "quart" },
    { title: "Quintas", key: "quint" },
    { title: "Sextas", key: "sext" },
    { title: "Sabados", key: "sbd" },
    { title: "Segundas & Quartas", key: "segequart" },
    { title: "Terças & Quintas", key: "tercequint" },
  ]

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
                          Team information
                        </h3>
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className='flex text-cyan-500 mb-2 ml-2'>
                              <InformationCircleIcon className='my-auto h-5 w-5 mr-1 ' />
                              <h3 className='text-xl'>Detalhes</h3>
                            </div>
                            <div className="ml-6">
                              <p className="font-medium text-gray-900"><strong className='text-indigo-400'><CalendarDaysIcon className='my-auto w-4 h-4 inline ' /> Dias</strong>: {team.teamDate ? selectDateData.filter(e => e.key == team.teamDate)[0].title : ''}</p>
                              <p className="font-medium text-gray-900"><strong className='text-indigo-400'><CurrencyDollarIcon className='my-auto w-4 h-4 inline ' /> Valor</strong>: R$ {team.price}</p>
                              <p className="font-medium text-gray-900"><strong className='text-indigo-400'><ClockIcon className='my-auto w-4 h-4 inline ' /> Horário</strong>: {team.time}</p>
                            </div>
                          </div>
                        </div>
                        
                      </section>

                      <section aria-labelledby="options-heading">
                        <h3 id="options-heading" className="sr-only">
                          Alunos
                        </h3>

                        <section aria-labelledby="quick-links-title">
                          <div className="mt-6 flex flex-col">
                            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className='flex mb-3 ml-2 text-cyan-500'>
                                  <UserGroupIcon className='my-auto h-5 w-5 mr-1 '/>
                                  <h3 className='text-xl'>Alunos</h3>
                                </div>
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                 
                                  <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                      <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                          Nome
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                          Email
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                          
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                      {team.members ? team.members.map((member: any) => (
                                        <tr key={member.uid}>
                                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                            <div className="flex items-center">
                                              <div className="">
                                                <div className="font-medium text-gray-900">{member.name}</div>
                                              </div>
                                            </div>
                                          </td>
                                          <td className="px-3 py-4 text-sm text-gray-500">
                                            <div className="text-gray-900">{member.email}</div>
                                          </td>
                                          <td className="flex space-x-1 lg:space-x-3 justify-center py-4 pl-3 pr-4 sm:pr-6">
                                            {/* <button onClick={() => console.log('HEHE')} className="text-center text-rose-600 hover:text-rose-900 border-rose-600 lg:hover:text-rose-50 lg:hover:bg-rose-600 border rounded-sm p-2 w-9 h-9" >
                                              <XMarkIcon className='h-4 w-4' />
                                            </button> */}
                                          </td>
                                        </tr>
                                      )) : <tr><td colSpan={4} className="pl-6 py-3">Não possui turmas cadastradas.</td></tr>}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>

                        <button
                          onClick={() => setOpened(false)}
                          type="submit"
                          className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Fechar
                        </button>

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
