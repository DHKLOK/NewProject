import Background from "./Background";
import React, { useState, useEffect } from 'react';
import * as wallpapers from "./Wallpaper/wallpaperINDEX.js"

const CheeseTaco = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [imageIndex, setImageIndex] = useState(0);

  const backgroundImages = Object.values(wallpapers); 

  useEffect(() => {
    console.log('CheeseTaco component mounted');
    changeBackground(backgroundImages[imageIndex]);
  }, [imageIndex]);

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
  }

  const previousImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + backgroundImages.length) % backgroundImages.length);

  }


  const changeBackground = (imageName) => {
    console.log('Changing background to', imageName)
    setBackgroundImage(`${imageName}`);
    console.log('New background state:', backgroundImage);
    //${imageName}
  };

  return (
    <div>
      <Background imageUrl={backgroundImage} />
      {/* Your other components/content here */}
      <button onClick={nextImage}>Next Wallpaper</button>
      <button onClick={previousImage}>Previous Wallpaper</button>
      {/* Add similar buttons for other backgrounds */}
    </div>
  );
};

export default CheeseTaco;