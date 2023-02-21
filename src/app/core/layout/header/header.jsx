import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOutAuthUser } from "../../utils/firebase/auth.firebase";
import { UserContext } from "../../contexts/user";

import Button from "../../components/button/button";

import {gsap} from "gsap";
import { useLayoutEffect, useRef } from "react";

// Assets
import { ReactComponent as Logo } from "../../../../assets/logo.svg";

const Header = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const signOutAuthUserHandler = async () => {
    await signOutAuthUser();
    navigate("/");
  };
  const app = useRef()
  useLayoutEffect(()=> {
    let ctx = gsap.context(() => {
      // use scoped selectors
      
      gsap.from(".logo", { duration: 2, x:-200, ease: "power1.out" })
      gsap.from(".logo", {delay:1, duration:2, opacity: 0.2})
    }, app);
    return () => ctx.revert()
  }, []) 

  return (
    <header ref={app} className="header main flex flex-col px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="flex justify-between items-center min-h-[7rem]">
        <div className="logo">
          <Link to="/" className="flex gap-2 items-center">
            <Logo />
            <span className="hidden sm:flex text-headline-small">
              Health Nation
            </span>
          </Link>
        </div>

        <nav className="" aria-label="Global">
          {currentUser ? (
            <div className="">
              <Button
                buttonType={"transparent"}
                onClick={signOutAuthUserHandler}
              >
                Sign out
                <span className="pl-2" aria-hidden="true">
                  &rarr;
                </span>
              </Button>
            </div>
          ) : (
            <div className="">
              <Button
                buttonType={"transparent"}
                onClick={() => navigate("/auth")}
              >
                Log in
                <span className="pl-2" aria-hidden="true">
                  &rarr;
                </span>
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
