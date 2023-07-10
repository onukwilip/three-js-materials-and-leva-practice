import React, { createContext, FC, useState } from "react";
import { ToggleContextType } from "../types";

export const ToggleContext = createContext<ToggleContextType>({
  state: "light",
  toggleToDark: () => {},
  toggleToLight: () => {},
});

const ToggleContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [displayState, setdisplayState] = useState<"light" | "dark">("light");

  const toggleToLight = () => setdisplayState("light");
  const toggleToDark = () => setdisplayState("dark");

  const contextValue = {
    state: displayState,
    toggleToLight: toggleToLight,
    toggleToDark: toggleToDark,
  };

  return (
    <>
      <ToggleContext.Provider value={contextValue}>
        {children}
      </ToggleContext.Provider>
    </>
  );
};

export default ToggleContextProvider;
