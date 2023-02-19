import { ReactComponent as Logo } from "../../../../assets/logo.svg";
import { ReactComponent as Facebook } from "../../../../assets/facebook.svg";
import { ReactComponent as Github } from "../../../../assets/github.svg";
import { ReactComponent as Instagram } from "../../../../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer text-center flex flex-col px-4 md:px-8 lg:px-12 xl:px-16 min-h-[7rem]">
      <div className="flex justify-center items-center mb-6">
        <Logo style={{ width: 64, height: 64 }} />
      </div>
      <div className="flex justify-center items-center mb-9">
        <a href="#!" className="mr-9">
          <Facebook />
        </a>
        <a href="#!" className="mr-9">
          <Github />
        </a>
        <a href="#!">
          <Instagram />
        </a>
      </div>

      <div className="text-center py-6">
        © Copyright 2023, The Health Nation.
      </div>
    </footer>
  );
};

export default Footer;
