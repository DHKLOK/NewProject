// ColorContext.js
import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [commonBackgroundColor, setCommonBackgroundColor] = useState('rgb(243, 130, 130)');

  const handleCommonColorChange = (color) => {
    setCommonBackgroundColor(color);
  };

  return (
    <ColorContext.Provider value={{ commonBackgroundColor, handleCommonColorChange }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  return useContext(ColorContext);
};
