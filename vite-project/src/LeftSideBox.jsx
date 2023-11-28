import React, { useState } from 'react';
import Card from '/src/Card.jsx';
import '/src/index.css';
import Links from './SideBarLinks/Links.jsx';
import Links2 from './SideBarLinks/Links2.jsx';
import Links3 from './SideBarLinks/Links3.jsx';
import Links4 from './SideBarLinks/Links4.jsx';
import Links5 from './SideBarLinks/Links5.jsx';
import { useWallpaper } from './WallpaperContext.jsx';
import circleIcon from './assets/circle1';

function LeftBox() {
  // State for managing the sidebar collapse/expand state
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Wallpaper context for handling wallpaper changes
  const { nextImage, previousImage } = useWallpaper();

  return (
    <div className={`secondLayer ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Button for toggling sidebar */}
      <button
        onClick={toggleSidebar}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        {isCollapsed ? (
          // Icon for collapsed state
          <img
            src={circleIcon}
            alt="Expand Sidebar"
            style={{
              marginTop: '5px',
              height: '50px',
              position: 'fixed',
              top: '10px', // Adjust the top position as needed
              left: '10px',
            }}
          />
        ) : (
          // Icon for expanded state
          <img
            src={circleIcon}
            alt="Collapse Sidebar"
            style={{
              height: '50px',
              marginTop: '5px',
              position: 'fixed',
              top: '10px', // Adjust the top position as needed
              left: '10px',
            }}
          />
        )}
      </button>

      {/* Container for main content */}
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

      {/* Additional components/content */}
      {!isCollapsed ? (
        <button onClick={nextImage}>Next Wallpaper</button>
      ) : null}
      {!isCollapsed ? (
        <button onClick={previousImage}>Previous Wallpaper</button>
      ) : null}
      {/* Add similar buttons for other backgrounds */}
    </div>
  );
}

export default LeftBox;
