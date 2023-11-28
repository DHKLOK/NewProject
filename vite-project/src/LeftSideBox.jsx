import React, { useState } from 'react';
import Card from '/src/Card.jsx';
import '/src/index.css';
import Links from './SideBarLinks/Links.jsx';
import Links2 from './SideBarLinks/Links2.jsx';
import Links3 from './SideBarLinks/Links3.jsx';
import Links4 from './SideBarLinks/Links4.jsx';
import Links5 from './SideBarLinks/Links5.jsx';
import { useWallpaper } from './WallpaperContext.jsx';
import circleIcon from './assets/circle1.png'


function LeftBox() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const { nextImage, previousImage } = useWallpaper();

  return (

<div className={`secondLayer ${isCollapsed ? 'collapsed' : ''}`}>
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
    <img src={circleIcon} alt="Expand Sidebar" style={{ marginTop: '5px', height: '50px' }} />
  ) : (
    <img src={circleIcon} alt="Collapse Sidebar" style={{ height: '50px' }} />
  )}
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
            {!isCollapsed ? <button onClick={nextImage}>Next Wallpaper</button> : null}
            {!isCollapsed ? <button onClick={previousImage}>Previous Wallpaper</button> : null}
      {/* Add similar buttons for other backgrounds */}
    </div>
  );
}

export default LeftBox;