import React, { useState } from 'react';
import './App.css';
import './index.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About'
import Services from './Services.js';
import CustomCursor from './CustomCurser.jsx';

function App() {
   const [isOpen,setIsOpen]=useState(false);
  return (
    <>
    <CustomCursor/>

    <button className='absolute right-4 md:hidden flex flex-col justify-center items-center space-y-1' onClick={()=>setIsOpen(!isOpen)}>
    <span className='block w-6 h-0.5 bg-black'></span>
    <span className='block w-6 h-0.5 bg-black'></span>
    <span className='block w-6 h-0.5 bg-black'></span>
    </button>
      <div className='text-black cursor-none font-roboto'>
        <img className="h-16 "src='https://entrancepreparationhub.com/wp-content/uploads/2025/05/GUPTA-JI-YT-3.png'></img>
        <nav className="-mt-16">
          <ul className=" hidden md:flex justify-end gap-9 font-bold">
            <li><Link to="/" className="!text-black no-underline hover:!text-blue-600 font-bold">Home</Link>
</li>
            <li><Link to="About" className='!text-black hover:!text-blue-600'>About</Link></li>
            <li><Link to="Services" className='!text-black hover:!text-blue-600'>Services</Link></li>
            <li>Contact</li>
          </ul>
           <div className="relative">
  {isOpen && (
    <ul className="absolute right-4 z-50 top-16 flex flex-col gap-4 mt-4 md:hidden bg-white shadow-lg p-4 rounded-md">
      <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
      <li><Link to="/About" onClick={() => setIsOpen(false)}>About</Link></li>
      <li><button onClick={() => setIsOpen(false)}>Services</button></li>
      <li><button onClick={() => setIsOpen(false)}>Contact</button></li>
    </ul>
  )}
</div>

        </nav>
        <div>

        </div>
      </div>
       <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="About" element={<About/>} />
            <Route path='/Services' element={<Services/>}/>
          </Routes>
    </>
  );
}

export default App;