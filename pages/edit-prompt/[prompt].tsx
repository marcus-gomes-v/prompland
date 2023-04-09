import React from 'react';
import Layout from '../../components/base/layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthUserContext';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import AnimationLogo from '../../components/animation/AnimationLogo';
import Navigation from '../../components/navbar/navigation-authenticated';
import NewPrompt from '../../components/pages/new-prompt';
import Footer from '../../components/footer/footer-authenticated';
import EditPrompt from '../../components/pages/edit-prompt';

interface Props {
  prompt: string
}

export default function News({ prompt }: Props) {
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
            <EditPrompt user={authUser} promptId={prompt} />
            <Footer />
          </>
      }
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { prompt } = context.params as { prompt: string };
  return { props: { prompt } }
}