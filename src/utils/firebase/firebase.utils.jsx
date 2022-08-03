// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Sarthak
import {
  getAuth,
  //  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1234f7FCgk9M-TEFIMvbVInLuc3inBlg",
  authDomain: "ecom-clothing-db-8bd62.firebaseapp.com",
  projectId: "ecom-clothing-db-8bd62",
  storageBucket: "ecom-clothing-db-8bd62.appspot.com",
  messagingSenderId: "723065383913",
  appId: "1:723065383913:web:f7d698081d95d93082f978",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  if (!userAuth) return;
  // users is collections name, userAuth.uid is the uid which we get from google authentication with email, name, etc.
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
