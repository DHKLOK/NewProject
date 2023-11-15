import React, { useState } from 'react';
import Card from '/src/Card.jsx';
import '/src/index.css';
import './LeftBox.css';
import Links from './Links.jsx';
import Links2 from './Links2.jsx';

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

      <div className="content-container">
        {!isCollapsed && <Card />}
        <br />
        {!isCollapsed && <Links />}
        <br />
        {!isCollapsed && <Links2 />}
        <br />
        {!isCollapsed && <Links />}
        <br />
        {!isCollapsed && <Links />}
        <br />
        {!isCollapsed && <Links />}
      </div>
    </div>
  );
}

export default LeftBox;