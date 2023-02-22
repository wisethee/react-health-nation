import { useGLTF } from "@react-three/drei";

export function Cell(props) {
  const { nodes, materials } = useGLTF("./assets/3d-cell.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.013}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cell_OBJ_1.geometry}
          material={materials["05_-_Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cell_OBJ_2.geometry}
          material={materials["06_-_Default"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./assets/3d-cell.glb");

export default Cell;
