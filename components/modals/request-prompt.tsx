import firebase from 'firebase'
import 'firebase/firestore'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import TextInput from '../inputs/text-input'
import { CommandLineIcon } from '@heroicons/react/20/solid'
import AlertInfo from '../alerts/info'
import { iUser } from '../../typings'
import Textarea from '../inputs/text-area'
import MoneyInput from '../inputs/price-input'
import Swal from 'sweetalert2'

export default function RequestPromptModal({ opened, setOpened, user}: { opened: boolean, setOpened: any, user: iUser }) {
  const [open, setOpen] = useState(opened)
  const [alert, setAlert] = useState('')

  useEffect(() => {
    setOpen(opened)
  }, [opened])

  const cancelButtonRef = useRef(null)

  const textPromptTitle = 'Title for your Prompt:'
  const placeholderPromptTitle = 'Prompt for Grow Audience'
  const [promptTitle, setPromptTitle] = useState('')

  const textPromptDescription = 'Describe your Prompt:'
  const placeholderPromptDescription = 'My prompt should be able to select audience based on age and type of food they like, to build a prompt for marketing food specialist channel.'
  const [promptDescription, setPromptDescription] = useState('')

  const textPromptPrice = 'How much you wanna pay for it?'
  const placeholderPromptPrice = 'My prompt should be able to select audience based on age and type of food they like, to build a prompt for marketing food specialist channel.'
  const [promptPrice, setPromptPrice] = useState('')

 
  const sendData = async (request: Object) => {
    try {
      await firebase
        .firestore()
        .collection('prompt-require')
        .add({
          author: firebase.auth().currentUser?.uid,
          request
        })
      Swal.fire('Success', 'Prompt request saved, we`ll enter in contact in 2 days maximum, with a proposal.', 'success').then(() => {
        setOpened(false)
      });
    } catch (error) {
      console.log(error)
    }
  }

  const handleFields = () => {
    const request = { title: promptTitle, description: promptDescription, price: promptPrice, user: { emal: user.email, name: user.name } }
    sendData(request)
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
                    <CommandLineIcon className="h-6 w-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Request Prompt
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className='grid grid-cols-1 mb-3 space-y-3'>
                        <TextInput title={textPromptTitle} handle={setPromptTitle} placeholder={placeholderPromptTitle} />
                        <Textarea title={textPromptDescription} handle={setPromptDescription} placeholder={placeholderPromptDescription} />
                        <MoneyInput title={textPromptPrice} handle={setPromptPrice} placeholder={placeholderPromptPrice} />
                      </div>
                      {alert ? <AlertInfo text={alert} /> : '' }
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                    onClick={handleFields}
                  >
                    Adicionar
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
