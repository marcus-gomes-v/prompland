import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative pt-14">
      <div className="py-24 sm:py-32">
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div>
            <div className="relative z-10 mx-auto max-w-3xl">
              <h1 className="text-4xl lg:text-7xl font-black tracking-tight text-gray-800 text-center">
                Discover and Share <br /><span className="text-vibrant-blue-400">AI Prompts</span>
              </h1>
             
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href={"/authentication"}>
                  <a className="text-sm font-semibold leading-6 text-gray-900">
                    Join the Community  <span aria-hidden="true">→</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="/images/placeholder/map-gdanski.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}