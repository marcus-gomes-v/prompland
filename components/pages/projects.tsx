import { PencilIcon, UserPlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import firebase from 'firebase'
import 'firebase/firestore'
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import AddMemberModal from '../modals/add-member-modal';
import DetailsModal from '../modals/details-modal';
import NewModal from "../modals/new-modal";
import Price from '../utils/Price';

export interface iTeams {
  id: string
  frequency: string
  paymentDate: string
  price: string
  time: string
  name: string
}

export default function Projects({ user }: { user: any }) {

  const [openNewModal, setOpenNewModal] = useState(false)
  const [openDetailsModal, setOpenDetailsModal] = useState(false)
  const [projects, setProjects] = useState([])
  const [targetTeam, setTargetTeam] = useState({})


  const handleModalTeam = () => {
    openNewModal ? setOpenNewModal(false) : setOpenNewModal(true)
  }

  const handleModalDetails = () => {
    openDetailsModal ? setOpenDetailsModal(false) : setOpenDetailsModal(true)
  }

  const openDetails = (data: any) => {
    setTargetTeam(data)
    handleModalDetails()
  }

  const deleteDocument = (id: string) => {
    Swal.fire({
      title: 'Do you want to delete the project?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      icon: 'question',
      confirmButtonColor: '#099387'
    }).then((result) => {
      if (result.isConfirmed) {
        firebase.firestore().collection("projects").doc(id).delete()
        .then(() => {
          Swal.fire({
            title: 'Success',
            text: 'Project successfully deleted!',
            confirmButtonText: 'Yes',
            icon: 'success',
            confirmButtonColor: '#099387'
          })
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
      } 
    })
  }
  
  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where("owner", "==", firebase.auth().currentUser?.uid)
      .onSnapshot(querySnapshot => {
        const teamDocs: any = []
        querySnapshot.forEach((doc) => {
          teamDocs.push({ ...doc.data()?.data, name: doc.data()?.name, id: doc.id, members: doc.data()?.team_members })
        });
        setProjects(teamDocs)
      })
  }, [])



  return (
    <main className="-mt-24 pb-8">
      <NewModal opened={openNewModal} setOpened={setOpenNewModal} />
      <DetailsModal opened={openDetailsModal} setOpened={setOpenDetailsModal} data={targetTeam} />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="sr-only">Projects</h1>
        {/* Main 3 column grid */}
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-8">
          {/* Left column */}
          <div className="grid grid-cols-1 gap-4 lg:col-span-2">
            {/* Welcome panel */}
            <section aria-labelledby="profile-overview-title">
              <div className="overflow-hidden rounded-lg bg-white shadow">
                <h2 className="sr-only" id="profile-overview-title">
                  Projects Overview
                </h2>
                <div className="bg-white p-6">
                  <div className="sm:flex sm:items-center sm:justify-between">
                    
                    <div className="sm:flex-auto">
                      <h1 className="text-xl font-semibold text-gray-900">Projects</h1>
                      <p className="mt-2 text-sm text-gray-700">
                        Here you can add new projects to companies be able to see.
                      </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                      <button
                        onClick={handleModalTeam}
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
                      >
                        New Project
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
                              Name
                            </th>
                            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
                              Value
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                              
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {projects ? projects.map((project: iTeams, id) => (
                            <tr key={id}>
                              <td className="px-3 py-4 text-sm text-gray-500">
                                <div className="text-gray-900">{project.name}</div>
                              </td>
                              <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                                <div className="text-gray-900"><Price value={+project.price} /></div> 
                              </td>
                              <td className="flex space-x-1 lg:space-x-3 justify-center py-4 pl-3 pr-4 sm:pr-6">
                                
                                <button onClick={() => openDetails(project)} className="text-center text-cyan-600 hover:text-cyan-900 border-cyan-600 lg:hover:text-cyan-50 lg:hover:bg-cyan-600 border rounded-sm p-2 w-9 h-9">
                                  <PencilIcon className='h-4 w-4' />
                                </button>
                                <button onClick={() => deleteDocument(project.id)} className="text-center text-rose-600 hover:text-rose-900 border-rose-600 lg:hover:text-rose-50 lg:hover:bg-rose-600 border rounded-sm p-2 w-9 h-9" >
                                  <XMarkIcon className='h-4 w-4' />
                                </button>
                                
                              </td>
                            </tr>
                          )) : <tr><td colSpan={4} className="pl-6 py-3">No projects available...</td></tr>}
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