import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import Layout from '../components/base/layout';
import Dashboard from '../components/pages/dashboard';
import Navigation from '../components/navbar/navigation-authenticated';
import Footer from '../components/footer/footer-authenticated';
import Head from 'next/head';
import AnimationLogo from '../components/animation/AnimationLogo';
import DiscoverPrompts from '../components/pages/discover-prompts';

const LoggedIn = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading, router])

  const pageTitle = 'Discover Prompts';
  const pageDescription = 'Explore a variety of writing prompts on Prompland and find inspiration for your next writing project.';

  return (
    <Layout page={pageTitle} title={pageTitle} description={pageDescription}>
        {
          loading ?
          <div className='flex justify-center'>
            <AnimationLogo height={360} width={360} amount={1500} />
          </div> :
            <>
              <Navigation page="dashboard" menu={{ signOut }} user={authUser} />
              <DiscoverPrompts user={authUser} />
              <Footer />
            </>
        }
    </Layout>
  )
}

export default LoggedIn;
