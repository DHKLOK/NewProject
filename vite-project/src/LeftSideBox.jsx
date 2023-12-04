import React, { useState } from 'react';
import Card from '/src/Card.jsx';
import '/src/index.css';
import Links from './SideBarLinks/Links.jsx';
import Links2 from './SideBarLinks/Links2.jsx';
import Links3 from './SideBarLinks/Links3.jsx';
import Links4 from './SideBarLinks/Links4.jsx';
import Links5 from './SideBarLinks/Links5.jsx';
import { useWallpaper } from './WallpaperContext.jsx';
import circleIcon from './assets/Circle1.png';
import LinkContainer from './SideBarLinks/buttonContainer.jsx';
import ButtonContainer from './SideBarLinks/buttonContainer.jsx';
import { useColor } from './ColorContext'

function LeftBox() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { commonBackgroundColor } = useColor();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const { nextImage, previousImage } = useWallpaper();

  return (
    <div className={`secondLayer ${isCollapsed ? 'collapsed' : ''}`}>
      <div>
        <button
          onClick={toggleSidebar}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            padding: 0,
            margin: 0,
            transition: 'transform 0.3s ease', // Added transition for smooth animation
            transform: isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)', // Rotate the icon
          }}
        >
          <img
            src={circleIcon}
            alt={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            style={{
              height: '50px',
              paddingTop: '5px',
              paddingLeft: '8px'
            }}
          />
        </button>
      </div>

      <div className="content-container">
        <div>
          {!isCollapsed && <Card  backgroundColor={commonBackgroundColor} />}
        </div>
        <br />
        <div>
          {!isCollapsed && <Links backgroundColor={commonBackgroundColor} />}
          <br />
          {!isCollapsed && <Links2 backgroundColor={commonBackgroundColor}  />}
          <br />
          {!isCollapsed && <Links3 backgroundColor={commonBackgroundColor}  />}
          <br />
          {!isCollapsed && <Links4 backgroundColor={commonBackgroundColor}  />}
          <br />
          {!isCollapsed && <Links5 backgroundColor={commonBackgroundColor}  />}
        </div>
      </div>

      <div className="additional-buttons">
        {!isCollapsed && <button onClick={nextImage}>Next Wallpaper</button>}
        {!isCollapsed && <button onClick={previousImage}>Previous Wallpaper</button>}
        {!isCollapsed && <LinkContainer />}
      </div>
    </div>
  );
}

export default LeftBox;

