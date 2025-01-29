import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Editor from './Editor';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <div className='MainPage'>
      <Toaster  position="top-right" 
        toastOptions={{
          success:{
            theme:{
              primary:'red',
            },
          }
        }}
      >
       
      </Toaster>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/Editor' element={<Editor/>}></Route>
      </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
