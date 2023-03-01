import firebase from 'firebase'
import 'firebase/firestore'
import { iUser,  } from "../../typings"
import { useEffect, useState } from "react";
import Price from '../utils/Price';


export default function Table({ user }: { user: iUser }) {

  const [projects, setProjects] = useState([])
  

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .onSnapshot((querySnapshot) => {
        let aProjects = [] as any
        querySnapshot.forEach((doc) => {
          aProjects.push({ ...doc.data()?.data, name: doc.data()?.name, id: doc.id})
        })
        setProjects(aProjects)
      })
  }, [])  
  

  return (
    <div className="px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Projects</h1>
          <p className="mt-2 text-sm text-gray-700">
            Here you can find a list of all the projects we have available for investment.
          </p>
        </div>
      </div>
      <div className="-mx-6 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 md:pl-3">
                Name
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Investment
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {projects ? projects.map((projet: any) => (
              <tr key={projet.id}>
                <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0 md:pl-3">
                  {projet.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  <Price value={+projet.price} />
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  
                </td>
              </tr>
            )) : ''}
          </tbody>
        </table>
      </div>
    </div>
  )
}
