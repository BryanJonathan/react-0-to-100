import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCFixGgCtgj_TC4HnMWCt48kpeoI45d5Y",
  authDomain: "crown-clothing-db-10316.firebaseapp.com",
  projectId: "crown-clothing-db-10316",
  storageBucket: "crown-clothing-db-10316.firebasestorage.app",
  messagingSenderId: "357506391986",
  appId: "1:357506391986:web:5c6bb52a2b87a365e74eab",
};

initializeApp(firebaseConfig);

const googleProdiver = new GoogleAuthProvider();
googleProdiver.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProdiver);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProdiver);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
