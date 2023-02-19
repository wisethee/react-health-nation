import Button from "../../components/button/button";
import { ReactComponent as AboutImg } from "../../../../assets/about.svg";

const About = ({ btnColor }) => {
  return (
    <section className="flex py-8 items-center gap-12 h-[720px]">
      <div className="flex flex-col w-full md:w-1/2 justify-center items-start gap-12 order-1">
        <div className="flex flex-col gap-4">
          <h2 className="text-display-medium">Our team</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quis viverra augue sit eros
            at lacus dis egestas. Sit amet ultrices blandit vitae nunc
            ullamcorper malesuada. Blandit imperdiet egestas non id. Augue
            tempus volutpat erat mi nunc sed sem elementum.
          </p>
        </div>

        <Button
          buttonType={btnColor}
          textTransform={"uppercase"}
          shadow={"shadow-sm"}
        >
          Find out more
          <span className="pl-2" aria-hidden="true">
            &rarr;
          </span>
        </Button>
      </div>
      <div className="flex flex-col w-full md:w-1/2 justify-center order-0">
        <div className="flex justify-center">
          <AboutImg />
        </div>
      </div>
    </section>
  );
};

export default About;
