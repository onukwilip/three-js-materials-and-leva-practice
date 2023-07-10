import React, { FC, useMemo, useState, useContext } from "react";
import { models } from "../data";
import { ModelType } from "../types";
import { Canvas } from "@react-three/fiber";
import ModelScene from "./ModelScene";
import { motion, Variants } from "framer-motion";
import { Checkbox, CheckboxProps } from "semantic-ui-react";
import sun from "../assets/images/icons8-sun-128.png";
import moon from "../assets/images/icons8-moon-100.png";
import { ToggleContext } from "../contexts/ToggleContext";

const ModelsList: FC<{ onCardClick: (model: ModelType) => void }> = ({
  onCardClick,
}) => {
  const variants: Variants = useMemo<Variants>(() => {
    if (window.innerWidth > 1150)
      return {
        initial: {
          x: -100,
          opacity: 0.5,
        },
        animate: {
          x: 0,
          opacity: 1,
        },
      };
    else
      return {
        initial: {
          y: 100,
          opacity: 0.5,
        },
        animate: {
          y: 0,
          opacity: 1,
        },
      };
  }, []);

  return (
    <div className="models-list-container">
      <div className="models-list">
        {models.map((modelOption, i) => (
          <motion.li
            key={i}
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ delay: i * 0.04, duration: 0.2 }}
            onClick={() => onCardClick(modelOption.Model)}
          >
            <div className="img-container">
              <img src={modelOption.image} alt={modelOption.name} />
            </div>
            <span>{modelOption.name}</span>
          </motion.li>
        ))}
      </div>
    </div>
  );
};

const Toggle: FC = () => {
  const displayState = useContext(ToggleContext);

  const onToggle = (
    e: React.FormEvent<HTMLInputElement>,
    { checked }: CheckboxProps
  ) => {
    if (checked === true) displayState.toggleToDark();
    else displayState.toggleToLight();
  };

  return (
    <div className="toggle">
      <img src={sun} alt="sun" />
      <Checkbox slider className="my-slider" onChange={onToggle} />
      <img src={moon} alt="moon" />
    </div>
  );
};

const Home = () => {
  const [modelConfig, setModelConfig] = useState<ModelType>(models[0].Model);

  const onModelChange = (model: ModelType) => {
    setModelConfig(model);
  };

  return (
    <>
      <div className="model-scene">
        <Canvas shadows>
          <ModelScene model={modelConfig} />
        </Canvas>
      </div>
      <Toggle />
      <ModelsList onCardClick={onModelChange} />
    </>
  );
};

export default Home;
