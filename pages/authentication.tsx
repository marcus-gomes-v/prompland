import { useAuth } from '../context/AuthUserContext';
import Layout from '../components/base/layout';
import Authentication from '../components/forms/authentication';
import Head from 'next/head';


export default function AuthenticationRoot() {
  const { signInWithEmailAndPassword, loginWithGoogle } = useAuth();
  return (
    <Layout page="authentication">
      <Head>
        <title>Pocket Forest</title>
      </Head>
      <Authentication loginWithGoogle={loginWithGoogle} signInWithEmailAndPassword={signInWithEmailAndPassword} />
    </Layout>
  )
}
