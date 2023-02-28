export default function HourInput({ handle, title }: {handle: any, title: string}) {

  const setData = (d: any) => {
    handle(d)
  }

  return (
    <div>
      <label htmlFor="time" className="block text-sm text-left font-medium text-gray-700">
        {title}
      </label>
      <input
        type="time"
        name="time"
        id="time"
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="0.00"
        aria-describedby="time"
        onChange={e => setData(e.target.value)}
      />
    </div>
  )
}