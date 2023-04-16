import { useAuth } from '../context/AuthUserContext';
import Layout from '../components/base/layout';
import ResetPassword from '../components/forms/reset-password';


const SignUp = () => {
  const { sendPasswordResetEmail }: any = useAuth();
  const pageTitle = 'Reset Password';
  const pageDescription = 'Enter your email address to reset your password.';


  return (
    <Layout page={pageTitle} title={pageTitle} description={pageDescription}>
      <ResetPassword sendPasswordResetEmail={sendPasswordResetEmail} />
    </Layout>
  )
}

export default SignUp;
