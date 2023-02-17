import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOutAuthUser } from "../../utils/firebase/auth.firebase";
import { UserContext } from "../../contexts/user";

import Button from "../../components/button/button";
import { ReactComponent as Logo } from "../../../../assets/logo.svg";

const Header = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const signOutAuthUserHandler = async () => {
    await signOutAuthUser();
    navigate("/");
  };

  return (
    <header className="flex px-4 md:px-8 lg:px-12 xl:px-16 ">
      <div className="container mx-auto ">
        <nav className="flex justify-between items-center" aria-label="Global">
          <div className="">
            <Link className="" to="/">
              <span className="sr-only">Health Nation</span>
              <Logo className="" />
            </Link>
          </div>

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
