import { useState } from "react";

import { createUserDocument } from "../../utils/firebase/db.firebase";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/auth.firebase";

// default form fields values
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
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
      console.log("User created successfully", user);
      await createUserDocument(user, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.error("User already in use");
      } else {
        console.error("User creation encountered an error", error);
      }
    }
  };

  return (
    <div className="sign-up">
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label className="block">
          <span className="text-gray-700">Display Name</span>
          <input
            type="text"
            className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
            required
            name="displayName"
            value={displayName}
            onChange={handleChange}
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
            required
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
            required
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Confirm Password</span>
          <input
            type="password"
            className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
            required
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
