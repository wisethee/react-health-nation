import { useGLTF } from "@react-three/drei";

const Brain = (props) => {
  const { nodes, materials } = useGLTF("./assets/3d-brain.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.09, 9.85, -0.13]} scale={119.94}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id5001.geometry}
          material={materials["32.002"]}
          position={[0, -0.07, -0.1]}
          scale={0.07}
        />
      </group>
    </group>
  );
};

useGLTF.preload("./assets/3d-brain.glb");

export default Brain;
