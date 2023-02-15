import { Fragment } from "react";
import { signInWithGooglePopup } from "../../core/utils/firebase/auth.firebase";
import { createUserDocument } from "../../core/utils/firebase/db.firebase";

import SignUp from "../../core/components/sign-up/sign-up";

const Auth = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocument(user);
  };

  return (
    <Fragment>
      <SignUp />
      <button onClick={logGoogleUser}>Google Login</button>
    </Fragment>
  );
};

export default Auth;
