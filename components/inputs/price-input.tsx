import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline"

export default function PriceInput({ handle }: {handle: any}) {

  const setData = (d: any) => {
    handle(d)
  }

  return (
    <div>
      <label htmlFor="price" className="flex text-sm text-left font-medium text-gray-700">
        Valor
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">R$</span>
        </div>
        <input
          type="tel"
          name="price"
          id="price"
          className="block w-full rounded-md border-gray-300 pl-8 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="0.00"
          aria-describedby="price-currency"
          onChange={e => setData(e.target.value)}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500 sm:text-sm" id="price-currency">
            Mensal
          </span>
        </div>
      </div>
    </div>
  )
}