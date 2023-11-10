import React, { useState } from 'react';
import Card from '/src/Card.jsx';
import '/src/index.css';
import './LeftBox.css';

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

      {!isCollapsed && <Card />}
    </div>
  );
}

export default LeftBox;