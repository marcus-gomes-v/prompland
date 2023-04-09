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
import PromptDetail from '../../components/pages/prompt-detail';

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

  const pageTitle = 'Discover Prompt';
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
            <PromptDetail user={authUser} promptId={prompt} />
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