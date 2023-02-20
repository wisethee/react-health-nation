import {
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
} from "@react-three/drei";
import { Fragment, Suspense } from "react";

import Brain from "../brain/brain";

const Scene = () => {
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
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <Float rotationIntensity={0.9}>
            <Brain position={[0, -0.8, 0]} rotation={[-0.1, 0.1, -0.15]} />
          </Float>
        </PresentationControls>
      </Suspense>
    </Fragment>
  );
};

export default Scene;
