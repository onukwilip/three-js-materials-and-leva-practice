import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import ToggleContextProvider from "./contexts/ToggleContext";
import "semantic-ui-css/semantic.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ToggleContextProvider>
      <App />
    </ToggleContextProvider>
  </>
);
