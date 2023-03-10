import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "../section/section";
import Button from "../../components/button/button";
import Circle from "../../components/circle/circle";
import { ReactComponent as AboutImg } from "../../../../assets/about.svg";

import "./about.css";

const About = ({ btnColor }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#circle4", {
      scrollTrigger: {
        trigger: "#circle4",
        scrub: 1,
        start: "top center",
        end: "20px 80%",
        markers: false,
      },
      x: -80,
      y: -24,
      scale: 4,
      duration: 2,
      autoAlpha: 1,
      delay: 1,
      ease: "steps(20)",
    });
    gsap.to("#circle5", {
      scrollTrigger: {
        trigger: "#circle4",
        scrub: 1,
        start: "top center",
        end: "20px 80%",
        markers: false,
      },
      x: 96,
      y: 96,
      scale: 2,
      duration: 2,
      autoAlpha: 1,
      delay: 2,
      ease: "steps(20)",
    });
    gsap.to("#circle6", {
      scrollTrigger: {
        trigger: "#circle4",
        scrub: 1,
        start: "top center",
        end: "20px 80%",
        markers: false,
      },
      x: 100,
      y: 50,
      scale: 1.7,
      duration: 2,
      autoAlpha: 1,
      delay: 2,
      ease: "steps(20)",
    });
  }, []);
  return (
    <Section height={"h-full"} padding={"py-20"} bgClass={"about-bg"}>
      <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start gap-12 order-1">
        <div className="flex flex-col justify-center text-center md:text-left md:gap-4">
          <h2 className="text-headline-medium md:text-display-small lg:text-display-medium mb-3">
            Who We Are, What We Do
          </h2>
          <p>
            We are a group of experienced professionals from the health and social care sectors. We got together to to set up Health Nation, born out of our concern about the increasing cost of disease. Each month we choose 3 of the biggest health issues facing our nation and highlight the work of two charities for each issue. For each issue you'll find one charity that supports people living with disease in paractiacl ways and one charity that funds basic research to advance our understanding of the disease. 
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
      <div className="flex flex-col w-full md:w-1/2 justify-center items-center mb-12 md:mb-0 order-0">
        <div className="flex justify-center relative">
          <AboutImg className="z-10 team-img" />
          <Circle
            customClass={"circle-purple"}
            left="30%"
            top="30%"
            id={"circle4"}
          />
          <Circle
            customClass={"circle-light-green"}
            left="45%"
            top="25%"
            id={"circle5"}
          />
        </div>
      </div>
      <Circle
        customClass={"circle-purple-fill"}
        right="25%"
        bottom="20%"
        id={"circle6"}
      />
    </Section>
  );
};

export default About;
