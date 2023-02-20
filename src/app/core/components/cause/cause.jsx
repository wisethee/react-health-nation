import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Scene from "../../three/scene/scene";
import Section from "../section/section";
import Heading from "../heading/heading";
import Button from "../button/button";

import "./cause.css";

const Cause = ({
  title,
  description,
  order,
  btnColor,
  headingSize,
  sectionHeight,
  sectionPadding,
  bgClass,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <Section height={sectionHeight} padding={sectionPadding} bgClass={bgClass}>
      <div
        className={`flex flex-col w-full md:w-1/2 justify-center md:items-start gap-12 order-last ${order}`}
      >
        <div className="flex flex-col justify-center text-center md:text-left md:gap-4">
          <Heading priority={headingSize}>{title}</Heading>
          <p>{description}</p>
        </div>

        <Button
          buttonType={btnColor}
          textTransform={"uppercase"}
          shadow={"shadow-sm"}
          onClick={() => navigate(`/donate/${id}`)}
        >
          Find out more
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
    </Section>
  );
};

export default Cause;