import { useState } from "react";

import { createUserDocument } from "../../utils/firebase/db.firebase";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/auth.firebase";

import FormInput from "../form-input/form-input";
import Button from "../button/button";

// default sign up form fields values
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = ({ className }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // function that will be called when the user types in the input field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      // TODO: show error message in a modal
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocument(user, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        // TODO: show error message in a modal
        console.error("User already in use");
      } else {
        // TODO: show error message in a modal
        console.error("User creation encountered an error", error);
      }
    }
  };

  return (
    <div className={`sign-up ${className}`}>
      <h2 className="text-headline-small md:text-headline-medium">
        Don't have an account?
      </h2>
      <span className="mb-12 opacity-60">
        Sign Up with your email and password
      </span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-start">
        <FormInput
          required
          type="text"
          label={"Display Name"}
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
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

        <FormInput
          required
          type="password"
          label={"Confirm Password"}
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit" buttonType={"tertiary"}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
