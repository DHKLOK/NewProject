// buttonContainer.jsx
import React from 'react';
import Links from './Links';
import Links2 from './Links2';
import { useColor } from '../ColorContext'; // Verify the correct path

function ButtonContainer() {
  const { commonBackgroundColor, handleCommonColorChange } = useColor();

  return (
    <div>
      <input
        type="color"
        value={commonBackgroundColor}
        onChange={(e) => handleCommonColorChange(e.target.value)}
      />
      
    </div>
  );
}

export default ButtonContainer;
