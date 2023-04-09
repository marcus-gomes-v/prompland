import { useAuth } from '../context/AuthUserContext';
import Layout from '../components/base/layout';
import Signup from '../components/forms/signup';
import Head from 'next/head';


const SignUp = () => {
  const { createUserWithEmailAndPassword }: any = useAuth();
  const pageTitle = 'Sign Up';
  const pageDescription = 'Create an account on Prompland to discover, create, and share writing prompts with a community of writers and readers.';

  return (
    <Layout page={pageTitle} title={pageTitle} description={pageDescription}>
      <Signup createUserWithEmailAndPassword={createUserWithEmailAndPassword} />
    </Layout>
  )
}

export default SignUp;
