import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import AlertError from "../alerts/error";
import AnimationLogo from "../animation/AnimationLogo";

export default function Authentication({ loginWithGoogle, signInWithEmailAndPassword }: any) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  

  const emailAndPasswordLogin = (event: any) => {
    setError(null)
    signInWithEmailAndPassword(email, password)
      .then((authUser: any) => {
        router.push('/dashboard');
      })
      .catch((error: any) => {
        setError(error.message)
      });
    event.preventDefault();
  };

  const googleLogin = (event: any) => {
    setError(null)
    loginWithGoogle()
      .then((authUser: any) => {
        router.push('/dashboard');
      })
      .catch((error: any) => {
        setError(error.message)
      });
    event.preventDefault();
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-vibrant-blue-600">
          <div className="flex justify-center">
            <AnimationLogo width={128} height={128} amount={1500} />
          </div>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-gray-700">Access your account</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={emailAndPasswordLogin}>
              {error && <AlertError text={error} />}
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
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-vibrant-blue-500 focus:outline-none focus:ring-vibrant-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link href="/sign_up">
                    <a className="font-medium text-vibrant-blue-600 hover:text-vibrant-blue-500">
                      Create an account
                    </a>
                  </Link>
                </div>

                {/* <div className="text-sm">
                  <a href="#" className="font-medium text-vibrant-blue-600 hover:text-vibrant-blue-500">
                    Forgot your password?
                  </a>
                </div> */}
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-vibrant-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-vibrant-blue-700 focus:outline-none focus:ring-2 focus:ring-vibrant-blue-500 focus:ring-offset-2"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Or access with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3">
                <div>
                  <a
                    onClick={googleLogin}
                    className="inline-flex w-full justify-center  rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="inline-flex align-middle ">
                      <FontAwesomeIcon icon={faGoogle} className={`h-4 w-4 mr-3`} />  Login with Google
                    </span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}