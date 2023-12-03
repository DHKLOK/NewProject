import React, { useState, useEffect } from 'react';

function TimerDisplay() {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Use useEffect to update the time and set up the interval
  useEffect(() => {
    const displayTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(displayTimer);
  }, []); // Empty dependency array ensures useEffect runs once after the initial render

  return (
    <div className='timer-container'>
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default TimerDisplay;
