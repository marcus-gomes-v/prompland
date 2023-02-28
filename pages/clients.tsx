import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import Layout from '../components/base/layout';
import Navigation from '../components/navbar/navigation-authenticated';
import Footer from '../components/footer/footer-authenticated';
import Clients from '../components/pages/clients';
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
    <Layout page="clients">
      <Head>
        <title>Beach Pass - Alunos</title>
      </Head>
        {
          loading ?
            <div>
              <div>Loading....</div>
            </div> :
            <>
            <Navigation page={"clients"} menu={{ signOut }} user={authUser} />
              <Clients user={authUser} />
              <Footer />
            </>
        }
    </Layout>
  )
}

export default LoggedIn;
