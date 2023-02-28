export default function SelectInput({title, data, handle}: {title: string, data: any, handle: any}) {

  const setData = (d: any) => {
    handle(d)
  }

  return (
    <div>
      <label htmlFor="location" className="block text-sm text-left font-medium text-gray-700">
        {title}
      </label>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        defaultValue="Canada"
        onChange={e => setData(e.target.value)}
      >
        <option value="">Selecione...</option>
        {data.map((e: any) => <option key={e.key} value={e.key} >{e.title}</option>) }
      </select>
    </div>
  )
}