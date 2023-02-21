import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Progressbar from "../progressbar/progressbar";
import Button from "../../components/button/button";
import FormInput from "../../components/form-input/form-input";

const Info = ({
  btnColor,
  infoTitle,
  infoDescription,
  startVal,
  endVal,
  handleOnClick,
}) => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    handleOnClick();
    navigate("/checkout");
  };

  return (
    <Fragment>
      <div className="flex flex-col w-full justify-center md:items-start gap-12 py-12">
        <div className="flex flex-col justify-center text-center md:text-left md:gap-4">
          <h3 className="text-display-small">{infoTitle}</h3>
          <p>{infoDescription}</p>
        </div>
        <Progressbar startVal={startVal} endVal={endVal} />
        <div className="flex flex-col justify-center w-full mt-8">
          <div className="flex rounded-full shadow-sm">
            <FormInput
              required
              type="number"
              other={"rounded-l-full bg-light-green px-6 placeholder:uppercase"}
              placeholder="Enter amount"
            />
            <Button
              buttonType={btnColor}
              textTransform={"uppercase"}
              shadow={"shadow-sm"}
              other={"flex-shrink-0 ml-[-20px] z-10"}
              onClick={handleBtnClick}
            >
              Donate Now
              <span className="pl-2" aria-hidden="true">
                &rarr;
              </span>
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Info;
