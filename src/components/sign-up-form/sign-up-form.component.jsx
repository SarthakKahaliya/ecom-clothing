import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      const userDocRef = await createUserDocFromAuth({
        ...response.user,
        displayName: displayName,
      });

      resetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use.");
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <h1>Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />

        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
