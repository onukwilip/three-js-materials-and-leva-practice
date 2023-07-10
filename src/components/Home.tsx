import React, { FC, useMemo, useState } from "react";
import { models } from "../data";
import { ModelType } from "../types";
import { Canvas } from "@react-three/fiber";
import ModelScene from "./ModelScene";
import { motion, Variants } from "framer-motion";

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
      <ModelsList onCardClick={onModelChange} />
    </>
  );
};

export default Home;
