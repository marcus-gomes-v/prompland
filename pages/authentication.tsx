import { useAuth } from '../context/AuthUserContext';
import Layout from '../components/base/layout';
import Authentication from '../components/forms/authentication';
import Head from 'next/head';


export default function AuthenticationRoot() {
  const { signInWithEmailAndPassword, loginWithGoogle } = useAuth();
  const pageTitle = 'Authentication';
  const pageDescription = 'Sign in to Prompland to access your account, discover prompts, and create new prompts.';

  return (
    <Layout page={pageTitle} title={pageTitle} description={pageDescription}>
      <Authentication loginWithGoogle={loginWithGoogle} signInWithEmailAndPassword={signInWithEmailAndPassword} />
    </Layout>
  )
}
