import { Canvas } from "@react-three/fiber";
import Scene from "../../three/scene/scene";
import Heading from "../heading/heading";
import Button from "../button/button";

import "./section.css";

const Section = ({
  title,
  description,
  order,
  btnColor,
  headingSize,
  sectionHeight,
  sectionPadding,
}) => {
  console.log(order);
  return (
    <section className={`flex items-center ${sectionPadding} ${sectionHeight}`}>
      <div
        className={`flex flex-col w-full md:w-1/2 justify-center items-start gap-12 ${order}`}
      >
        <div className="flex flex-col gap-4">
          <Heading priority={headingSize}>{title}</Heading>
          <p>{description}</p>
        </div>

        <Button
          buttonType={btnColor}
          textTransform={"uppercase"}
          shadow={"shadow-sm"}
        >
          Donate now
          <span className="pl-2" aria-hidden="true">
            &rarr;
          </span>
        </Button>
      </div>
      <Canvas
        className="canvas"
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 3, 2],
        }}
      >
        <Scene />
      </Canvas>
    </section>
  );
};

export default Section;
