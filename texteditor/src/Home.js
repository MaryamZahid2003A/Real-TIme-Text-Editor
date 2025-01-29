import React from 'react';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast';

const Home = () => {
  const [teamId,setTeamId]=useState("");
  const [name,setName]=useState("");

  const createRoom=(e)=>{
    e.preventDefault();
    const id=uuidv4()
    console.log(id);
    setTeamId(id);
    toast.success('Created New Team!');
  }
  return (
    <div className='HomeBoxAdjusment'>
     
      <div className="container">
        <img src="https://cdn-icons-png.flaticon.com/128/13382/13382695.png" className='image'/>
      <form className="form">
        <h2 className="form-title">Real-Time MeetUp</h2>
        <input
          type="text"
          name="team"
          placeholder="Enter Team Name"
          value={teamId}
          onChange={(e)=>setTeamId(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-button" >
          Join
        </button>
      </form>
      <p >If you don't have an invite then!</p>
      <a href="/" onClick={createRoom} className='message'>Create New Room</a>
    </div>
      </div>
  )
}

export default Home
