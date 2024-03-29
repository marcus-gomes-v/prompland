import { iUser } from '../../typings';
import Image from 'next/image';
import NewPromptForm from '../forms/new-prompt';
import { useEffect, useState } from 'react';
import firebase from 'firebase';
import DetailsPromptList from '../lists/deails-prompt-list';
import Link from 'next/link';
import { BackwardIcon } from '@heroicons/react/20/solid';

type FormValues = {
  name: string;
  description: string;
  hashtag: string;
  gptVersion: string[];
  promptAreas: string[];
  sequential?: boolean;
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

export default function PromptDetailData({ user, prompt }: { user: iUser, prompt: Prompt }) {

  const [ promptDetail, setPromptDetail ] = useState<Prompt>()

  useEffect(() => {
    if (prompt){
      setPromptDetail(prompt)
    }
  }, [prompt])  
  return (
    <div>
      <Link href="/discover-prompts" >
        <a className="flex items-center py-3 text-gray-900 text-sm">
          <BackwardIcon className="mr-2 h-3 w-3" /> Back to list
        </a>
      </Link>
      <h1 className="text-xl font-semibold text-vibrant-blue-600 my-3">Prompt Detail</h1>

      {
        promptDetail &&
        <>
          <div className="mb-5 grid lg:grid-cols-2 lg:gap-9">
            <div className="bg-white rounded-lg shadow-lg p-5">
              <p className="text-xl font-semibold text-turquoise-600 mb-3 w-80 md:w-full">{promptDetail?.data.name}</p>
              <p className="text-gray-700 mb-3 text-md text-justify w-80 md:w-full">{promptDetail?.data.description}</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5">
              <div className="flex items-center mb-3">
                <img className="w-12 h-12 rounded-full mr-3" src={prompt.author_data.image} alt="Lerigo" />
                <div>
                  <span className='text-sm font-semibold text-turquoise-600'>Author</span>
                    <p className="font-semibold">{prompt.author_data.name}</p>
                    {/* <p className="text-gray-600">{prompt.author_data.email}</p> */}
                </div>
              </div>
              <span className='text-sm font-semibold text-turquoise-600'>Tags: </span>
              <p className="text-gray-600 text-sm truncate w-80 md:w-full">{promptDetail?.data.hashtag}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-5 mb-5">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-turquoise-600 my-3">Prompt Code</h1>
              <p className="mt-2 text-md text-gray-700">
                {prompt.data.sequential ? 
                  <>
                    To set up ChatGPT for your specific needs, simply click on each code from the beginning to the end, copy them, and paste them into ChatGPT. This will tailor the AI to your requirements.
                  </>
                  :
                  <>
                    Browse through all the prompts available in this category and try them out to discover which one appeals to you the most.
                  </>
                } 
              </p>
            </div>
            <DetailsPromptList promptCode={prompt.data.promptAreas} sequential={prompt.data.sequential || false}/>
          </div>
        </>
      }
    </div>
  );
};
