import { useState } from "react";

import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/auth.firebase";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

// default form fields values
const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // function that will be called when the user types in the input field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          // TODO: add modal
          alert("Wrong password.");
          break;
        case "auth/user-not-found":
          // TODO: add modal
          alert("User not found.");
          break;
        default:
          alert("Something went wrong.");
          break;
      }
    }
  };

  return (
    <div className="sign-up">
      <h2>Already have and account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          required
          type="email"
          label={"Email"}
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          required
          type="password"
          label={"Password"}
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button type="submit" buttonType={"primary"}>
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
