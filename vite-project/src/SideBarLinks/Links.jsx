import React, { useState } from 'react';
import '/src/index.css'

function Links() {
    return (
        <button className='link-container' onClick={() => console.log("button 1 clicked")}>
            <h1>Link 1</h1>
        </button>

    );
}
export default Links;