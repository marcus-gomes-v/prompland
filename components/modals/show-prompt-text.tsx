import firebase from 'firebase'
import 'firebase/firestore'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ClipboardDocumentIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import TextInput from '../inputs/text-input'
import AlertError from '../alerts/error'
import fetchJson from '../../lib/fetchJson'
import { ClipboardIcon, CodeBracketIcon } from '@heroicons/react/20/solid'
import AlertInfo from '../alerts/info'

export default function ShowPromptTextModal({ opened, setOpened, code}: { opened: boolean, setOpened: any, code: string }) {
  const [open, setOpen] = useState(opened)
  const [alert, setAlert] = useState('')

  useEffect(() => {
    setOpen(opened)
  }, [opened])

  const cancelButtonRef = useRef(null)
  const handleFields = () => {
    console.log('Handle Something')
  }

  const copyToClipboard = () => {
    setAlert('Prompt was copy with success')
    navigator.clipboard.writeText(`${code}`);
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
                    <CodeBracketIcon className="h-6 w-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Prompt
                    </Dialog.Title>
                    <div className="mt-2">
                      {alert ? <AlertInfo text={alert} /> : '' }
                      <div className='grid grid-cols-1 mb-3 border px-2 pt-3 pb-2 rounded-md bg-gray-200'>
                       {code}
                       <div className='w-full flex justify-end'>
                          <ClipboardDocumentIcon className='w-6 h-6 border border-gray-400 text-gray-400 hover:border-gray-500 hover:text-gray-600 rounded-md p-0.5 cursor-pointer' onClick={copyToClipboard} />
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 ">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-offset-transparent focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                    onClick={() => setOpened(false)}
                    ref={cancelButtonRef}
                  >
                    Close
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
