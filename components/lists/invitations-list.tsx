const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'F23F389JFI23G7245F',
    email: 'Code to invite friend',
    image:
      '/images/avatar/placeholder.svg',
  },
]

export default function InvitationList({invitations}: any) {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {invitations.invitations.map((person: any, index: number) => (
        <li key={index} className="flex py-4">
          <img className="h-10 w-10 rounded-full" src={person?.image || '/images/avatar/placeholder.svg'} alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person?.name || person}</p>
            <p className="text-sm text-gray-500">{person?.name ? 'Invited' : 'Invitation Code'}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
