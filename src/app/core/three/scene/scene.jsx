import {
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
} from "@react-three/drei";
import { Fragment, Suspense } from "react";

import Cell from "../../three/cell/cell";
import Heart from "../../three/heart/heart";
import Brain from "../../three/brain/brain";

const Scene = ({ obj }) => {
  const objMap = () => {
    switch (obj) {
      case "cell":
        return <Cell position={[-0, -0, 0]} rotation={[-0.3, -1, -0.15]} />;
      case "heart":
        return (
          <Heart position={[-0.6, -0.4, 0]} rotation={[-0.3, 0.3, -0.6]} />
        );
      case "brain":
        return <Brain position={[0, -0.5, 0]} rotation={[-0.6, -0.3, -0.9]} />;
      default:
        return <Cell position={[-0, -0, 0]} rotation={[-0.3, -1, -0.15]} />;
    }
  };

  return (
    <Fragment>
      <Environment preset="dawn" />
      <ContactShadows
        castShadow
        position={[0, -0.6, 0]}
        blur={3}
        opacity={0.6}
        scale={6}
      />

      <Suspense>
        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-0.2, 0.4]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Float rotationIntensity={0.9}>{objMap()}</Float>
        </PresentationControls>
      </Suspense>
    </Fragment>
  );
};

export default Scene;
