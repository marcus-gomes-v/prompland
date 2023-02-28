import firebase from 'firebase'
import 'firebase/firestore'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { iTransaction, iUserTransaction } from '../../typings'
import { ClipboardDocumentIcon, QrCodeIcon } from '@heroicons/react/20/solid'
import { QRCodeSVG } from 'qrcode.react'
import fetchJson from '../../lib/fetchJson'
import AlertError from '../alerts/error'
import AlertInfo from '../alerts/info'
import AlertWarning from '../alerts/warning'
import Swal from 'sweetalert2'

export default function PayQrcodeModal({ opened, setOpened, transaction, fbTransactionId}: { opened: boolean, setOpened: any, transaction: iTransaction, fbTransactionId: string}) {
  const [open, setOpen] = useState(opened)
  const [error, setError] = useState('')

  useEffect(() => {
    setOpen(opened)
    setError('')
  }, [opened])

  const cancelButtonRef = useRef(null)

  const handleFields = () => {
    validateData(transaction)
  }

  const validateData = async (transaction: iTransaction) => {
    try{
      const oTransaction: iTransaction = await fetchJson('/api/verify-payment', {
        method: 'POST',
        body: JSON.stringify({ transactionId: transaction.id }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (oTransaction.status != transaction.status){
        updateData(oTransaction)
      } else {
        setError('Não encontramos o seu pagamento ainda.')
      }
    } catch(e){
      console.log(e)
    }   
  }

  const updateData = async (transaction: iTransaction) => {
    try {
      firebase
        .firestore()
        .collection('transactions')
        .doc(fbTransactionId)
        .update({
          "data.status": transaction.status
        })
        .then(() => {
          setOpened(false)
          Swal.fire({
            title: 'Pagamento processado com sucesso.',
            icon: 'success'
          })
        });
    } catch (error) {
      console.log(error)
    }
  }

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
                    <QrCodeIcon className="h-6 w-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      PIX
                    </Dialog.Title>
                    <div className="mt-2">
                      <QRCodeSVG value={ transaction.pix_qr_code } className={'w-full'} />
                      <hr  className='mt-3 mb-3'/>
                      <button
                        className={`rounded-md border bg-transparent border-indigo-600 text-indigo-500 px-4 py-2 text-base`}
                        onClick={() => navigator.clipboard.writeText(transaction.pix_qr_code)}
                      >
                       <ClipboardDocumentIcon className='h-4 w-4 mh-auto inline mr-2' />
                       Copiar PIX
                      </button>
                    </div>
                    {error != '' ? <div className='mt-4'><AlertWarning text={error} /></div> : ''}
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                    onClick={handleFields}
                  >
                    Já Paguei
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
