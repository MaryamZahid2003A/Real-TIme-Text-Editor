import React from 'react';
import './Editor.css';
import Avatar from 'react-avatar';
const ClientPage = ({userName}) => {
  console.log(userName);
  return (
    <>
        <div>
            <div className='IndvidualClient'>
                <Avatar name={userName} size={60}  round="14px"/>
                <p className='client-text'>{userName}</p>
            </div>
        </div>
     </>
  )
}
export default ClientPage
