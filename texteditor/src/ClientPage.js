import React from 'react';
import './Editor.css';
const ClientPage = ({userName}) => {
  console.log(userName);
  return (
    <>
        <div>
            <div className='IndvidualClient'>
                <img src=""/>
                <p className='client-text'>{userName}</p>
            </div>
        </div>
     </>
  )
}
export default ClientPage
