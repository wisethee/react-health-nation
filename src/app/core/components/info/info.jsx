import Progressbar from "../progressbar/progressbar";
import Button from "../../components/button/button";
import { Fragment } from "react";

const Info = ({ btnColor, infoTitle, infoDescription, startVal, endVal }) => {
  return (
    <Fragment>
      <div className="flex flex-col w-full justify-center md:items-start gap-12 py-12">
        <div className="flex flex-col justify-center text-center md:text-left md:gap-4">
          <h3 className="text-display-small">{infoTitle}</h3>
          <p>{infoDescription}</p>
        </div>
        <Progressbar startVal={startVal} endVal={endVal} />
        <Button
          buttonType={btnColor}
          textTransform={"uppercase"}
          shadow={"shadow-sm"}
        >
          Donate Now
          <span className="pl-2" aria-hidden="true">
            &rarr;
          </span>
        </Button>
      </div>
    </Fragment>
  );
};

export default Info;
