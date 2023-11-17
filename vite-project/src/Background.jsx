import React from 'react';

const Background = ({ imageUrl }) => {
  console.log('Background component rendering with imageUrl:', imageUrl);
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    width: '200vh',
  };

  return <div key={imageUrl} style={backgroundStyle}></div>;
};

export default Background;
