import React, { useState, useEffect } from 'react';
import { useColor } from './ColorContext';

function TimerDisplay() {
  const { commonTextColor } = useColor();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const displayTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(displayTimer);
  }, []); // Empty dependency array ensures useEffect runs once after the initial render

  return (

    <div className='timer-container' style={{ color: commonTextColor, textShadow: '1px 1px 1px rgba(255, 255, 255, 0.8)', fontFamily: 'Roboto', top:130 }}>
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default TimerDisplay;
