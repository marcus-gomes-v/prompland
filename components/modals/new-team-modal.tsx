import firebase from 'firebase'
import 'firebase/firestore'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import PriceInput from '../inputs/price-input'
import SelectInput from '../inputs/select-input'
import HourInput from '../inputs/hour-input'
import AlertInfo from '../alerts/info'
import TextInput from '../inputs/text-input'

export default function NewTeamModal({ opened, setOpened }: { opened: boolean, setOpened: any }) {
  const [open, setOpen] = useState(opened)

  useEffect(() => {
    setOpen(opened)
  }, [opened])

  const cancelButtonRef = useRef(null)


  const selectFreqTitle = 'Frequência'

  const selectFreqData = [
    { title: "Semanal", key: "semanal" },
    { title: "Mensal", key: "mensal" },
    { title: "Quinzenal", key: "quinzenal" },
  ]

  const selectDateTitle = 'Dias'

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

  const selectPgtTitle = 'Data de Pagamento'

  const selectPgtData = [
    { title: "Dia 5", key: "5" },
    { title: "Dia 10", key: "10" },
    { title: "Dia 15", key: "15" },
  ]

  const timeInputTitle = 'Hora'
  const textTeamName = 'Nome para Turma'

  const [teamName, setTeamName] = useState('')
  const [teamDate, setTeamDate] = useState(null)
  const [paymentDate, setPaymentDate] = useState(null)
  const [frequency, setFrequency] = useState(null)
  const [price, setPrice] = useState(null)
  const [time, setTime] = useState(null)


  const handleFields = () => {
    const data = {
      "teamDate": teamDate,
      "paymentDate": paymentDate,
      "frequency": frequency,
      "price": price,
      "time": time,
    }
    sendData(data, teamName)
  }

  const sendData = async (data: any, name: string) => {
    try {
        firebase
          .firestore()
          .collection('teams')
          .add({
            team_name: name,
            team_teacher: firebase.auth().currentUser?.uid, 
            team_data: data,
            team_members: [],
          })
        setOpened(false)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpened}>
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
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <UserGroupIcon className="h-6 w-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Nova Turma
                    </Dialog.Title>
                    <div className="mt-2">
                      <AlertInfo text='O valor da turma é cobrado mensalmente.' />
                      <div className='grid grid-cols-1 lg:gap-2 lg:grid-cols-2'>
                        <TextInput title={textTeamName} handle={setTeamName} placeholder="Iniciantes BT" />
                        <SelectInput title={selectDateTitle} data={selectDateData} handle={setTeamDate} />
                        <div className="grid grid-cols-2 gap-2">
                          <SelectInput title={selectFreqTitle} data={selectFreqData} handle={setFrequency} />
                          <HourInput title={timeInputTitle} handle={setTime} />
                        </div>
                        <PriceInput handle={setPrice} />
                        <SelectInput title={selectPgtTitle} data={selectPgtData} handle={setPaymentDate} />
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                    onClick={handleFields}
                  >
                    Criar
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                    onClick={() => setOpened(false)}
                    ref={cancelButtonRef}
                  >
                    Cancelar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
