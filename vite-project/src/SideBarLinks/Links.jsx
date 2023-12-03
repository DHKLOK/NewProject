import React, { useState } from 'react';
import '/src/index.css'
import ButtonContainer from './buttonContainer';

function Links({ backgroundColor }) {
    return (
      <button className='link-container' style={{ backgroundColor }} onClick={() => console.log("button clicked")}>
        <h1>Link</h1>
      </button>
    );
  }
export default Links;