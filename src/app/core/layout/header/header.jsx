import { useContext } from "react";
import { Link } from "react-router-dom";

import { signOutAuthUser } from "../../utils/firebase/auth.firebase";

import { UserContext } from "../../contexts/user";

import logo from "../../../../assets/logo.svg";
import Button from "../../components/button/button";

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutAuthUser();
    setCurrentUser(null);
  };

  return (
    <header className="">
      <div className="container mx-auto">
        <nav className="" aria-label="Global">
          <div className="">
            <Link className="" to="/">
              <span className="sr-only">Health Nation</span>
              <img className="" src={logo} alt="Logo" />
            </Link>
          </div>

          {currentUser ? (
            <div className="">
              <Button buttonType={"transparent"} onClick={signOutHandler}>
                Sign out
                <span className="pl-2" aria-hidden="true">
                  &rarr;
                </span>
              </Button>
            </div>
          ) : (
            <div className="">
              <Button buttonType={"transparent"}>
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
