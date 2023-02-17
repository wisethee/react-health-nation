import {
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
} from "@react-three/drei";
import { useControls } from "leva";
import { Fragment, Suspense } from "react";
import Heart from "../heart/heart";

const Scene = () => {
  const { position, rotation } = useControls({
    position: {
      value: {
        x: 0,
        y: -0.8,
        z: 0,
      },
    },
    rotation: {
      value: {
        x: -0.1,
        y: 0.1,
        z: -0.15,
      },
    },
  });

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
          <Float rotationIntensity={0.4}>
            <Heart
              position={[position.x, position.y, position.z]}
              rotation={[rotation.x, rotation.y, rotation.z]}
            />
          </Float>
        </PresentationControls>
      </Suspense>
    </Fragment>
  );
};

export default Scene;
