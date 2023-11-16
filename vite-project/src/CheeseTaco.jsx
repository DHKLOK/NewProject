import Background from "./Background";
import React, { useState, useEffect } from 'react';

const CheeseTaco = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Set initial background image here
    changeBackground('Wallpaper1');
  }, []);

  const changeBackground = (imageName) => {
    setBackgroundImage(`/assets/Wallpaper/${imageName}`);
  };

  return (
    <div>
      <Background imageUrl={backgroundImage} />
      {/* Your other components/content here */}
      <button onClick={() => changeBackground('wallpaper1.jpg')}>Set Background 1</button>
      <button onClick={() => changeBackground('wallpaper2.jpg')}>Set Background 2</button>
      {/* Add similar buttons for other backgrounds */}
    </div>
  );
};

export default CheeseTaco;