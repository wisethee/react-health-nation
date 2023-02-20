import { useGLTF } from "@react-three/drei";

const Cell = (props) => {
  const { nodes, materials } = useGLTF("./assets/3d-cell.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.19, 0.08, 0.11]}
        rotation={[0.48, 0.85, 0]}
        scale={0}
      >
        <group position={[0.02, -237.19, 256]} scale={7.82}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.node_id6.geometry}
            material={materials["33"]}
          />
        </group>
        <group position={[0.02, -237.19, 256]} scale={7.82}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.node_id9.geometry}
            material={materials["34"]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("./assets/3d-cell.glb");

export default Cell;
