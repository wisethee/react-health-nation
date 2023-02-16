import SignUp from "../../core/components/sign-up/sign-up";
import SignIn from "../../core/components/sign-in/sign-in";

const Auth = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-24 lg:gap-6">
      <SignUp className="flex flex-col w-1/2" />
      <SignIn className={"flex flex-col w-1/2"} />
    </div>
  );
};

export default Auth;
