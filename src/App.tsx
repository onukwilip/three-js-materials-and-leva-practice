import { Canvas } from "@react-three/fiber";
import React, { FC, Suspense, useState } from "react";
import ModelScene from "./components/ModelScene";
import { ModelType } from "./types";
import { models } from "./data";

const ModelsList: FC<{ onCardClick: (model: ModelType) => void }> = ({
  onCardClick,
}) => {
  return (
    <div className="models-list-container">
      <div className="models-list">
        {models.map((modelOption, i) => (
          <li key={i} onClick={() => onCardClick(modelOption.Model)}>
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
