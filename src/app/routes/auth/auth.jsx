import { signInWithGooglePopup } from "../../core/utils/firebase/auth.firebase";

const Auth = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return <button onClick={logGoogleUser}>Google Login</button>;
};

export default Auth;
