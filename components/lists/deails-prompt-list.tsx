import { iUser } from "../../typings"
import Link from 'next/link';
import { DocumentDuplicateIcon, EllipsisVerticalIcon, EyeIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import Swal from 'sweetalert2';
import ShowPromptTextModal from "../modals/show-prompt-text";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function DetailsPromptList({ promptCode }: { promptCode: any }) {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [prompt, setPrompt] = useState('')

  const [openModal, setOpenModal] = useState(false)

  const handleModalTeam = () => {
    openModal ? setOpenModal(false) : setOpenModal(true)
  }

  setPrompt
  function showPromptText(index: number) {
    const code = promptCode[index];
    setPrompt(code)
    setOpenModal(true)
  }

  function handleCopy(index: number) {
    const code = promptCode[index];
    
    navigator.clipboard.writeText(`${code}`);
    // alert("Copied to clipboard!");
  }

  function toggleSelect(index: number) {
    const selectedIndex = selectedItems.indexOf(index);

    if (selectedIndex === -1) {
      setSelectedItems([...selectedItems, index]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== index));
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
      <ul role="list" className="mt-3 grid gap-3 grid-cols-2 lg:grid-cols-6 md:grid-cols-3 ">
        {promptCode.map((code: string, index: number) => (
          <li key={index} className="w-auto inline-flex cursor-pointer">
            <div
              className={classNames(
                'col-span-1 flex rounded-md shadow-sm border',
                selectedItems.includes(index) ? 'border-green-500' : 'border-gray-300 hover:border-gray-400'
              )}
            >
              <div
                className={classNames(
                  'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white',
                  selectedItems.includes(index) ? 'bg-green-500' : 'bg-pink-600'
                )}
              >
                {index + 1}
              </div>
              <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                <div
                  onClick={() => {
                    // if (selectedItems.length === 0 || selectedItems[selectedItems.length - 1] === index - 1) {
                    handleCopy(index);
                    toggleSelect(index);

                    // if (index === promptCode.length - 1) {
                    //   showSuccessAlert();
                    // }
                    // } else {
                    //   showErrorAlert();
                    // }
                  }}
                   className="flex-1 truncate px-4 py-2 text-sm" 
                >
                  <DocumentDuplicateIcon className="h-5 w-5" />
                </div>
                <div
                  onClick={() => {
                    showPromptText(index);
                  }}
                  className="flex-1 truncate px-4 py-2 text-sm"
                >
                  <EyeIcon className="h-5 w-5" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
