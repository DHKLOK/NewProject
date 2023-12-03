import React, { useState } from 'react';
import '/src/index.css';  // Make sure to import your CSS file
import Links from './Links';
import Links2 from './Links2';
import Links3 from './Links3';
import Links4 from './Links4';
import Links5 from './Links5';

function ButtonContainer() {
  const [commonBackgroundColor, setCommonBackgroundColor] = useState('rgb(243, 130, 130)');

  const handleCommonColorChange = (color) => {
    setCommonBackgroundColor(color);
  };

  return (
    <div>
      <input
        type="color"
        value={commonBackgroundColor}
        onChange={(e) => handleCommonColorChange(e.target.value)}
      />
      <button onClick={() => handleCommonColorChange('some_color')}>
        Change Color for All Buttons
      </button>

      {/* Render multiple Links components */}
      <Links backgroundColor={commonBackgroundColor} />
      <Links2 backgroundColor={commonBackgroundColor} />
      {/* Add more Links components as needed */}
    </div>
  );
}
export default ButtonContainer;