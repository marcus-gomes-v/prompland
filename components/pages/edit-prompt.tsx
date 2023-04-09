import { iUser } from '../../typings';
import Image from 'next/image';
import NewPromptForm from '../forms/new-prompt';
import { useEffect, useState } from 'react';
import firebase from 'firebase';

type FormValues = {
  name: string;
  description: string;
  hashtag: string;
  gptVersion: string[];
  textAreas: string[];
};

type Prompt = {
  id: string;
  author: string;
  author_data: {
    name: string;
    email: string;
    image: string;
  };
  date: string;
  data: FormValues;
};

export default function EditPrompt({ user, promptId }: { user: iUser, promptId: string }) {
  
  console.log(promptId)

  const [prompt, setPrompt] = useState<Prompt>({} as Prompt)

  useEffect(() => {
    firebase
      .firestore()
      .collection('prompts')
      .doc(promptId)
      .onSnapshot((doc) => {
        const prompt = { ...doc.data(), id: doc.id } as Prompt
        setPrompt(prompt)
      })
  }, [])  

  return (
    <main className="-mt-24 pb-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="sr-only">Profile</h1>
        {/* Main 3 column grid */}
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-8">
          {/* Left column */}
          <div className="grid grid-cols-1 gap-4 lg:col-span-2">
            {/* Welcome panel */}
            <section aria-labelledby="profile-overview-title">
              <div className="overflow-hidden rounded-lg bg-white shadow">
                <h2 className="sr-only" id="profile-overview-title">
                  Profile Overview
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
                  </div>
                </div>
              </div>
            </section>

            {/* Starting New Prompt */}
            { prompt && <NewPromptForm user={user} prompt={prompt}/> }
            {/* End New Prompt */}
          </div>
        </div>
      </div>
    </main>
  );
};
