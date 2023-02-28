import firebase from 'firebase'
import 'firebase/firestore'
import { CheckIcon, CreditCardIcon, ExclamationTriangleIcon } from "@heroicons/react/20/solid"
import { iTeam, iUserTransaction, iUser, iTransaction, iFirestoreTransaction } from "../../typings"
import Pagarme from "../pagarme/pagarme";
import { useEffect, useState } from "react";
import PayQrcodeModal from '../modals/pay-qrcode-modal';
import InvoiceModal from '../modals/invoice-modal';


export default function Table({ teams, user }: { teams: iTeam[], user: iUser }) {

  const [team, setTeam] = useState<iTeam>()
  const [openPaymentQrcodeModal, setOpenPaymentQrcodeModal] = useState(false)
  const [transaction, setTransaction] = useState<iTransaction>({} as iTransaction)
  const [fbTransactionId, setFbTransactionId] = useState('')
  const [transactions, setTransactions] = useState<{ [key: string]: iFirestoreTransaction }>({})
  const [openInvoiceModal, setOpenInvoiceModal] = useState(false)
  const [transactionFb, setTransactionFb] = useState<iFirestoreTransaction>({} as iFirestoreTransaction)

  const handleInvoiceModal = () => {
    openInvoiceModal ? setOpenInvoiceModal(false) : setOpenInvoiceModal(true)
  }

  const handleModalPaymentQrcode = () => {
    openPaymentQrcodeModal ? setOpenPaymentQrcodeModal(false) : setOpenPaymentQrcodeModal(true)
  }

  const payTeam = (team: iTeam) => {
    setTeam(team)
  }

  const existTx = (trnasactions: { [key: string]: iFirestoreTransaction }, team: iTeam) => {
    return typeof (trnasactions[team.id]) == 'object'
  }

  const getPaymentStatus = (transactions: { [key: string]: iFirestoreTransaction }, team: iTeam) => {
    const pagarmeStatus: any = {
      processing: "Processando",
      authorized: "Autorizado",
      paid: "Pago",
      refunded: "Estornado",
      waiting_payment: "Aguardando",
      pending_refund: "Aguardando Estorno",
      refused: "Recusado",
      chargedback: "Chargeback",
      analyzing: "Analizando",
      pending_review: "Pendente de Revisão",
    }
    
    const status = transactions[team.id].data.status
    return status ? { key: status, value: pagarmeStatus[status] } : {}
  } 

  const getDetails = (transactions: { [key: string]: iFirestoreTransaction }, team: iTeam) => {
    setTransactionFb(transactions[team.id]);
    handleInvoiceModal();
  }

  const payMe = async (transactions: { [key: string]: iFirestoreTransaction }, team: iTeam) => {
    setFbTransactionId(transactions[team.id].id)
    setTransaction(transactions[team.id].data)
    handleModalPaymentQrcode()
  }

  useEffect(() => {
    firebase
      .firestore()
      .collection('transactions')
      .where('uid', '==', user.uid)
      .where('month', '==', new Date().getUTCMonth())
      .onSnapshot((querySnapshot) => {
        let aTransaction: { [key: string]: iFirestoreTransaction } = {}
        querySnapshot.forEach((doc) => {
          const oTransaction: iFirestoreTransaction = {
            id: doc.id,
            month: doc.data()?.month,
            uid: doc.data()?.uid,
            team: doc.data()?.team,
            data: doc.data()?.data,
            time_stamp: doc.data()?.time_stamp,
          } as iFirestoreTransaction;
          aTransaction[doc.data()?.team.id]  = oTransaction
        })
        setTransactions(aTransaction)
      })
  }, [])  
  
  const handleQrCode = (oTransaction: iTransaction, transactionId: string) => {
    setFbTransactionId(transactionId)
    setTransaction(oTransaction)
    handleModalPaymentQrcode()
  }

  return (
    <div className="px-6 lg:px-8">
      <Pagarme team={team} user={user} handleQrCode={handleQrCode} />
      <PayQrcodeModal opened={openPaymentQrcodeModal} setOpened={setOpenPaymentQrcodeModal} transaction={transaction} fbTransactionId={fbTransactionId} />
      <InvoiceModal opened={openInvoiceModal} setOpened={setOpenInvoiceModal} transaction={transactionFb} />
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Turmas de Treinamento</h1>
          <p className="mt-2 text-sm text-gray-700">
            Abaixo você possui uma lista completa das turmas de treinamento que você faz parte.
          </p>
        </div>
      </div>
      <div className="-mx-6 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 md:pl-3">
                Dia
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Horário
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Frequência
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {teams ? teams.map((team: iTeam) => (
              <tr key={team.id}>
                <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0 md:pl-3">
                  {team.team_data.teamDate}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {team.team_data.time}
                  
                </td>
                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {team.team_data.frequency}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {existTx(transactions, team) ? 
                    getPaymentStatus(transactions, team).key == 'paid' ?
                      <button onClick={() => getDetails(transactions,team)} className="flex justify-center border rounded-md border-emerald-500 text-emerald-500 py-1.5 px-2">
                        <CheckIcon className="w-4 h-4 my-auto mr-1" /> {getPaymentStatus(transactions, team).value}
                      </button>
                      :
                      <button onClick={() => payMe(transactions, team)} className="flex justify-center border rounded-md border-orange-400 text-orange-500 py-1.5 px-2">
                        <ExclamationTriangleIcon className="w-4 h-4 my-auto mr-1" /> Pague
                        {/* {getPaymentStatus(transactions, team).value} */}
                      </button>
                    : 
                    <button onClick={() => payTeam(team)} className="flex justify-center border rounded-md border-indigo-500 text-indigo-500 py-1.5 px-2">
                      <CreditCardIcon className="w-4 h-4 my-auto mr-1" /> Pagar
                    </button>
                  }
                  
                </td>
              </tr>
            )) : ''}
          </tbody>
        </table>
      </div>
    </div>
  )
}
