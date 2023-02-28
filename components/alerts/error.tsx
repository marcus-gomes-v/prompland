import { ExclamationCircleIcon } from '@heroicons/react/20/solid'

export default function AlertError({text}: {text: string}) {
  return (
    <div className="border-l-2 border-rose-400 bg-rose-50 px-2 py-2 mb-3 rounded-sm">
      <div className="flex">
        <ExclamationCircleIcon className="h-5 w-5 text-rose-400 mr-2" aria-hidden="true" />
        <p className="text-left text-sm text-rose-700">
          {text}
        </p>
      </div>
    </div>
  )
}