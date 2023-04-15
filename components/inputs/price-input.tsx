
export default function MoneyInput({ handle, title, placeholder }: { handle: any, title: string, placeholder: string }) {
  const titleId = title.toLowerCase().replace(/\s/g, "");

  const setData = (d: any) => {
    handle(d)
  }

  return (
    <div>
      <label htmlFor={titleId} className="block text-sm text-left font-medium text-gray-700">
        {title}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="tel"
          className="block w-full rounded-md border-gray-300 pl-8 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          aria-describedby="price-currency"
          name={titleId}
          id={titleId}
          placeholder="0.00"
          aaria-describedby="price-currency"
          onChange={e => setData(e.target.value)}
        />
      </div>
    </div>
  )
}

