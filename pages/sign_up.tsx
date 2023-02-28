import { useAuth } from '../context/AuthUserContext';
import Layout from '../components/base/layout';
import Signup from '../components/forms/signup';
import Head from 'next/head';


const SignUp = () => {
  const { createUserWithEmailAndPassword }: any = useAuth();

  return (
    <Layout page="signup">
      <Head>
        <title>Pocket Forest - Register</title>
      </Head>
      <Signup createUserWithEmailAndPassword={createUserWithEmailAndPassword} />
    </Layout>
  )
}

export default SignUp;
