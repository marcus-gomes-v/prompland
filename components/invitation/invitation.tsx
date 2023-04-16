import { useState } from "react"
import AlertError from "../alerts/error"

export default function Invitation() {

  const [alert, setAlert] = useState(false)

  const processInvitation = (event: any) => {
    event.preventDefault()
    setAlert(true)
  }

  return (
    <div className="bg-transparent">
      <div className="mx-auto max-w-7xl ">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-lg sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sorry, you don&apos;t have access yet
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            It looks like you&apos;re not on our list of approved users yet. If you&apos;ve received an access code from us, please enter it below to gain access to the platform. If a friend has invited you, they should have provided you with an access code to enter here. If you have not yet received an access code, don&apos;t worry - we are still reviewing your application and will notify you as soon as possible. Thank you for your patience!
          </p>
          
          <div className="mx-auto mt-10 max-w-md justify-center">
            <div className="block">
              {alert && <AlertError text="Oops, it looks like the access code you entered is incorrect. Please double-check the code and try again." />}
            </div>
            <form className=" flex sm:items-center" onSubmit={processInvitation}>
              
              <div className="w-full">
                <label htmlFor="access-code" className="sr-only">
                  Access Code
                </label>
                <input
                  type="text"
                  name="access-code"
                  id="access-code"
                  required
                  className="
                    block
                    w-full
                    rounded-md
                    border-0
                    py-3
                    text-gray-900
                    shadow-sm
                    ring-1
                    ring-inset
                    ring-gray-300
                    placeholder:text-gray-400
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-vibrant-blue-500
                    sm:text-base
                    sm:leading-6"
                  placeholder="Access Code"
                />
              </div>
              <button
                type="submit"
                className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-vibrant-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-vibrant-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vibrant-blue-600 sm:ml-3 sm:mt-0 sm:w-auto"
              >
                Access
              </button>
            </form>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#1E3A8A" />
                <stop offset={1} stopColor="#3B82F6" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}