import { useEffect, useState } from "react";
import { iUser } from "../../typings";
import firebase from 'firebase/app';
import 'firebase/firestore';
import Link from 'next/link';
import { CodeBracketIcon, MagnifyingGlassIcon, StarIcon } from '@heroicons/react/20/solid';

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

interface iSearchBadge {
  label: string;
}

const searchBadges: iSearchBadge[] = [
  { label: "for youtube creators" },
  { label: "for linkedin" },
  { label: "for twitter" },
  { label: "for midjourney" },
  { label: "for story telling" },
  { label: "for tiktok" },
  { label: "for ux" },
  { label: "for developers" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function DiscoverPromptsList({ user }: { user: iUser }) {
  const [prompts, setPrompts] = useState<iPrompt[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredPrompts, setFilteredPrompts] = useState<iPrompt[]>([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore()
      .collection('prompts')
      .orderBy('votesCount', 'desc')
      .onSnapshot((querySnapshot) => {
        const aPrompts = [] as iPrompt[];
        querySnapshot.forEach((doc) => {
          aPrompts.push({
            id: doc.id,
            ...doc.data()
          } as iPrompt);
        });
        setPrompts(aPrompts);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    setFilteredPrompts(
      searchTerm.trim() === ''
        ? prompts
        : prompts.filter((prompt) => {
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

  const formatFunction = (version: string) => {
    return version.replace(/gpt/g, 'GPT ')
      .replace(/default/g, 'Default ')
      .replace(/legacy/g, 'Legacy ');
  }

  const likeThisOne = async (id: string) => {
    const promptRef = firebase.firestore().collection('prompts').doc(id);
    const promptDoc = await promptRef.get();
    if (!promptDoc.exists) {
      console.log("No such document!");
      return;
    }

    const currentVotes = promptDoc.data()?.votes || [];
    const userIndex = currentVotes.indexOf(user.uid);
    const incrementValue = userIndex === -1 ? 1 : -1;

    if (userIndex === -1) {
      currentVotes.push(user.uid);
    } else {
      currentVotes.splice(userIndex, 1);
    }

    await promptRef.update({
      votes: currentVotes,
      votesCount: firebase.firestore.FieldValue.increment(incrementValue),
    });

    console.log(`User ${user.uid} ${userIndex === -1 ? 'liked' : 'unliked'} prompt ${id}`);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold text-vibrant-blue-600 my-3">Discover Prompts</h1>
      <div className="flex items-center space-x-2">
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
        <div className="flex space-x-2">
          {searchBadges.map((badge, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800"
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPrompts.map((prompt) => (
          prompt && prompt.id && prompt.name && prompt.color && prompt.gptVersion && prompt.promptAreas && prompt.votes && prompt.votesCount &&
          <li key={prompt.id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
            <Link href={`/prompt/${prompt.id}`}>
              <a className="block hover:bg-gray-100">
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-sm font-medium text-gray-900 truncate">{prompt.name}</h3>
                      <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        {prompt.promptAreas.length} Prompts
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 truncate">
                      {prompt.description || prompt.descriptions}
                    </p>
                  </div>
                  <div
                    className={classNames(
                      prompt.color,
                      'inline-flex items-center justify-center h-10 w-10 rounded-full text-sm font-medium text-white'
                    )}
                  >
                    {prompt.name.initials()}
                  </div>
                </div>
                <div className="flex items-center justify-between px-6 py-2">
                  <div className="flex items-center space-x-3">
                    <CodeBracketIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    {prompt.gptVersion.map((version: string) => formatFunction(version)).join(', ')}
                  </div>
                  <button
                    onClick={() => likeThisOne(prompt.id)}
                    className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-md text-gray-900 bg-gray-100 hover:bg-gray-200"
                  >
                    <StarIcon className={`text-gray-400 group-hover:text-bright-yellow-500 ${prompt.votes && prompt.votes.includes(user.uid) ? 'text-bright-yellow-500' : 'text-gray-400'}`} aria-hidden="true"
                    />
                    <span className="ml-1">{prompt.votes ? prompt.votes.length : 0}</span>
                  </button>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div >
  );
}