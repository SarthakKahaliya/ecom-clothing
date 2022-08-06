import "./sign-in-form.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react";

import {
  signInUserWithEmailAndPassword,
  //  auth,
  signInWithGooglePopUp,
  //  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //   useEffect(async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocFromAuth(response.user);
  //     }
  //   }, []);

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const { user } = await signInUserWithEmailAndPassword(email, password);
      // console.log({ user });
      resetFormFields();
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/wrong-password":
          alert("Error: Incorrect password for email.");
          break;
        case "auth/user-not-found":
          alert("Error: User not found.");
          break;
        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
          autoComplete="on"
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          {/* By default, button are of Submit type so it will submit the form unless different type */}
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
          {/* <button onClick={signInWithGoogleRedirect}>
            Sign in with Google Redirect
            </button> */}
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
