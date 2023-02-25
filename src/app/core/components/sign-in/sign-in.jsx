import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/auth.firebase";

import FormInput from "../form-input/form-input";
import Button from "../button/button";
import AppModal from "../modal/modal.component"


// default form fields values
const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = ({ className }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  // function that will be called when the user types in the input field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const [modalMessage, setModal] = useState(undefined);

  const handleCloseModal = () => setModal(undefined);

  const setModalMessage = (message) => setModal(message);


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          setModalMessage("Wrong password!");
          break;
        case "auth/user-not-found":
          setModalMessage("Wrong username!");
          break;
        default:
          setModalMessage("Enter user details");
          break;
      }
    }
  };


  return (
    <div className={`sign-up ${className}`}>

      {/* Check if the modalMessage is defined, then true, otherwise, false */}

      <AppModal show={modalMessage ? true : false} close = {handleCloseModal}> {modalMessage} </AppModal>

      <h2 className="text-headline-medium">Already have an account?</h2>

      <span className="mb-12 opacity-60">
        Sign In with your email and password
      </span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-start">
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

        <Button type="submit" buttonType={"tertiary"}>
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
