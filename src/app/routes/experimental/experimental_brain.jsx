import { Fragment } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "../../core/three/scene/scene_brain";

const ExperimentalBrain = () => {
  return (
    <Fragment>
      <Canvas
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
    </Fragment>
  );
};

export default ExperimentalBrain;
