import React from 'react';

const Background = ({ imageUrl }) => {
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  return <div style={backgroundStyle}></div>;
};

export default Background;
