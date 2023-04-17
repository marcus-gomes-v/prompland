import Image from "next/image";
import {
  MagnifyingGlassIcon,
  PencilIcon,
} from '@heroicons/react/24/outline'
import { iUser } from '../../typings';
import Invitation from "../invitation/invitation";
import InvitationList from "../lists/invitations-list";
import firebase from "firebase";
import { generateRandomString } from "../../lib/utils";
import { useEffect, useState } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard({ user }: { user: iUser }) {
  const [invitations, setInvitations] = useState<Object | null>(null)

  const actions = user.type === 'user' ? [
    {
      icon: MagnifyingGlassIcon,
      name: 'Discover Prompts',
      href: '/discover-prompts',
      description: 'Explore a wide range of AI prompts shared by the community. Discover new and interesting prompts for various AI applications and use cases.',
      iconForeground: 'text-turquoise-700',
      iconBackground: 'bg-vibrant-blue-50',
    },
    {
      icon: PencilIcon,
      name: 'Create Prompts',
      href: '/create-prompts',
      description: 'Create your own AI prompts and share them with the community. Contribute to the growing collection of prompts and receive feedback from fellow users.',
      iconForeground: 'text-turquoise-700',
      iconBackground: 'bg-vibrant-blue-50',
    },
  ] : []

  const generateInvitation = async () => {
    const userExists = await new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection('invitations')
        .doc(user.uid)
        .onSnapshot(function (doc: any) {
          resolve(doc.data())
        })
    })
    if (!userExists) {
      await firebase
        .firestore()
        .collection('invitations')
        .doc(user.uid)
        .set({
          user: {
            name: user.name,
            image: user.imageUrl
          },
          invitations: [
            generateRandomString(16),
            generateRandomString(16)
          ]
        })
      console.log('Code generated with success');
    } else {
      console.log('You already generate your codes.');
    }
  }

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('invitations')
      .doc(user.uid)
      .onSnapshot(function (doc: any) {
        setInvitations(doc.data())
      })

    // Clean up the listener on unmount
    return () => {
      unsubscribe();
    };
  }, []);
 
  return (
    <main className="-mt-24 pb-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="sr-only">Dashboard</h1>
        {/* Main 3 column grid */}
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-8">
          {/* Left column */}
          <div className="grid grid-cols-1 gap-4 lg:col-span-2">
            {/* Welcome panel */}
            {user.invited ?
              (
                <>
                  <section aria-labelledby="profile-overview-title">
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                      <h2 className="sr-only" id="profile-overview-title">
                        Dashboard Overview
                      </h2>
                      <div className="bg-white p-6">
                        <div className="sm:flex sm:items-center sm:justify-between">
                          <div className="sm:flex sm:space-x-5">
                            <div className="w-full text-center md:w-30">
                              <Image height={96} width={96} className="mx-auto h-20 w-20 rounded-full" src={user.imageUrl} alt="" />
                            </div>
                            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                              <p className="text-sm font-medium text-gray-600">Welcome,</p>
                              <p className="text-xl font-bold text-gray-900 sm:text-2xl">{user.name}</p>
                              <p className="text-sm font-medium text-gray-600">{user.email}</p>
                            </div>
                          </div>
                          <div>
                            {
                              invitations ?
                               <>
                                  <h2>Your Invitations</h2>
                                  <InvitationList invitations={invitations} />
                               </> :
                               <>
                                  <button 
                                    onClick={generateInvitation}
                                    className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Generate Invitation Codes
                                  </button>
                               </>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  < section aria-labelledby="quick-links-title">
                    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
                      <h2 className="sr-only" id="quick-links-title">
                        Quick links
                      </h2>
                      {actions.map((action, actionIdx) => (
                        <div
                          key={action.name}
                          className={classNames(
                            actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                            actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                            'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500'
                          )}
                        >
                          <div>
                            <span
                              className={classNames(
                                action.iconBackground,
                                action.iconForeground,
                                'rounded-lg inline-flex p-3 ring-4 ring-white'
                              )}
                            >
                              <action.icon className="h-6 w-6" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="mt-8">
                            <h3 className="text-lg font-medium">
                              <a href={action.href} className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span className="absolute inset-0" aria-hidden="true" />
                                {action.name}
                              </a>
                            </h3>
                            <p className="mt-2 text-sm text-gray-500">
                              {action.description}
                            </p>
                          </div>
                          <span
                            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                            aria-hidden="true"
                          >
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                            </svg>
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                </>
              ) : 
              <>
                <Invitation user={user} />
              </>
            }
            
          </div>
        </div>
      </div>
    </main>
  )
}