// src/context/PointsContext.js
import React, { createContext, useContext, useState } from "react";

const PointsContext = createContext();

export const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState(0);

  // Correctly define the incrementPoints function
  const incrementPoints = (value) => {
    setPoints((prevPoints) => prevPoints + value);
  };

  return (
    <PointsContext.Provider value={{ points, incrementPoints }}>
      {children}
    </PointsContext.Provider>
  );
};

export const usePoints = () => {
  return useContext(PointsContext);
};
