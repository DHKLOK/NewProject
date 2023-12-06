import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [commonBackgroundColor, setCommonBackgroundColor] = useState('rgb(243, 130, 130)');
  const [commonTextColor, setCommonTextColor] = useState('red');

  const handleCommonColorChange = (color) => {
    setCommonBackgroundColor(color);
    setCommonTextColor(color);
  };

  return (
    <ColorContext.Provider value={{ commonBackgroundColor, commonTextColor, handleCommonColorChange }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  return useContext(ColorContext);
};
