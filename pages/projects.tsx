import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import Layout from '../components/base/layout';
import Navigation from '../components/navbar/navigation-authenticated';
import Footer from '../components/footer/footer-authenticated';
import Head from 'next/head';
import Teams from '../components/pages/teams';
import Projects from '../components/pages/projects';

const LoggedIn = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading, router])

 
  return (
    <Layout page="projects">
      <Head>
        <title>Pocket Forest - Projects</title>
      </Head>
        {
          loading ?
            <div>
              <div>Loading....</div>
            </div> :
            <>
            <Navigation page={"projects"} menu={{ signOut }} user={authUser} />
              <Projects user={authUser} />
              <Footer />
            </>
        }
    </Layout>
  )
}

export default LoggedIn;
