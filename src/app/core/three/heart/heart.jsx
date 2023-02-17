import { useGLTF } from "@react-three/drei";

const Heart = (props) => {
  const { nodes, materials } = useGLTF("./assets/3d-heart.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_id5.geometry}
        material={materials["32"]}
        position={[0, -0.26, 0.28]}
        scale={0.08}
      />
    </group>
  );
};

useGLTF.preload("./assets/3d-heart.glb");

export default Heart;
