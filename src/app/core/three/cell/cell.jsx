import { useGLTF } from "@react-three/drei";

const Cell = (props) => {
  const { nodes, materials } = useGLTF("./assets/3d-cell.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.node_id5.geometry}
        material={materials["32"]}
        position={[0, -0.5, 0.28]}
        scale={0.12}
      />
    </group>
  );
};

useGLTF.preload("./assets/3d-cell.glb");

export default Cell;
