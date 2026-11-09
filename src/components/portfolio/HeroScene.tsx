
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Lightformer,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function Rig({ children }: { children: React.ReactNode }) {
  const ref = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;

    const { x, y } = state.pointer;
    const smooth = Math.min(1, delta * 2);

    ref.current.rotation.y += (x * 0.18 - ref.current.rotation.y) * smooth;
    ref.current.rotation.x += (-y * 0.1 - ref.current.rotation.x) * smooth;
  });

  return <group ref={ref}>{children}</group>;
}

/* Floating 3D cinematic camera lens */
function CameraLens({ mobile }: { mobile: boolean }) {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.22;

    ref.current.rotation.x =
      Math.cos(state.clock.elapsedTime * 0.4) * 0.12;
  });

  return (
    <Float
      speed={1.1}
      rotationIntensity={0.3}
      floatIntensity={0.45}
    >
      <group
        ref={ref}
        position={mobile ? [1.3, 1.7, -2] : [1.4, 1.8, -2]}
        scale={mobile ? 0.55 : 0.85}
      >
        {/* Camera body */}
        <mesh>
          <boxGeometry args={[1.15, 0.75, 0.48]} />
          <meshStandardMaterial
            color="#aeb9cc"
            metalness={0.95}
            roughness={0.2}
          />
        </mesh>

        {/* Camera lens rings */}
        {[0.34, 0.25, 0.15].map((radius, i) => (
          <mesh
            key={i}
            position={[0, 0, 0.29 + i * 0.025]}
          >
            <torusGeometry args={[radius, 0.035, 16, 64]} />
            <meshStandardMaterial
              color={i === 2 ? "#86a9e9" : "#d5dce8"}
              metalness={1}
              roughness={0.12}
            />
          </mesh>
        ))}

        {/* Lens glass */}
        <mesh position={[0, 0, 0.38]}>
          <circleGeometry args={[0.13, 48]} />
          <meshPhysicalMaterial
            color="#426b9e"
            metalness={0.5}
            roughness={0.05}
            transmission={0.5}
            thickness={0.5}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* Floating cinematic video frame */
function FilmFrame({ mobile }: { mobile: boolean }) {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.14;
  });

  return (
    <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.7}>
      <group
        ref={ref}
        position={mobile ? [-1.5, 2.4, -3] : [3.7, 1.55, -2.6]}
        rotation={[0.12, -0.35, -0.12]}
        scale={mobile ? 0.55 : 0.8}
      >
        <mesh>
          <boxGeometry args={[1.5, 0.95, 0.07]} />
          <meshStandardMaterial
            color="#b8c5d8"
            metalness={0.95}
            roughness={0.18}
          />
        </mesh>

        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[1.35, 0.8]} />
          <meshStandardMaterial
            color="#162a45"
            metalness={0.55}
            roughness={0.22}
          />
        </mesh>

        {/* Cinematic frame light */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[0.035, 0.7]} />
          <meshBasicMaterial color="#91b9f7" />
        </mesh>
      </group>
    </Float>
  );
}

function GlassRing() {
  const ref = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.08;
    ref.current.rotation.y += delta * 0.14;
  });

  return (
    <Float speed={1.2} floatIntensity={0.7}>
      <group ref={ref} position={[-2.2, -1.5, -2.5]} scale={0.65}>
        <mesh>
          <torusGeometry args={[0.85, 0.22, 64, 128]} />
          <MeshTransmissionMaterial
            samples={2}
            resolution={128}
            thickness={0.8}
            roughness={0.06}
            chromaticAberration={0.04}
            distortion={0.15}
            color="#b5c9e8"
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroScene({
  reduced,
  mobile,
  isVisible,
}: {
  reduced: boolean;
  mobile: boolean;
  isVisible: boolean;
}) {
  return (
    <Canvas
      dpr={mobile ? 1 : [1, 1.3]}
      frameloop={reduced || !isVisible ? "demand" : "always"}
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      aria-hidden
    >
      <ambientLight intensity={0.45} />

      <directionalLight
        position={[4, 5, 5]}
        intensity={1.4}
      />

      <Rig>
        <CameraLens mobile={mobile} />
<FilmFrame mobile={mobile} />

        {!mobile && <GlassRing />}
      </Rig>

      {/* Premium studio reflections */}
      <Environment resolution={128} frames={1}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={3}
            position={[0, 5, -9]}
            scale={2}
          />

          <Lightformer
            form="circle"
            intensity={2}
            position={[-5, 1, -1]}
            scale={2}
          />

          <Lightformer
            form="ring"
            color="#5b8cff"
            intensity={5}
            position={[-5, -1, -1]}
            scale={3}
          />

          <Lightformer
            form="rect"
            intensity={3}
            position={[10, 1, 0]}
            scale={[20, 2, 1]}
          />

          <Lightformer
            form="rect"
            color="#9db8ff"
            intensity={1.5}
            position={[0, 0, 10]}
            scale={[10, 10, 1]}   
          />
        </group>
      </Environment>
    </Canvas>
  );
}
