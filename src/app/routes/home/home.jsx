import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fragment, useContext } from "react";
import Cause from "../../core/components/cause/cause";
import About from "../../core/components/about/about";
import Circle from "../../core/components/circle/circle";

import { DataContext } from "../../core/contexts/data";

const Home = () => {
  const { data } = useContext(DataContext);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#circle1", {
      x: 0,
      y: 0,
      scale: 4,
      duration: 2,
      autoAlpha: 1,
      delay: 1,
      ease: "steps(20)",
    });
    gsap.to("#circle2", {
      x: 0,
      y: 0,
      scale: 1,
      duration: 2,
      autoAlpha: 1,
      delay: 1,
    });
    gsap.to("#circle3", {
      x: -100,
      y: 50,
      scale: 1.7,
      duration: 2,
      autoAlpha: 1,
      delay: 2,
    });
  }, []);

  return (
    <Fragment>
      {Object.keys(data).map((title) =>
        data[title].map((cause) => {
          const { id } = cause;
          return <Cause key={id} cause={cause} />;
        })
      )}
      <About btnColor={"secondary"} />
      <Circle
        customClass={"circle-light-green"}
        right="0"
        top="5%"
        id={"circle1"}
      />
      <Circle
        customClass={"circle-purple-fill"}
        right="50%"
        top="17%"
        id={"circle2"}
      />
      <Circle
        customClass={"circle-green-fill"}
        right="calc(60% - 100px)"
        top="calc(19% - 25px)"
        id={"circle3"}
      />
    </Fragment>
  );
};

export default Home;
