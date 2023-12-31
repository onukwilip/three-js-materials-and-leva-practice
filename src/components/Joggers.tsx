/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 -T -t scene.gltf --shadows
Author: darrendillard1 (https://sketchfab.com/darrendillard1)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dillard-darren-joggers-1f6f7318f9364456b8d58c1eaf71762b
Title: Dillard, Darren Joggers
*/

import * as THREE from "three";
import React, { forwardRef, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useControls } from "leva";
import * as rdd from "react-device-detect";

type GLTFResult = GLTF & {
  nodes: {
    SM_PantsLo1Joggers_Lo_lambert1_0: THREE.Mesh;
  };
  materials: {
    lambert1: THREE.MeshStandardMaterial;
  };
};

export const Joggers = forwardRef<THREE.Group, JSX.IntrinsicElements["group"]>(
  (props, ref) => {
    const { nodes, materials } = useGLTF(
      "/models/joggers/scene-transformed.glb"
    ) as GLTFResult;

    useControls("Joggers", {
      color: {
        value: "#ffffff",
        onChange: (color) => {
          materials.lambert1.color = new THREE.Color(color);
        },
      },
      texture: {
        image: "",
        onChange: (image) => {
          if (image) {
            const texture = new THREE.TextureLoader().load(image);
            materials.lambert1.map = texture;
          }
        },
      },
    });

    const hoverHandler = (e: any) => {
      e.stopPropagation();

      if (rdd.isMobile) return;

      document.getElementById("Joggers.color")?.focus();
    };

    return (
      <group {...props} dispose={null} ref={ref} onPointerOver={hoverHandler}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SM_PantsLo1Joggers_Lo_lambert1_0.geometry}
          material={materials.lambert1}
        />
      </group>
    );
  }
);

useGLTF.preload("/models/joggers/scene-transformed.glb");
