import Section from "../../core/components/section/section";
import SignUp from "../../core/components/sign-up/sign-up";
import SignIn from "../../core/components/sign-in/sign-in";

const Auth = () => {
  return (
    <Section height={"h-full"} padding={"py-16"}>
      <div className="flex flex-col w-full md:flex-row flex-nowrap gap-24 md:gap-12">
        <SignUp className="flex flex-col w-full md:w-1/2" />
        <SignIn className={"flex flex-col w-full md:w-1/2"} />
      </div>
    </Section>
  );
};

export default Auth;
