import SignUp from "../../core/components/sign-up/sign-up";
import SignIn from "../../core/components/sign-in/sign-in";

const Auth = () => {
  return (
    <div className="flex flex-col md:flex-row flex-nowrap gap-24 md:gap-6 py-16">
      <SignUp className="flex flex-col w-full md:w-1/2" />
      <SignIn className={"flex flex-col w-full md:w-1/2"} />
    </div>
  );
};

export default Auth;
