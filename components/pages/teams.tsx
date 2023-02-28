import { PencilIcon, UserPlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import firebase from 'firebase'
import 'firebase/firestore'
import { useEffect, useState } from "react";
import AddMemberModal from '../modals/add-member-modal';
import DetailsTeamModal from '../modals/details-team-modal';
import NewTeamModal from "../modals/new-team-modal";
import Price from '../utils/Price';

export interface iTeams {
  id: string
  frequency: string
  paymentDate: string
  price: string
  teamDate: string
  time: string
  name: string
}

export default function Teams({ user }: { user: any }) {

  const [openTeamModal, setOpenTeamModal] = useState(false)
  const [openMemberModal, setOpenMemberModal] = useState(false)
  const [openDetailsModal, setOpenDetailsModal] = useState(false)
  const [teams, setTeams] = useState([])
  const [targetTeamId, setTargetTeamId] = useState('')
  const [targetTeam, setTargetTeam] = useState({})

  const handleModalMember = () => {
    openMemberModal ? setOpenMemberModal(false) : setOpenMemberModal(true)
  }

  const handleModalTeam = () => {
    openTeamModal ? setOpenTeamModal(false) : setOpenTeamModal(true)
  }

  const handleModalDetails = () => {
    openDetailsModal ? setOpenDetailsModal(false) : setOpenDetailsModal(true)
  }

  const selectFreqData = [
    { title: "Semanal", key: "semanal" },
    { title: "Mensal", key: "mensal" },
    { title: "Quinzenal", key: "quinzenal" },
  ]
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

  const addUser = (id: string) => {
    setTargetTeamId(id)
    handleModalMember()
  }

  const openDetails = (data: any) => {
    setTargetTeam(data)
    handleModalDetails()
  }

  const deleteDocument = (id: string) => {
    firebase.firestore().collection("teams").doc(id).delete().then(() => {
    console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
  }
  
  useEffect(() => {
    firebase
      .firestore()
      .collection('teams')
      .where("team_teacher", "==", firebase.auth().currentUser?.uid)
      .onSnapshot(querySnapshot => {
        const teamDocs: any = []
        querySnapshot.forEach((doc) => {
          teamDocs.push({ ...doc.data()?.team_data, name: doc.data()?.team_name, id: doc.id, members: doc.data()?.team_members })
        });
        setTeams(teamDocs)
      })
  }, [])



  return (
    <main className="-mt-24 pb-8">
      <NewTeamModal opened={openTeamModal} setOpened={setOpenTeamModal} />
      <AddMemberModal opened={openMemberModal} setOpened={setOpenMemberModal} teamId={targetTeamId} />
      <DetailsTeamModal opened={openDetailsModal} setOpened={setOpenDetailsModal} team={targetTeam} />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="sr-only">Turmas</h1>
        {/* Main 3 column grid */}
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-8">
          {/* Left column */}
          <div className="grid grid-cols-1 gap-4 lg:col-span-2">
            {/* Welcome panel */}
            <section aria-labelledby="profile-overview-title">
              <div className="overflow-hidden rounded-lg bg-white shadow">
                <h2 className="sr-only" id="profile-overview-title">
                  Teams Overview
                </h2>
                <div className="bg-white p-6">
                  <div className="sm:flex sm:items-center sm:justify-between">
                    
                    <div className="sm:flex-auto">
                      <h1 className="text-xl font-semibold text-gray-900">Turmas</h1>
                      <p className="mt-2 text-sm text-gray-700">
                        Aqui você possui a lista de todas as turmas de treinamentos que você possui.
                      </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                      <button
                        onClick={handleModalTeam}
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                      >
                        Nova Turma
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Actions panel */}
            <section aria-labelledby="quick-links-title">
              <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Nome
                            </th>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                              Dias
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Hora
                            </th>
                            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
                              Frequência
                            </th>
                            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
                              Valor
                            </th>
                            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
                              Data de Pagamento
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                              Ações
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {teams ? teams.map((team: iTeams, id) => (
                            <tr key={id}>
                              <td className="px-3 py-4 text-sm text-gray-500">
                                <div className="text-gray-900">{team.name}</div>
                              </td>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                <div className="flex items-center">
                                  <div className="">
                                    <div className="font-medium text-gray-900">{selectDateData.filter(e => e.key == team.teamDate)[0].title}</div>
                                  </div>
                                </div>
                              </td>
                              
                              <td className="px-3 py-4 text-sm text-gray-500">
                                <div className="text-gray-900">{team.time}</div>
                              </td>
                              <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                                <div className="text-gray-900">{selectFreqData.filter(e => e.key == team.frequency)[0].title}</div>
                              </td>
                              <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                                <div className="text-gray-900"><Price value={+team.price} /></div> 
                              </td>
                              <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">{team.paymentDate} de todo mês.</td>
                              <td className="flex space-x-1 lg:space-x-3 justify-center py-4 pl-3 pr-4 sm:pr-6">
                                <button onClick={() => addUser(team.id)} className="text-center text-indigo-600 hover:text-indigo-900 border-indigo-600 lg:hover:text-indigo-50 lg:hover:bg-indigo-600 border rounded-sm p-2 w-9 h-9">
                                  <UserPlusIcon className='h-4 w-4' />
                                </button>
                                <button onClick={() => openDetails(team)} className="text-center text-cyan-600 hover:text-cyan-900 border-cyan-600 lg:hover:text-cyan-50 lg:hover:bg-cyan-600 border rounded-sm p-2 w-9 h-9">
                                  <PencilIcon className='h-4 w-4' />
                                </button>
                                <button onClick={() => deleteDocument(team.id)} className="text-center text-rose-600 hover:text-rose-900 border-rose-600 lg:hover:text-rose-50 lg:hover:bg-rose-600 border rounded-sm p-2 w-9 h-9" >
                                  <XMarkIcon className='h-4 w-4' />
                                </button>
                                
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
          </div>
        </div>
      </div>
    </main>
  )
}