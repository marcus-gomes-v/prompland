import React, { useState } from 'react';
import useFirebaseAuth from '../../lib/useFirebaseAuth';
import AnimationLogo from '../animation/AnimationLogo';
// Replace with the path to your useFirebaseAuth hook

const ResetPassword = ({ sendPasswordResetEmail }: any) => {
  const [resetEmail, setResetEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState<string | null>(null);
  const [error, setError] = useState(null);

  const handlePasswordReset = (event: any) => {
    event.preventDefault();
    setError(null);
    setResetSuccess(null);
    sendPasswordResetEmail(resetEmail)
      .then(() => {
        setResetSuccess('A password reset link has been sent to your email.');
      })
      .catch((error: any) => {
        setError(error.message);
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-vibrant-blue-600">
          <div className="flex justify-center">
            <AnimationLogo width={128} height={128} amount={1500} />
          </div>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-gray-700">Reset Password</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-4" onSubmit={handlePasswordReset}>
              <div>
                <label
                  htmlFor="reset-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="reset-email"
                    name="reset-email"
                    type="email"
                    value={resetEmail}
                    onChange={(event) => setResetEmail(event.target.value)}
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-vibrant-blue-500 focus:outline-none focus:ring-vibrant-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-vibrant-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-vibrant-blue-700 focus:outline-none focus:ring-2 focus:ring-vibrant-blue-500 focus:ring-offset-2"
                >
                  Send Reset Link
                </button>
              </div>
            </form>
            {error && (
              <div className="mt-2 text-sm text-red-600">
                {error}
              </div>
            )}
            {resetSuccess && (
              <div className="mt-2 text-sm text-green-600">
                {resetSuccess}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
