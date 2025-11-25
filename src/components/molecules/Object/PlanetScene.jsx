// PlanetScene.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function PlanetScene() {
  return (
    <Canvas>
      {/* Background stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} />

      {/* Soft camera controls */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />

      {/* Planet */}
      <Sphere args={[1.5, 64, 64]}>
        <meshStandardMaterial color="#1d4ed8" />
      </Sphere>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
    </Canvas>
  );
}
