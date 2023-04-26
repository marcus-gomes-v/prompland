import { useEffect, useState } from 'react';
import { iUser } from '../../typings';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid';
import firebase from 'firebase';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import SwitchInput from '../inputs/switch-input';

type FormValues = {
  name: string;
  description: string;
  hashtag: string;
  gptVersion: string[];
  promptAreas: string[];
  color: string;
  sequential: boolean;
};

type NewPromptFormProps = {
  user: iUser;
  prompt?: {
    id: string;
    author: string;
    author_data: {
      name: string;
      email: string;
      image: string;
    };
    date: string;
    data: FormValues;
    votes?: [],
    votesCount?: number
  };
};

export default function NewPromptForm({ user, prompt }: NewPromptFormProps) {
  const router = useRouter();

  const totalAmount = 6763

  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    description: '',
    hashtag: '',
    gptVersion: ['default3.5'],
    promptAreas: [''],
    color: '',
    sequential: false
  });

  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (index: number, e: React.ChangeEvent<HTMLTextAreaElement>) => {
    
    
    const newTextAreas = [...formValues.promptAreas];

    newTextAreas[index] = e.target.value;
    setFormValues(prevValues => ({
      ...prevValues,
      promptAreas: newTextAreas,
    }));
  };

  const handleAddTextArea = () => {
    setFormValues(prevValues => ({
      ...prevValues,
      promptAreas: [...prevValues.promptAreas, ''],
    }));
  };

  const handleRemoveTextArea = (index: number) => {
    setFormValues(prevValues => ({
      ...prevValues,
      promptAreas: prevValues.promptAreas.filter((_, i) => i !== index),
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormValues(prevValues => {
      let updatedGptVersion = [...prevValues.gptVersion];
      if (checked) {
        updatedGptVersion.push(name);
      } else {
        updatedGptVersion = updatedGptVersion.filter(version => version !== name);
      }
      return {
        ...prevValues,
        gptVersion: updatedGptVersion,
      };
    });
  };

 
  const sendData = async (data: any) => {
    try {
      if (prompt) {
        await firebase
          .firestore()
          .collection('prompts')
          .doc(prompt.id)
          .update({
            author_data: {
              name: user.name,
              email: user.email,
              image: user.imageUrl,
            },
            data: data,
          });
      } else {
        firebase
          .firestore()
          .collection('prompts')
          .add({
            author: firebase.auth().currentUser?.uid,
            author_data: {
              name: user.name,
              email: user.email,
              image: user.imageUrl
            },
            date: new Date(),
            data: data,
            votes: [],
            votesCount: 0
          })
      }
      
      // Remove items from local storage
      localStorage.removeItem('created-prompts');
      localStorage.removeItem('cachedPrompts');

      Swal.fire('Success', 'Prompt saved with success', 'success').then(() => {
        router.push('/create-prompts');
      });
    } catch (error) {
      console.log(error)
    }
  }

  function giveMeColor() {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formValues.color = giveMeColor()
    sendData(formValues)
  };


  useEffect(() => {
    if (prompt?.data){
      const promptData = prompt?.data
      setFormValues(
        {
          name: promptData.name,
          description: promptData.description,
          hashtag: promptData.hashtag,
          gptVersion: promptData.gptVersion,
          promptAreas: promptData.promptAreas,
          color: promptData.color,
          sequential: promptData.sequential || false,
        }
      )
    }
  }, [prompt])  


  const handleInputSwitch = (e: boolean) => {
    setFormValues(prevValues => ({
      ...prevValues,
      sequential: e,
    }));
  }


  return (
    <form className="space-y-10 divide-y divide-gray-900/10" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Details</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Name your prompt and write a brief, enticing description with relevant hashtags.
          </p>
        </div>

        <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                  Prompt Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vibrant-blue-600 focus:ring focus:ring-vibrant-blue-600 focus:ring-opacity-50"
                    value={formValues.name}
                    onChange={handleInputChange}
                    placeholder="Midjourney Prompt Professional Photographer"
                    required
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  About the prompt
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vibrant-blue-600 focus:ring focus:ring-vibrant-blue-600 focus:ring-opacity-50"
                    value={formValues.description}
                    rows={3}
                    onChange={handleInputChange}
                    required
                    placeholder='Discover the future of photography as a professional photographer. 📸 From amazing landscapes to breathtaking portraits, explore the limitless possibilities. Unleash your imagination and envision a world beyond our time. ✨'
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your prompt.</p>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Hashtag
                </label>
                <div className="mt-2">
                  <textarea
                    id="hashtag"
                    name="hashtag"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-vibrant-blue-600 focus:ring focus:ring-vibrant-blue-600 focus:ring-opacity-50"
                    value={formValues.hashtag}
                    onChange={handleInputChange}
                    required
                    placeholder='#photographytips #creativeprompts #photographyideas #visualinspiration #photochallenge #creativityboost #creativephotography #photoinspiration #photoprompts'
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few hashtags to help people find your prompt.</p>
              </div>

            </div>
          </div>
         
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Prompt Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Add and remove prompt areas, which should be specific topics or themes for participants to explore.
          </p>
        </div>

        <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className='w-full'>
              <div className='mb-6'>
                <SwitchInput title='Sequential Prompt' subTitle='Those prompts should be use sequential to setup ChatGPT?' handle={handleInputSwitch} startState={formValues.sequential} />
              </div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Prompts
              </label>
              {formValues.promptAreas.map((textArea, index) => (
                <div key={index} className="flex items-center mb-2">
                  <textarea
                    className="flex-grow mr-2 rounded-md border-gray-300 shadow-sm focus:border-vibrant-blue-600 focus:ring focus:ring-vibrant-blue-600 focus:ring-opacity-50"
                    value={textArea}
                    onChange={(e) => handleTextAreaChange(index, e)}
                    required
                    maxLength={totalAmount}
                  />
                  {index > 0 ? 
                    <button
                      type="button"
                      className="bg-transparent text-red-600 transition duration-300 ease-in-out hover:text-red-800 focus:outline-none"
                      onClick={() => handleRemoveTextArea(index)}
                      disabled={formValues.promptAreas.length === 1}
                    >
                      <MinusCircleIcon className="h-4 w-4 inline my-auto mr-1" aria-hidden="true" />
                    </button>
                    : ''
                  }
                </div>
              ))}
              <button type="button"
                className="bg-transparent text-green-500 border border-green-500 transition duration-300 ease-in-out hover:bg-green-600 hover:text-white focus:outline-none rounded-md px-2 py-1"
                onClick={handleAddTextArea}
              >
                <PlusCircleIcon className="h-4 w-4 inline my-auto mr-1" aria-hidden="true" />
                <span className='inline align-middle'>Prompt Area</span>
              </button>
            </div>
          </div>
         
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-gray-900">GPT Version</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Select the GPT version(s) you used to generate prompts for your participants. This helps others understand the language model(s) you used.
          </p>
        </div>

        <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="max-w-2xl space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">GPT Version</legend>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Select the version of GPT you tested for the prompt.
                </p>
                <div className="mt-6 space-y-6">
                  <label className="block font-medium text-gray-700">
                    
                  </label>
                  <div className="flex flex-col">
                    <label className="inline-flex items-center mt-1">
                      <input
                        type="checkbox"
                        name="legacy3.5"
                        value="legacy3.5"
                        className="rounded border-gray-300 shadow-sm focus:border-vibrant-blue-600 focus:ring focus:ring-vibrant-blue-600 focus:ring-opacity-50"
                        checked={formValues.gptVersion.includes('legacy3.5')}
                        onChange={handleCheckboxChange}
                      />
                      <span className="ml-2 text-sm font-normal text-gray-900">GPT Legacy 3.5</span>
                    </label>
                    <label className="inline-flex items-center mt-1">
                      <input
                        type="checkbox"
                        name="default3.5"
                        value="default3.5"
                        className="rounded border-gray-300 shadow-sm focus:border-vibrant-blue-600 focus:ring focus:ring-vibrant-blue-600 focus:ring-opacity-50"
                        checked={formValues.gptVersion.includes('default3.5')}
                        onChange={handleCheckboxChange}
                      />
                      <span className="ml-2 text-sm font-normal text-gray-900">GPT Default 3.5</span>
                    </label>
                    <label className="inline-flex items-center mt-1">
                      <input
                        type="checkbox"
                        name="gpt4"
                        value="gpt4"
                        className="rounded border-gray-300 shadow-sm focus:border-vibrant-blue-600 focus:ring focus:ring-vibrant-blue-600 focus:ring-opacity-50"
                        checked={formValues.gptVersion.includes('gpt4')}
                        onChange={handleCheckboxChange}
                      />
                      <span className="ml-2 text-sm font-normal text-gray-900">GPT 4</span>
                    </label>
                  </div>
                </div>

              </fieldset>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}