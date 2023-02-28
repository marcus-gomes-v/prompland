import { InformationCircleIcon } from '@heroicons/react/20/solid'

export default function AlertInfo({text}: {text: string}) {
  return (
    <div className="border-l-2 border-cyan-400 bg-cyan-50 px-2 py-2 mb-3 rounded-sm">
      <div className="flex">
        <InformationCircleIcon className="h-5 w-5 text-cyan-400 mr-2" aria-hidden="true" />
        <p className="text-left text-sm text-cyan-700">
          {text}
        </p>
      </div>
    </div>
  )
}