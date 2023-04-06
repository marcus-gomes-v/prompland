
export default function Cta() {
  return (
    <div className="relative -z-10 mt-32 px-6 lg:px-8">
      <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:right-[calc(50%-6rem)] sm:top-auto sm:bottom-0 sm:translate-y-0 sm:justify-end">
        <svg viewBox="0 0 1108 632" aria-hidden="true" className="w-[69.25rem] flex-none">
          <path
            fill="url(#191ef669-4d29-44ea-9496-5d65eb27150d)"
            fillOpacity=".25"
            d="M235.233 229.055 57.541 310.091.83.615l234.404 228.44L555.251 83.11c-65.036 115.261-134.286 322.756 109.01 230.655C968.382 198.638 1031-19.583 1092.23 172.304c48.98 153.51-34.51 321.107-82.37 385.717L810.952 307.442 648.261 631.576 235.233 229.055Z"
          />
          <defs>
            <linearGradient
              id="191ef669-4d29-44ea-9496-5d65eb27150d"
              x1="1220.59"
              x2="-85.053"
              y1="198.898"
              y2="-7.05"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1dd1a1" />
              <stop offset={1} stopColor="#10ac84" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Boost your productivity.
          <br />
          Start using our app today.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
          commodo do ea.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-vibrant-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-vibrant-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vibrant-blue-600"
          >
            Get started
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block">
        <svg viewBox="0 0 1155 678" aria-hidden="true" className="w-[72.1875rem]">
          <path
            fill="url(#23e1b96e-c791-45fa-975a-a04d29498207)"
            fillOpacity=".3"
            d="M317.219 518.975 203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079Z"
          />
          <defs>
            <linearGradient
              id="23e1b96e-c791-45fa-975a-a04d29498207"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1dd1a1" />
              <stop offset={1} stopColor="#10ac84" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}