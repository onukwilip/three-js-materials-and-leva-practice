/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 -T -t scene.gltf --shadows
Author: katjagricishina (https://sketchfab.com/katjagricishina)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sofa-03550a3529c24611a12aa158747374e0
Title: Sofa
*/

import * as THREE from "three";
import React, { forwardRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useControls } from "leva";
import * as rdd from "react-device-detect";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
  };
  materials: {
    ["Scene_-_Root"]: THREE.MeshStandardMaterial;
  };
};

export const Sofa = forwardRef<THREE.Group, JSX.IntrinsicElements["group"]>(
  (props, ref) => {
    const { nodes, materials } = useGLTF(
      "/models/sofa/scene-transformed.glb"
    ) as GLTFResult;

    useControls("Sofa", {
      color: {
        value: "#ffffff",
        onChange: (color) => {
          materials["Scene_-_Root"].color = new THREE.Color(color);
        },
      },
      texture: {
        image: "",
        onChange: (image) => {
          if (image) {
            const texture = new THREE.TextureLoader().load(image);
            materials["Scene_-_Root"].map = texture;
          }
        },
      },
    });

    const hoverHandler = (e: any) => {
      e.stopPropagation();
      if (rdd.isMobile) return;
      document.getElementById("Sofa.color")?.focus();
      (
        document.getElementsByClassName(
          "leva-c-bSezwh"
        ) as HTMLCollectionOf<HTMLDivElement>
      )[0]?.focus();
    };

    return (
      <group {...props} dispose={null} ref={ref} onPointerOver={hoverHandler}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    );
  }
);
useGLTF.preload("/models/sofa/scene-transformed.glb");
