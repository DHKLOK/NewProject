import React, { useState } from 'react';
import Card from '/src/Card.jsx';
import '/src/index.css';
import Links from './SideBarLinks/Links.jsx';
import Links2 from './SideBarLinks/Links2.jsx';
import Links3 from './SideBarLinks/Links3.jsx';
import Links4 from './SideBarLinks/Links4.jsx';
import Links5 from './SideBarLinks/Links5.jsx';

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
        {!isCollapsed && <Links3 />}
        <br />
        {!isCollapsed && <Links4 />}
        <br />
        {!isCollapsed && <Links5 />}
      </div>
            {/* Your other components/content here */}
            {/*<button onClick={nextImage}>Next Wallpaper</button>*/}
            {/*<button onClick={previousImage}>Previous Wallpaper</button>*/}
      {/* Add similar buttons for other backgrounds */}
    </div>
  );
}

export default LeftBox;