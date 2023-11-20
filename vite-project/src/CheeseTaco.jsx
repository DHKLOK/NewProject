import Background from "./Background";
import React, { useState, useEffect } from 'react';

const CheeseTaco = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [imageIndex, setImageIndex] = useState(0);

  const backgroundImages = ['Wallpaper1.png', 'wallpaper2.jpg', 'wallpaper3.jpg', /* Add more images as needed */];

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
    setBackgroundImage(`./src/assets/Wallpaper/${imageName}`);
    console.log('New background state:', backgroundImage);
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