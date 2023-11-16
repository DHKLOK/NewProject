import React from 'react';

const Background = ({ imageUrl }) => {
  const backgroundStyle = {
    backgroundImage: `url('/src/assets/Wallpaper/Wallpaper1.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  return <div key={imageUrl} style={backgroundStyle}></div>;
};

export default Background;
