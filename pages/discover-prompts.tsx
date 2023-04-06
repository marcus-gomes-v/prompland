import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import Layout from '../components/base/layout';
import Dashboard from '../components/pages/dashboard';
import Navigation from '../components/navbar/navigation-authenticated';
import Footer from '../components/footer/footer-authenticated';
import Head from 'next/head';
import AnimationLogo from '../components/animation/AnimationLogo';

const LoggedIn = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading, router])

  return (
    <Layout page="dashboard">
      <Head>
        <title>Prompland - Dashboard</title>
      </Head>
        {
          loading ?
          <div className='flex justify-center'>
            <AnimationLogo height={360} width={360} amount={1500} />
          </div> :
            <>
              <Navigation page="dashboard" menu={{ signOut }} user={authUser} />
              <Dashboard user={authUser} />
              <Footer />
            </>
        }
    </Layout>
  )
}

export default LoggedIn;
