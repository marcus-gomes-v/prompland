import firebase from 'firebase'
import 'firebase/firestore'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import TextInput from '../inputs/text-input'
import AlertError from '../alerts/error'

export default function AddMemberModal({ opened, setOpened, teamId }: { opened: boolean, setOpened: any, teamId: string }) {
  const [open, setOpen] = useState(opened)
  const [error, setError] = useState('')

  useEffect(() => {
    setOpen(opened)
  }, [opened])

  const cancelButtonRef = useRef(null)
  const textStudentEmail = 'Email do Aluno'
  const [studentEmail, setStudentEmail] = useState('')

  const handleFields = () => {
    sendData(studentEmail)
  }

  const sendData = async (email: string) => {
    try {
        firebase
          .firestore()
          .collection('users')
          .where("email", "==", email)
          .get()
          .then((querySnapshot) => {
            if(querySnapshot.empty){
              setError('Aluno não cadastrado, tente outro email.')
            }
            querySnapshot.forEach((doc) => {
              updateTeam(doc.data());
            });
          })
          .catch((error) => {
            setError('Aconteceu um erro inesperado, entre em contato com o suporte.')
            console.log("Error getting documents: ", error);
          });

    } catch (error) {
      console.log(error)
    }
  }

  const updateTeam = async (userData: any) => {
    try {
      firebase
        .firestore()
        .collection('teams')
        .doc(teamId)
        .update({
          team_members: firebase.firestore.FieldValue.arrayUnion(userData)
        })
      firebase
        .firestore()
        .collection('users')
        .doc(userData.uid)
        .update({
          teams: firebase.firestore.FieldValue.arrayUnion(teamId)
        })
      setOpened(false)
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
                    <UserCircleIcon className="h-6 w-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Adicionar Aluno
                    </Dialog.Title>
                    <div className="mt-2">
                      
                      <div className='grid grid-cols-1 mb-3'>
                        <TextInput title={textStudentEmail} handle={setStudentEmail} placeholder="seu-aluno@email.com" />
                      </div>
                      {error != '' ? <AlertError text={error} /> : ''}
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
