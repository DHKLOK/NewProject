// CheeseTaco.js

import Background from "./Background";
import React, { useState, useEffect } from 'react';
import * as wallpapers from "./Wallpaper/wallpaperINDEX.js";
import { useWallpaper } from './WallpaperContext.jsx'; // Update the import
import TimerDisplay from "./timer.jsx";

const CheeseTaco = () => {
  const { nextImage, previousImage, imageIndex, backgroundImages, setBackgroundImage } = useWallpaper();

  useEffect(() => {
    // console.log('CheeseTaco component mounted or imageIndex changed');
    // console.log('Current imageIndex:', imageIndex);
    // console.log('DINGDONG', backgroundImages[imageIndex]);
    setBackgroundImage(backgroundImages[imageIndex]);
    // console.log('New background state:', backgroundImages[imageIndex]);
  }, [imageIndex, backgroundImages, setBackgroundImage]);

  return (
    
    
    <div>
      <Background imageUrl={backgroundImages[imageIndex]} />
    </div>
  );
};

export default CheeseTaco;
