import '../styles/globals.css'


import { AuthUserProvider } from '../context/AuthUserContext';

function app({ Component, pageProps }: any) {
  return <AuthUserProvider><Component {...pageProps} /></AuthUserProvider>
}

export default app
