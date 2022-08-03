// import { useEffect } from "react";
// import { getRedirectResult } from "@firebase/auth";

import {
  //  auth,
  signInWithGooglePopUp,
  //  signInWithGoogleRedirect,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //   useEffect(async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocFromAuth(response.user);
  //     }
  //   }, []);

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    const userDocRef = await createUserDocFromAuth(response.user);
  };

  return (
    <div>
      <h1>Sign-in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
