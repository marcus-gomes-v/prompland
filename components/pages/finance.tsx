import FinanceStudentTable from "../tables/finance-student"
import FinanceTeacherTable from "../tables/finance-teacher"

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard({ user }: { user: any }) {

  return (
    <main className="-mt-24 pb-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="sr-only">Finance</h1>
        {/* Main 3 column grid */}
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-8">
          {/* Left column */}
          <div className="grid grid-cols-1 gap-4 lg:col-span-2">
            {/* Welcome panel */}
            <section aria-labelledby="profile-overview-title">
              <div className="overflow-hidden rounded-lg bg-white shadow">
                <h2 className="sr-only" id="profile-overview-title">
                  Finance Overview
                </h2>
                <div className="bg-white p-6">
                  <div className="sm:flex sm:items-center sm:justify-between">

                    <div className="sm:flex-auto">
                      <h1 className="text-xl font-semibold text-gray-900">Financeiro</h1>
                      <p className="mt-2 text-sm text-gray-700">
                        {user.type === 'teacher' ?
                          <>Aqui você pode acessar o histórico de pagamentos recebidos e efetuados.</>
                          :
                          <>Aqui você pode acessar o seu histórico de pagamento</>
                        }
                      </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                      { user.type === 'teacher' ? 
                          <>
                           {/* <button
                             type="button"
                             className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                           >
                             Export
                          </button> */}
                          </>
                        : 
                          <></>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Actions panel */}
            <section aria-labelledby="quick-links-title">
              <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                      {user.type === 'teacher' ?
                        <FinanceTeacherTable user={user} />
                        :
                        <FinanceStudentTable user={user} />
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}