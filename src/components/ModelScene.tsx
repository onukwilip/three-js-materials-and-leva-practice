import React, { useRef } from "react";
import { ModelType } from "../types";
import {
  PerspectiveCamera,
  OrbitControls,
  Sphere,
  ContactShadows,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

const ModelScene: React.FC<{ model: ModelType }> = ({ model }) => {
  const orbitRef = useRef<OrbitControlsImpl>(null);
  const contactShadowYPosition =
    model.props.name === "Backpack"
      ? -2
      : (model.props.position as Vector3).y - 0.2;
  useFrame(() => {
    if (model.props.position && orbitRef.current) {
      const { x, z } = model.props.position as Vector3;
      orbitRef.current.target.x = x;
      orbitRef.current.target.z = z;
      orbitRef.current.update();
    }
  });
  return (
    <>
      <PerspectiveCamera makeDefault position-z={3} position-y={-2} />
      <OrbitControls makeDefault ref={orbitRef} maxPolarAngle={Math.PI / 2} />
      <model.component {...model.props} castShadow />
      <ContactShadows
        rotation-x={Math.PI / 2}
        position-y={contactShadowYPosition}
        width={2}
        height={2}
        far={100}
      />

      <ambientLight color={"white"} intensity={0.5} />
      <directionalLight
        color={"white"}
        intensity={1}
        position={[1, 1, 1]}
        castShadow
      >
        <Sphere scale={0.05} />
      </directionalLight>
    </>
  );
};

export default ModelScene;
