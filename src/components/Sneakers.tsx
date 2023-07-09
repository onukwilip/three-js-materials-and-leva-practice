/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 -T -t scene.gltf --shadows
Author: RTFKT Studios (https://sketchfab.com/rtfkt)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rtfkt-creator-one-9b8d69cfcd1b4addb770a4768bef6a6d
Title: RTFKT CREATOR ONE
*/

import * as THREE from "three";
import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useControls } from "leva";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
  };
  materials: {
    bladeblinn31SG: THREE.MeshStandardMaterial;
    blinn6SG: THREE.MeshStandardMaterial;
    blinn1SG: THREE.MeshStandardMaterial;
    blinn2SG: THREE.MeshStandardMaterial;
    blinn3SG: THREE.MeshStandardMaterial;
    blinn4SG: THREE.MeshStandardMaterial;
    blinn5SG: THREE.MeshStandardMaterial;
  };
};

export const Sneakers = forwardRef<THREE.Group, JSX.IntrinsicElements["group"]>(
  (props, ref) => {
    const { nodes, materials } = useGLTF(
      "/models/sneakers/scene-transformed.glb"
    ) as GLTFResult;

    useControls("Sneaker", () => {
      const props: Record<string, any> = {};

      Object.values(materials).forEach((material, i) => {
        props[material.name] = {
          value: "#ffffff",
          onChange: (value: string) => {
            material.color = new THREE.Color(value);
          },
        };
      });

      return props;
    });

    const hoverHandler = (e: any, materialName: string) => {
      e.stopPropagation();
      document.getElementById(`Sneaker.${materialName}`)?.focus();
    };

    return (
      <group {...props} dispose={null} ref={ref}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.bladeblinn31SG}
          rotation={[-Math.PI / 2, 0, 0]}
          onPointerOver={(e) => hoverHandler(e, "bladeblinn31SG")}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.blinn6SG}
          rotation={[-Math.PI / 2, 0, 0]}
          onPointerOver={(e) => hoverHandler(e, "blinn6SG")}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.blinn1SG}
          rotation={[-Math.PI / 2, 0, 0]}
          onPointerOver={(e) => hoverHandler(e, "blinn1SG")}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.blinn2SG}
          rotation={[-Math.PI / 2, 0, 0]}
          onPointerOver={(e) => hoverHandler(e, "blinn2SG")}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.blinn3SG}
          rotation={[-Math.PI / 2, 0, 0]}
          onPointerOver={(e) => hoverHandler(e, "blinn3SG")}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.blinn4SG}
          rotation={[-Math.PI / 2, 0, 0]}
          onPointerOver={(e) => hoverHandler(e, "blinn4SG")}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.blinn5SG}
          rotation={[-Math.PI / 2, 0, 0]}
          onPointerOver={(e) => hoverHandler(e, "blinn5SG")}
        />
      </group>
    );
  }
);

useGLTF.preload("/models/sneakers/scene-transformed.glb");
