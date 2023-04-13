import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function SwitchInput({ handle, title, subTitle, startState }: { handle: any, title: string, subTitle: string, startState: boolean}) {
  const [enabled, setEnabled] = useState(startState)

  const setData = (d: boolean) => {
    setEnabled(d)
    handle(d)
  }

  useEffect(() => {
    if (startState)
      setEnabled(startState)
  
  }, [startState])
  

  return (
    <div>
      <Switch.Group as="div" className="flex items-center justify-between">
        <span className="flex flex-grow flex-col">
          <Switch.Label as="span" className="text-sm font-medium leading-6 text-gray-900" passive>
            {title}
          </Switch.Label>
          <Switch.Description as="span" className="text-sm text-gray-500">
            {subTitle}
          </Switch.Description>
        </span>
        <Switch
          checked={enabled}
          onChange={setData}
          className={classNames(
            enabled ? 'bg-indigo-600' : 'bg-gray-200',
            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
          )}
        >
          <span
            aria-hidden="true"
            className={classNames(
              enabled ? 'translate-x-5' : 'translate-x-0',
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
            )}
          />
        </Switch>
      </Switch.Group>
    </div>
  )
}