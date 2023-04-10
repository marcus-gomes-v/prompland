import firebase from 'firebase'
import 'firebase/firestore'
import { iUser,  } from "../../typings"
import { useEffect, useState } from "react";
import Link from 'next/link';
import { EllipsisVerticalIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}


export default function DiscoverPromptsList({ user }: { user: iUser }) {

  const [prompts, setPrompts] = useState([])
  

  useEffect(() => {
    firebase
      .firestore()
      .collection('prompts')
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

  const giveMeColor = () => {
    const colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "teal",
      "blue",
      "indigo",
      "purple",
      "pink",
    ];
    const index = Math.floor(Math.random() * colors.length);
    return `bg-${colors[index]}-500`;
  }

  String.prototype.initials = function (length = 2) {
    const words = this.split(" ");
    const initials = words.map(word => word.charAt(0)).join("");
    return initials.slice(0, length);
  };
  

  return (
    <div>
      <h1 className="text-xl font-semibold text-vibrant-blue-600 my-3">Discover Prompts</h1>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {prompts.map((prompt: any) => {
          return (
            <Link key={prompt.id} href={`/prompt/${prompt.id}`}>
              <li className="cursor-pointer col-span-1 divide-y divide-gray-200 rounded-lg bg-white hover:bg-gray-100 shadow">
                <div className="flex w-full items-center justify-between space-x-6 p-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-900">{prompt.name}</h3>
                      <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        {prompt.promptAreas.length} Commands
                      </span>
                    </div>
                    <p className="mt-1 truncate text-sm text-gray-500">{prompt.description}</p>
                  </div>

                  <div
                    className={classNames(
                      prompt.color,
                      'h-10 w-10 inline-flex justify-center items-center rounded-full text-sm font-medium text-white'
                    )}>
                    {prompt.name.initials()}
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  )
}
