import { Fragment, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/user";

import Progressbar from "../progressbar/progressbar";
import Button from "../../components/button/button";
import FormInput from "../../components/form-input/form-input";

const Info = ({
  id,
  btnColor,
  infoTitle,
  infoDescription,
  startVal,
  endVal,
  handleOnClick,
  amountVal = "",
}) => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [amountForm, setAmount] = useState(amountVal);
  amountVal = amountForm;

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleBtnClick = (event) => {
    event.preventDefault();
    handleOnClick(id, amountVal);
    navigate("/checkout");
  };

  return (
    <Fragment>
      <div className="flex flex-col w-full min-h-[580px] justify-between md:items-start gap-12 py-12">
        <div className="flex flex-col justify-center text-center md:text-left md:gap-4">
          <h3 className="text-headline-small md:text-headline-medium lg:text-headline-large mb-3">
            {infoTitle}
          </h3>
          <p>{infoDescription}</p>
        </div>
        <div className="w-full">
          <Progressbar startVal={startVal} endVal={endVal} />
          <form
            onSubmit={handleBtnClick}
            className="flex flex-col justify-center w-full mt-8"
          >
            {currentUser ? (
              <div className="flex rounded-full shadow-sm">
                <FormInput
                  required
                  type="number"
                  other={
                    "rounded-l-full bg-light-green px-6 placeholder:uppercase"
                  }
                  placeholder="Enter amount"
                  name="amountVal"
                  value={amountVal}
                  onChange={handleChange}
                />
                <Button
                  buttonType={btnColor}
                  textTransform={"uppercase"}
                  shadow={"shadow-sm"}
                  other={"flex-shrink-0 ml-[-20px] z-10"}
                >
                  Donate Now
                  <span className="pl-2" aria-hidden="true">
                    &rarr;
                  </span>
                </Button>
              </div>
            ) : (
              <p className="p-4 bg-secondary rounded-md">
                Please log in if you would like to donate!
              </p>
            )}
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Info;
