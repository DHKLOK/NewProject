import React, { useState } from 'react';
import '/src/index.css'
import buttonContainer from './buttonContainer';

function Links2({backgroundColor}) {
    return (
        <button className='link-container' style={{ backgroundColor }}>
            <h1>Link 2</h1>
        </button>

    );
}
export default Links2;