import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import Layout from '../components/base/layout';
import Navigation from '../components/navbar/navigation-authenticated';
import Footer from '../components/footer/footer-authenticated';
import AnimationLogo from '../components/animation/AnimationLogo';
import CreatePrompts from '../components/pages/create-prompts';

const LoggedIn = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading, router])

  const pageTitle = 'Create Prompts';
  const pageDescription = 'Create your own writing prompts on Prompland and share them with a community of writers and readers.';

  return (
    <Layout page={pageTitle} title={pageTitle} description={pageDescription}>
        {
          loading ?
            <div className='flex justify-center'>
              <AnimationLogo height={360} width={360} amount={1500} />
            </div> :
            <>
              <Navigation page="dashboard" menu={{ signOut }} user={authUser} />
              <CreatePrompts user={authUser} />
              <Footer />
            </>
        }
    </Layout>
  )
}

export default LoggedIn;
