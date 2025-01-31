import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditingPage = () => {
  const [value, setValue] = useState('');
  return (
    <div className='Editingpage'>
      <ReactQuill theme="snow" value={value} onChange={setValue}/>
    </div>
  )
}

export default EditingPage
