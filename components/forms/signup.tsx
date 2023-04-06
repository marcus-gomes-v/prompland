import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import AnimationLogo from '../animation/AnimationLogo';


export default function Signup({ createUserWithEmailAndPassword }: any) {

  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  //Optional error handling
  const [error, setError]: any = useState(null)

  const onSubmit = (event: any) => {
    setError(null)
    if (passwordOne === passwordTwo)
      createUserWithEmailAndPassword(email, passwordOne)
        .then((authUser: any) => {
          console.log("Success. The user is created in firebase")
          router.push("/dashboard");
        })
        .catch((error: any) => {
          setError(error.message)
        });
    else {
      setError("Password do not match")
    }
    event.preventDefault();
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md text-vibrant-blue-600">
          <div className="flex justify-center">
            <AnimationLogo width={128} height={128} amount={1500} />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-700">Create account</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={onSubmit}>
              {error && <span color="danger">{error}</span>}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-vibrant-blue-500 focus:outline-none focus:ring-vibrant-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={passwordOne}
                    onChange={(event) => setPasswordOne(event.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-vibrant-blue-500 focus:outline-none focus:ring-vibrant-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password confirmation
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={passwordTwo}
                    onChange={(event) => setPasswordTwo(event.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-vibrant-blue-500 focus:outline-none focus:ring-vibrant-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">

                </div>
                <div className="flex items-center">
                  <Link href="/authentication">
                    <a className="font-medium text-vibrant-blue-600 hover:text-vibrant-blue-500">
                      I have an account
                    </a>
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-vibrant-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-vibrant-blue-700 focus:outline-none focus:ring-2 focus:ring-vibrant-blue-500 focus:ring-offset-2"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}