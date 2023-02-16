import { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../../../../assets/logo.svg";
import Button from "../../components/button/button";

import { UserContext } from "../../../contexts/user";

const Header = () => {
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);

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

          <div className="">
            <Button buttonType={"transparent"}>
              Log in
              <span className="pl-2" aria-hidden="true">
                &rarr;
              </span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
