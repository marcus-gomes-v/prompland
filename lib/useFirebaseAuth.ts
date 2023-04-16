import router from 'next/router';
import { useState, useEffect } from 'react'
import firebase from './firebase';
import { iUser } from '../typings';


const formatAuthUser = (user: any) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName || '',
  imageUrl: user.photoURL || '/images/avatar/placeholder.svg',
  code: '',
  type: 'user',
  invited: false,
  teams: []
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<iUser>();
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState: any) => {
    if (!authState) {
      setLoading(false)
      return;
    }

    setLoading(true)

    var formattedUser: iUser = formatAuthUser(authState) as iUser;

    const userExists = await new Promise((resolve, reject) => { 
      firebase
        .firestore()
        .collection('users')
        .doc(formattedUser.uid)
        .onSnapshot(function(doc: any){
          resolve(doc.data())
        })
     })
    if (!userExists) {
      const idGenerator = await firebase
        .firestore()
        .collection("idGenerator")
        .add({ uid: formattedUser.uid })

      formattedUser.code = idGenerator.id
      
      firebase
        .firestore()
        .collection("users")
        .doc(formattedUser.uid)
        .set(formattedUser)

    } else {
      formattedUser = userExists as iUser
    }
  
    setAuthUser(formattedUser);

    setLoading(false);

  };

  const clear = () => {
    setAuthUser(undefined);
    setLoading(true);
  };

  const signInWithEmailAndPassword = (email: any, password: any) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

  const createUserWithEmailAndPassword = (email: any, password: any) =>
    firebase.auth().createUserWithEmailAndPassword(email, password);

  const sendPasswordResetEmail = (email: string) =>
    firebase.auth().sendPasswordResetEmail(email);

  const provider = new firebase.auth.GoogleAuthProvider();

  const loginWithGoogle = () => firebase.auth().signInWithPopup(provider)

  const signOut = () => firebase.auth().signOut().then(() => router.push('/')).then(clear);
    
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    loginWithGoogle,
    sendPasswordResetEmail
  };
}
