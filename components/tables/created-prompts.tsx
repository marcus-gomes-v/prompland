import firebase from 'firebase'
import 'firebase/firestore'
import { iUser,  } from "../../typings"
import { useEffect, useState } from "react";
import Price from '../utils/Price';
import Link from 'next/link';
import { PencilIcon, SquaresPlusIcon } from '@heroicons/react/20/solid';


export default function CreatedPromptsTable({ user }: { user: iUser }) {

  const [prompts, setPrompts] = useState([])
  

  useEffect(() => {
    firebase
      .firestore()
      .collection('prompts')
      .where('author', '==', firebase.auth().currentUser?.uid)
      .onSnapshot((querySnapshot) => {
        let aPrompts = [] as any
        querySnapshot.forEach((doc) => {
          aPrompts.push({ ...doc.data()?.data, id: doc.id })
        })
        setPrompts(aPrompts)
      })
  }, [])  

  const formatFunction = (version: string) => {
      // Replace "gpt" with "Gpt " and "default" with "Default "
    return version.replace(/gpt/g, 'GPT ').replace(/default/g, 'Default ').replace(/legacy/g, 'Legacy ');
  }
  

  return (
    <div>

      <div className="flex sm:items-center justify-around">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-vibrant-blue-600 my-3">My Prompts</h1>
          <p className="mt-2 text-sm text-gray-700">
            Here you can find a list of all the prompts that you created.
          </p>
        </div>
        <Link href={'/new-prompt'}>
          <button className="bg-transparent text-sm mr-1 text-vibrant-blue-600 border-vibrant-blue-600 transition duration-300 ease-in-out hover:border-turquoise-600 hover:bg-turquoise-600 hover:text-white font-light py-1 px-3 rounded border my-3">
            <SquaresPlusIcon className="h-4 w-4 inline my-auto mr-1" aria-hidden="true" />
            New Prompt
          </button>
        </Link>
      </div>

      <div className="-mx-6 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300 rounded-lg bg-white shadow">
          <thead>
            <tr>
              <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 md:pl-3">
                Name
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                GPT Version
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {prompts ? prompts.map((prompt: any) => (
              <tr key={prompt.id}>
                <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0 md:pl-3">
                  {prompt.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {prompt.gptVersion.map((version: string) => formatFunction(version)).join(', ')}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 flex justify-end">
                  <Link href={`/edit-prompt/${prompt.id}`}>
                    <button type="button"
                      className="bg-transparent text-green-500 border border-green-500 transition duration-300 ease-in-out hover:bg-green-600 hover:text-white focus:outline-none rounded-md px-2 py-1"
                    >
                      <PencilIcon className="h-4 w-4 inline my-auto mr-1" aria-hidden="true" />
                      <span className='inline align-middle'>Edit Prompt</span>
                    </button>
                  </Link>
                </td>
              </tr>
            )) : ''}
          </tbody>
        </table>
      </div>
    </div>
  )
}
