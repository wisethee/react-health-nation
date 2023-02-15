import { Fragment } from "react";
import SignUp from "../../core/components/sign-up/sign-up";
import { signInWithGooglePopup } from "../../core/utils/firebase/auth.firebase";
import { createUserDocument } from "../../core/utils/firebase/db.firebase";

const Auth = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocument(user);
  };

  return (
    <Fragment>
      <button onClick={logGoogleUser}>Google Login</button>
      <SignUp />
    </Fragment>
  );
};

export default Auth;
