import Background from "./Background";
import React, { useState, useEffect } from 'react';

const CheeseTaco = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    console.log('CheeseTaco component mounted');
    changeBackground('Wallpaper1');
  }, []);

  const changeBackground = (imageName) => {
    console.log('Changing background to', imageName)
    setBackgroundImage(`/src/assets/Wallpaper/${imageName}`);
    console.log('New background state:', backgroundImage);
  };

  return (
    <div>
      <Background imageUrl={backgroundImage} />
      {/* Your other components/content here */}
      <button onClick={() => changeBackground('Wallpaper1')}>Set Background 1</button>
      <button onClick={() => changeBackground('Wallpaper2')}>Set Background 2</button>
      {/* Add similar buttons for other backgrounds */}
    </div>
  );
};

export default CheeseTaco;