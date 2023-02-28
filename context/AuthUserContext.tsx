import { createContext, useContext } from 'react'
import useFirebaseAuth from '../lib/useFirebaseAuth';

const authUserContext: any = createContext({
  authUser: {},
  loading: true,
  signInWithEmailAndPassword: async () => {},
  createUserWithEmailAndPassword: async () => {},
  loginWithGoogle: async () => {},
  signOut: async () => {}
});

export function AuthUserProvider({ children }: any) {
  const auth = useFirebaseAuth();
  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}

export const useAuth: any = () => useContext(authUserContext);
