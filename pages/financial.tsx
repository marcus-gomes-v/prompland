import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import Layout from '../components/base/layout';
import Navigation from '../components/navbar/navigation-authenticated';
import Footer from '../components/footer/footer-authenticated';
import Finance from '../components/pages/finance';
import Head from 'next/head';

const LoggedIn = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading, router])

  return (
    <Layout page="financial">
        <Head>
          <title>Pocket Forest - Financeiro</title>
        </Head>
        {
          loading ?
            <div>
              <div>Loading....</div>
            </div> :
            <>
              <Navigation page={"financial"} menu={{ signOut }} user={authUser} />
              <Finance user={authUser}/>
              <Footer />
            </>
        }
    </Layout>
  )
}

export default LoggedIn;
