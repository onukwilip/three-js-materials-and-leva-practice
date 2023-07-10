import { Canvas } from "@react-three/fiber";
import React, { FC, Suspense, useMemo, useState } from "react";
// import ModelScene from "./components/ModelScene";
import { ModelType } from "./types";
import { models } from "./data";
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
          <li
            key={i}
            // variants={variants}
            // initial="initial"
            // animate="animate"
            // transition={{ delay: i * 0.1 }}
            onClick={() => onCardClick(modelOption.Model)}
          >
            <div className="img-container">
              <img src={modelOption.image} alt={modelOption.name} />
            </div>
            <span>{modelOption.name}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [modelConfig, setModelConfig] = useState<ModelType>(models[0].Model);

  const onModelChange = (model: ModelType) => {
    setModelConfig(model);
  };

  const ModelScene = React.lazy(() => import("./components/ModelScene"));

  return (
    <div className="app">
      <Suspense fallback={"Loading..."}>
        <div className="model-scene">
          <Canvas shadows>
            <ModelScene model={modelConfig} />
          </Canvas>
        </div>
        <ModelsList onCardClick={onModelChange} />
      </Suspense>
    </div>
  );
};

export default App;
