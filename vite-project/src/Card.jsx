import profilePic from "./assets/simon.jpg"



function Card(){

return(
    <div className="card">
    <img src={profilePic} style={{ paddingTop: '10px', display: 'block', margin: '0px auto', width: '280px', height: '200px', }} alt="Profile Pic" />
    <h2 style={{textAlign: 'center'}}>Duhak</h2>
    <p style={{textAlign: 'center'}}>I am an amateur programmer and a WoW addicted gamer</p>
</div>
)

}

export default Card