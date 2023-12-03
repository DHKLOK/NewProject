// WallpaperContext.js
import React, { createContext, useContext, useState } from 'react';
import * as wallpapers from "./Wallpaper/wallpaperINDEX.js";
import TimerDisplay from './timer.jsx';

const WallpaperContext = createContext();

export const WallpaperProvider = ({ children }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const backgroundImages = Object.values(wallpapers); // Add your background images here

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };
  
  const previousImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const setBackgroundImage = (image) => {
    const newIndex = backgroundImages.indexOf(image);
    if (newIndex !== -1) {
      setImageIndex(newIndex);
    }
  }

  return (
    <WallpaperContext.Provider value={{ imageIndex, backgroundImages, nextImage, previousImage, setBackgroundImage }}>
      {children}
    </WallpaperContext.Provider>
  );
};

export const useWallpaper = () => {
  return useContext(WallpaperContext);
};

import PropTypes from 'prop-types';

WallpaperProvider.propTypes = {
  children: PropTypes.node.isRequired,
};