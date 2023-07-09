import { ModelClass } from "./classes";
import { TShirt } from "./components/TShirt";
import tshirt from "./assets/images/tshirt.png";
import sofa from "./assets/images/sofa.png";
import backpack from "./assets/images/backpack.png";
import sneakers from "./assets/images/sneakers.png";
import joggers from "./assets/images/joggers.png";
import { Sneakers } from "./components/Sneakers";
import { Sofa } from "./components/Sofa";
import { Joggers } from "./components/Joggers";
import { Backpack } from "./components/Backpack";
import { Euler, Vector3 } from "three";

export const models = [
  new ModelClass("T-shirt", tshirt, {
    component: TShirt,
    props: {
      position: new Vector3(0, -1, -3),
      scale: 0.05,
      name: "T-shirt",
    },
  }),
  new ModelClass("Sneakers", sneakers, {
    component: Sneakers,
    props: {
      position: new Vector3(0, -1, -3),
      scale: 0.1,
      name: "Sneakers",
    },
  }),
  new ModelClass("Sofa", sofa, {
    component: Sofa,
    props: {
      position: new Vector3(0, -1, -3),
      scale: 0.05,
      rotation: new Euler(0, Math.PI / 2, 0),
      name: "Sofa",
    },
  }),
  new ModelClass("Joggers", joggers, {
    component: Joggers,
    props: {
      position: new Vector3(0, -2, -3),
      scale: 0.8,
      name: "Joggers",
    },
  }),
  new ModelClass("Backpack", backpack, {
    component: Backpack,
    props: {
      position: new Vector3(0, 0, -3),
      scale: 0.01,
      name: "Backpack",
    },
  }),
];
