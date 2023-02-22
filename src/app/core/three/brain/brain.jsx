import { useGLTF } from "@react-three/drei";

export function Brain(props) {
  const { nodes, materials } = useGLTF("./assets/3d-brain.glb");
  return (
    <group {...props} dispose={null} scale={1.75}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Brain_Model.geometry}
        material={nodes.Brain_Model.material}
      />
    </group>
  );
}

useGLTF.preload("./assets/3d-brain.glb");

export default Brain;
