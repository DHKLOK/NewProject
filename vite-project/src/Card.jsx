import profilePic from "./assets/simon.jpg"
import React, { useState } from 'react';
import '/src/index.css'
import buttonContainer from './SideBarLinks/buttonContainer';



function Card({backgroundcolor}){

return(

    <div className="card-container">
    <div className="card" style={{backgroundcolor}}>
        
    <img src={profilePic} style={{
            maxWidth: '100%', // Set the maximum width for responsiveness
            width: '100%',    // Ensure the image scales proportionally
            paddingTop: '10px',
            display: 'block',
            margin: '0px auto',
            height: 'auto',    // Allow the height to adjust proportionally
          }} alt="Profile Pic" />
    <h2 style={{textAlign: 'center'}}>Duhaks Lair </h2>
    <p style={{textAlign: 'center'}}>I am an amateur programmer and a WoW addicted gamer</p>
</div>
</div>
)

}

export default Card