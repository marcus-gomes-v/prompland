import firebase from 'firebase'
import 'firebase/firestore'
import { iUser,  } from "../../typings"
import { useEffect, useState } from "react";
import Link from 'next/link';
import { CodeBracketIcon, EllipsisVerticalIcon, EnvelopeIcon, PhoneIcon, StarIcon } from '@heroicons/react/20/solid';


function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}


export default function DiscoverPromptsList({ user }: { user: iUser }) {

  const [prompts, setPrompts] = useState([])
  

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('prompts')
      .orderBy('votesCount', 'desc') // Order by 'votesCount' field in descending order
      .onSnapshot((querySnapshot) => {
        let aPrompts = [] as any;
        querySnapshot.forEach((doc) => {
          aPrompts.push({ ...doc.data()?.data, votes: doc.data()?.votes, id: doc.id, votesCount: doc.data()?.votesCount });
        });
        setPrompts(aPrompts);
      });

    // Clean up the listener on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const formatFunction = (version: string) => {
      // Replace "gpt" with "Gpt " and "default" with "Default "
    return version.replace(/gpt/g, 'GPT ').replace(/default/g, 'Default ').replace(/legacy/g, 'Legacy ');
  }


  String.prototype.initials = function (length = 2) {
    const words = this.split(" ");
    const initials = words.map(word => word.charAt(0)).join("");
    return initials.slice(0, length);
  };
  
  const likeThisOne = async (id: string) => {
    const promptRef = firebase.firestore().collection('prompts').doc(id);

    // Get the prompt document
    const promptDoc = await promptRef.get();

    if (!promptDoc.exists) {
      console.log("No such document!");
      return;
    }

    // Get the current 'votes' array
    const currentVotes = promptDoc.data()?.votes || [];

    // Check if the user's uid is in the 'votes' array
    const userIndex = currentVotes.indexOf(user.uid);

    // Calculate the increment value for the 'votesCount' field
    const incrementValue = userIndex === -1 ? 1 : -1;

    // Add or remove the user's uid from the 'votes' array
    if (userIndex === -1) {
      currentVotes.push(user.uid);
    } else {
      currentVotes.splice(userIndex, 1);
    }

    // Update the 'votes' array and increment the 'votesCount' field in the prompt document
    await promptRef.update({
      votes: currentVotes,
      votesCount: firebase.firestore.FieldValue.increment(incrementValue),
    });

    console.log(`User ${user.uid} ${userIndex === -1 ? 'liked' : 'unliked'} prompt ${id}`);
  };


  return (
    <div>
      <h1 className="text-xl font-semibold text-vibrant-blue-600 my-3">Discover Prompts</h1>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {prompts.map((prompt: any) => {
          return (
              <li key={prompt.id} className="cursor-pointer col-span-1 divide-y divide-gray-200 rounded-lg bg-white  shadow">
                <Link href={`/prompt/${prompt.id}`}>
                <div className="flex w-full items-center justify-between space-x-6 p-6 hover:bg-gray-100">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900">{prompt.name}</h3>
                        <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                          {prompt.promptAreas.length} Prompts
                        </span>
                      </div>
                      <p className="mt-1 truncate text-sm text-gray-500">{prompt.description || prompt.descriptions}</p>
                    </div>

                    <div
                      className={classNames(
                        prompt.color,
                        'h-10 w-10 inline-flex justify-center items-center rounded-full text-sm font-medium text-white'
                      )}>
                      {prompt.name.initials()}
                    </div>
                  </div>
                </Link>
                <div>
                <div className="-mt-px flex divide-x divide-gray-200 ">
                    <div className="flex w-0 flex-1">
                      <div
                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm  text-gray-500"
                      >
                        <CodeBracketIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        {prompt.gptVersion.map((version: string) => formatFunction(version)).join(', ')}
                      </div>
                    </div>
                    <div className="-ml-px flex w-0 flex-1 hover:bg-gray-100">
                      <button
                        onClick={() => likeThisOne(prompt.id)}
                        className="group relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 "
                      >
                      <StarIcon className={`h-5 w-5 ${prompt.votes && prompt.votes.includes(user.uid) ? "text-bright-yellow-500" : "text-gray-400" }  group-hover:text-bright-yellow-500`} aria-hidden="true" />
                      { prompt.votes ? prompt.votes.length : 0}
                      </button>
                    </div>
                  </div>
                </div>
              </li>
          );
        })}
      </ul>
    </div>
  )
}
