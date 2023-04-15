import firebase from 'firebase'
import 'firebase/firestore'
import { iUser  } from "../../typings"
import { useEffect, useState } from "react";
import Link from 'next/link';
import { ChatBubbleLeftIcon, CodeBracketIcon, CommandLineIcon, EllipsisVerticalIcon, EnvelopeIcon, MagnifyingGlassIcon, PhoneIcon, StarIcon } from '@heroicons/react/20/solid';
import RequestPromptModal from '../modals/request-prompt';

interface iPrompt {
  id: string;
  name: string;
  description?: string;
  descriptions?: string;
  promptAreas: string[];
  color: string;
  gptVersion: string[];
  votes: string[];
  votesCount: number;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

interface iSearchBadge {
  label: string;
  bgColor: string;
  textColor: string;
}

const searchBadges: iSearchBadge[] = [
  { label: "All", bgColor: "bg-gray-700", textColor: "text-white" },
  { label: "for youtube", bgColor: "bg-red-500", textColor: "text-white" },
  { label: "for facebook", bgColor: "bg-blue-500", textColor: "text-white" },
  { label: "for linkedin", bgColor: "bg-sky-500", textColor: "text-white" },
  { label: "for twitter", bgColor: "bg-blue-400", textColor: "text-white" },
  { label: "for midjourney", bgColor: "bg-purple-500", textColor: "text-white" },
  { label: "for story telling", bgColor: "bg-yellow-500", textColor: "text-gray-800" },
  { label: "for tiktok", bgColor: "bg-black", textColor: "text-white" },
  { label: "for ux", bgColor: "bg-orange-500", textColor: "text-white" },
  { label: "for developers", bgColor: "bg-gray-500", textColor: "text-white" },
  { label: "for sellers", bgColor: "bg-green-500", textColor: "text-white" },
  { label: "for email marketing", bgColor: "bg-pink-500", textColor: "text-white" },
];

export default function DiscoverPromptsList({ user }: { user: iUser }) {

  const [prompts, setPrompts] = useState([])
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredPrompts, setFilteredPrompts] = useState([]);
  const [openModal, setOpenModal] = useState(false)

  // CACHE AREA
  function savePromptsToLocalStorage(prompts: any) {
    const data = {
      prompts: prompts,
      timestamp: new Date().getTime(),
    };
    localStorage.setItem('cachedPrompts', JSON.stringify(data));
  }

  function loadPromptsFromLocalStorage() {
    const data = localStorage.getItem('cachedPrompts');
    if (data) {
      const parsedData = JSON.parse(data);
      return parsedData;
    }
    return null;
  }

  function isCacheExpired(timestamp: any, cacheDurationInMinutes = 15) {
    const now = new Date().getTime();
    const difference = (now - timestamp) / (1000 * 60);
    return difference > cacheDurationInMinutes;
  }

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

  };

  useEffect(() => {
    setFilteredPrompts(
      searchTerm.trim() === '' || searchTerm.trim() === 'All'
        ? prompts
        : prompts.filter((prompt: iPrompt) => {
          const searchTerms = searchTerm.trim().toLowerCase().split(' ');
          return searchTerms.every(
            (term) =>
              prompt.name?.toLowerCase().includes(term) ||
              prompt.description?.toLowerCase().includes(term) ||
              prompt.descriptions?.toLowerCase().includes(term) ||
              prompt.promptAreas?.some((area) => area.toLowerCase().includes(term))
          );
        })
    );
  }, [prompts, searchTerm]);

  useEffect(() => {
    const cachedData = loadPromptsFromLocalStorage();

    if (cachedData && !isCacheExpired(cachedData.timestamp)) {
      setPrompts(cachedData.prompts);
      console.log('Load from the cache')
    } else {
      console.log('Load from firebase')
      const unsubscribe = firebase
        .firestore()
        .collection('prompts')
        .orderBy('votesCount', 'desc')
        .onSnapshot((querySnapshot) => {
          let aPrompts = [] as any;
          querySnapshot.forEach((doc) => {
            aPrompts.push({ ...doc.data()?.data, votes: doc.data()?.votes, id: doc.id, votesCount: doc.data()?.votesCount });
          });
          setPrompts(aPrompts);
          savePromptsToLocalStorage(aPrompts);
        });

      // Clean up the listener on unmount
      return () => {
        unsubscribe();
      };
    }
  }, []);


  return (
    <div>
      <RequestPromptModal opened={openModal} setOpened={setOpenModal} user={user} />
      <h1 className="text-xl font-semibold text-vibrant-blue-600 mt-3 mb-0 pb-0">Discover Prompts</h1>
      <div className="items-center space-y-3 py-6">
        <div className='flex items-center space-x-3'>
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-vibrant-blue-500 focus:border-vibrant-blue-500 sm:text-sm"
              placeholder="Search prompts"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Request Prompt
            <CommandLineIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="flex space-x-2">
          {searchBadges.map((badge, index) => (
            <span
              key={index}
              onClick={() => setSearchTerm(badge.label)}
              className={`cursor-pointer inline-flex items-center rounded ${badge.bgColor} ${badge.textColor} px-2 py-0.5 text-sm font-medium`}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPrompts.map((prompt: any) => {
          return (
              <li key={prompt.id} className="cursor-pointer col-span-1 divide-y divide-gray-200 rounded-lg bg-white  shadow">
              <Link href={`/prompt/${prompt.id}`} prefetch={true}>
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
