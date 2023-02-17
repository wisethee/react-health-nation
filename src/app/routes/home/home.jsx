import { Fragment } from "react";
import Section from "../../core/components/section/section";
import circle1 from "../../../assets/circle-orange.svg";

const Home = () => {
  return (
    <Fragment>
      <Section
        img={circle1}
        order={"order-first"}
        justify={"justify-start"}
        btnColor={"orange"}
      />
    </Fragment>
  );
};

export default Home;
