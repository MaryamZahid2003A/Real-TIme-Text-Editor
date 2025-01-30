import React from 'react';
import { useState } from 'react';
import ClientPage from './ClientPage';
import './Editor.css';
import EditingPage from './EditingPage';
const Editor = () => {
  const [clients,setClient]=useState([
    {socketId:1 , userName:"Maryam"},
    {socketId:2, userName:"Fatima Zahid"},
    {socketId:3,userName:"Amna"},
    {socketId:1 , userName:"Asad Ahmed ZAhid"},
    {socketId:2, userName:"ali"},
    {socketId:3,userName:"umer"}
  ]);
  return (
    <>
    <div className='MainEditor'>
      <div className='Editor-part1'>
        <div className='editor-subpart'>
          <img src='https://cdn-icons-png.flaticon.com/128/13382/13382695.png' className='image'/>
          <p className="form-titleEditor">MeetUp</p>
        </div>
        <div >
          <div className='Client-List'>
            {
              clients.map((client)=>{
                return(
                <ClientPage key={client.socketId} userName={client.userName}/> );
              })
            }

          </div>
          <div>
            <button className='flex-editorbutton'>Leave</button>
          </div>  
        </div>
      </div>
      <div className='Editor-part2'>
            <EditingPage/>
      </div>
    </div>
    </>
  )
}

export default Editor
