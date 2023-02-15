import { Fragment } from "react";

import SignUp from "../../core/components/sign-up/sign-up";
import SignIn from "../../core/components/sign-in/sign-in";

const Auth = () => {
  return (
    <Fragment>
      <SignUp />
      <SignIn />
    </Fragment>
  );
};

export default Auth;
