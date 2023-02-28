import firebase from 'firebase'
import 'firebase/firestore'
import { iTeam, iFirestoreTransaction, iUser } from "../../typings"
import { useEffect, useState } from "react";
import Price from '../utils/Price';
import months from '../../lib/months';
import { ReceiptPercentIcon } from '@heroicons/react/20/solid';
import InvoiceModal from '../modals/invoice-modal';
import paymentStatus from '../../lib/payment-status';


export default function FinanceTeacherTable({user}: {user: iUser}) {
  const [openInvoiceModal, setOpenInvoiceModal] = useState(false)
  const [transactions, setTransactions] = useState<iFirestoreTransaction[]>([])
  const [transaction, setTransaction] = useState<iFirestoreTransaction>({} as iFirestoreTransaction)

  const handleInvoiceModal = () => {
    openInvoiceModal ? setOpenInvoiceModal(false) : setOpenInvoiceModal(true)
  }

  const getInvoice = (transaction: iFirestoreTransaction) => {
    setTransaction(transaction)
    setOpenInvoiceModal(true)
  }

  useEffect(() => {
    firebase
      .firestore()
      .collection('transactions')
      .where('team.team_teacher', '==', firebase.auth().currentUser?.uid)
      .onSnapshot((querySnapshot) => {
        const aTransaction: iFirestoreTransaction[] = []
        querySnapshot.forEach((doc) => {
          const oTransaction: iFirestoreTransaction = {
            id: doc.id,
            month: doc.data()?.month,
            uid: doc.data()?.uid,
            team: doc.data()?.team,
            data: doc.data()?.data,
            time_stamp: doc.data()?.time_stamp,
          } as iFirestoreTransaction;
          aTransaction.push(oTransaction)
        })
        setTransactions(aTransaction)
      })
  }, [])  

  return (
    <>
      <InvoiceModal opened={openInvoiceModal} setOpened={setOpenInvoiceModal} transaction={transaction} />
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            {user.type === 'teacher' &&
              <th
                scope="col"
                className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Client
              </th>
            }
            <th
              scope="col"
              className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Turma
            </th>
            <th
              scope="col"
              className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Mês
            </th>
            <th
              scope="col"
              className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Valor
            </th>
            {user.type === 'teacher' &&
              <th
                scope="col"
                className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Taxa
              </th>

            }
            <th
              scope="col"
              className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Status
            </th>
            <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              {user.type === 'teacher' &&
                <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                  {transaction.data.customer.name}
                </td>
              }
              <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.team.team_name}</td>
              <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{months[transaction.month]}</td>
              <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                <Price value={transaction.data.amount / 100} />
              </td>
              {user.type === 'teacher' &&
                <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                  <Price value={(transaction.data.amount * 0.1) / 100} />
                </td>
              }
              <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{paymentStatus[transaction.data.status]}</td>
              <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                {transaction.data.status == 'paid' ?
                  <button onClick={() => getInvoice(transaction)} className="py-1 px-2 border rounded-sm text-indigo-600 border-indigo-600 hover:text-indigo-900 text-center">
                    <ReceiptPercentIcon className='inline w-5 h-5 my-auto md:mr-1' />
                    <span className='hidden md:inline'>Comprovante</span>
                  </button>
                  :
                  <button disabled className="py-1 px-2 border rounded-sm text-gray-400 border-gray-400 text-center">
                    <ReceiptPercentIcon className='inline w-5 h-5 my-auto md:mr-1' />
                    <span className='hidden md:inline'>Comprovante</span>
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
