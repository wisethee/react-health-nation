import { signInWithGooglePopup } from "../../core/utils/firebase/auth.firebase";
import { createUserDocument } from "../../core/utils/firebase/db.firebase";

const Auth = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocument(user);
  };

  return <button onClick={logGoogleUser}>Google Login</button>;
};

export default Auth;
