import { useState } from "react";

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

  return (
    <div className="sign-up">
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={() => {}}>
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
