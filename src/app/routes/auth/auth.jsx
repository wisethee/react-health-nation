import { gsap } from "gsap";
import { useEffect } from "react";
import Section from "../../core/components/section/section";
import SignUp from "../../core/components/sign-up/sign-up";
import SignIn from "../../core/components/sign-in/sign-in";
import Circle from "../../core/components/circle/circle";

import "./auth.css";

const Auth = () => {
  useEffect(() => {
    gsap.to("#circle1", {
      x: -128,
      y: -100,
      scale: 8,
      duration: 2,
      autoAlpha: 1,
      delay: 1,
      ease: "steps(20)",
    });
    gsap.to("#circle3", {
      x: -540,
      y: 128,
      scale: 1.2,
      duration: 2,
      autoAlpha: 1,
      delay: 4,
    });
  }, []);
  return (
    <Section
      height={"h-full"}
      padding={"py-16"}
      bgClass={"charity1-bg"}
      name={"auth"}
    >
      <div className="flex flex-col w-full md:flex-row flex-nowrap gap-24 md:gap-12">
        <SignUp className="flex flex-col w-full md:w-1/2" />
        <SignIn className={"flex flex-col w-full md:w-1/2"} />
      </div>
      <Circle
        customClass={"circle-light-green"}
        right="-2%"
        bottom="0"
        id={"circle1"}
      />
      <Circle
        customClass={"circle-green-fill"}
        right="6%"
        bottom="25%"
        id={"circle3"}
      />
    </Section>
  );
};

export default Auth;
