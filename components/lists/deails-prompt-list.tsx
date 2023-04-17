import { iUser } from "../../typings"
import Link from 'next/link';
import { DocumentDuplicateIcon, EllipsisVerticalIcon, EyeIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import Swal from 'sweetalert2';
import ShowPromptTextModal from "../modals/show-prompt-text";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function DetailsPromptList({ promptCode, sequential }: { promptCode: any, sequential: boolean }) {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [prompt, setPrompt] = useState('')

  const [openModal, setOpenModal] = useState(false)

  
  function showPromptText(index: number) {
    const code = promptCode[index];
    setPrompt(code)
    setOpenModal(true)
  }

  function handleCopy(index: number) {
    const code = promptCode[index];
    navigator.clipboard.writeText(`${code}`);
  }

  function toggleSelect(index: number) {
    const selectedIndex = selectedItems.indexOf(index);
    if(sequential){
      if (selectedIndex === -1) {
        setSelectedItems([...selectedItems, index]);
      } else {
        setSelectedItems(selectedItems.filter(item => item !== index));
      }
    } else {
      setSelectedItems([index])
    }
  }

  function showSuccessAlert() {
    Swal.fire({
      title: '',
      text: 'If you copy correct and paste at ChatGPT, you should be able to use your IA with your prompt!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }

  function showErrorAlert() {
    Swal.fire({
      title: 'Error!',
      text: 'Please select items in order!',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }

  

  return (
    <>
      <ShowPromptTextModal opened={openModal} setOpened={setOpenModal} code={prompt} />
      <ul role="list" className="mt-3 grid gap-3 grid-cols-1 lg:grid-cols-6 md:grid-cols-3">
        {promptCode.map((code: string, index: number) => (
          <li key={index} className="w-full md:w-auto inline-flex cursor-pointer">
            <div
              className={classNames(
                'w-full col-span-1 flex rounded-md shadow-sm border',
                selectedItems.includes(index) && sequential ? 'border-green-500' : 'border-gray-300 hover:border-gray-400'
              )}
            >
              {sequential ? 
                <>
                  <div
                    className={classNames(
                      'flex w-32 md:w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white',
                      selectedItems.includes(index) ? 'bg-green-500' : 'bg-pink-600'
                    )}
                  >
                    {index + 1}
                  </div>
                  <div className="w-full flex justify-around rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                    <div
                      onClick={() => {
                          if ((selectedItems.length === 0 && index === 0) || selectedItems[selectedItems.length - 1] === index - 1) {
                            handleCopy(index);
                            toggleSelect(index);

                            if (index === promptCode.length - 1) {
                              showSuccessAlert();
                            }
                          } else {
                            showErrorAlert();
                          }
                      }}
                      className="px-4 py-2 text-sm"
                    >
                      <DocumentDuplicateIcon className="h-5 w-5" />
                    </div>
                    <div
                      onClick={() => {
                        showPromptText(index);
                      }}
                      className="px-4 py-2 text-sm"
                    >
                      <EyeIcon className="h-5 w-5" />
                    </div>
                  </div>
                </>:
                <div className="w-full">
                  <div
                    className={classNames(
                      'w-full flex px-2 py-1',
                      selectedItems.includes(index) ? 'bg-vibrant-blue-400' : 'bg-turquoise-600'
                    )}
                  >
                    <p className="mt-1 truncate text-sm text-white w-full md:w-48 lg:w-40">{code}</p>
                  </div>
                  <div className="flex flex-1 items-center justify-around md:justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                    <div
                      onClick={() => {
                          handleCopy(index);
                          toggleSelect(index);
                      }}
                      className="flex gap-2 px-4 py-2 text-sm hover:bg-gray-100 hover:text-vibrant-blue-400"
                    >
                      <DocumentDuplicateIcon className="h-5 w-5" />
                      Copy
                    </div>
                    <div
                      onClick={() => {
                        showPromptText(index);
                      }}
                      className="md:border-l-2 flex gap-2 px-4 py-2 text-sm hover:bg-gray-100 hover:text-vibrant-blue-400"
                    >
                      <EyeIcon className="h-5 w-5" />
                      View
                    </div>
                  </div>
                </div>
              }
              
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
