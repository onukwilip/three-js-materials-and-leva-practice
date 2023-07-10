import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Group } from "three";
import { GroupProps } from "@react-three/fiber";

export type ModelType = {
  component: ForwardRefExoticComponent<
    Omit<GroupProps, "ref"> & RefAttributes<Group>
  >;
  props: JSX.IntrinsicElements["group"];
};

export type ToggleContextType = {
  state: "light" | "dark";
  toggleToLight: () => void;
  toggleToDark: () => void;
};
