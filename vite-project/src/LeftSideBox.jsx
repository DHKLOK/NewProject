import React, { useState } from 'react';
import Card from '/src/Card.jsx';
import '/src/index.css';
import './LeftBox.css';
import Links from './Links.jsx';

function LeftBox() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`secondLayer ${isCollapsed ? 'collapsed' : ''}`}>
      <button onClick={toggleSidebar}>
        {isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
      </button>

      {!isCollapsed && <Card />} <br></br>
      <Links></Links>

    </div>
    
  );
}

export default LeftBox;