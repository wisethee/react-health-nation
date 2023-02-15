import { signInWithGooglePopup } from "../../core/utils/firebase/auth.firebase";
import { createUserDocumentFromAuth } from "../../core/utils/firebase/db.firebase";

const Auth = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return <button onClick={logGoogleUser}>Google Login</button>;
};

export default Auth;
