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
    <div className='!font-sans'>
      <CustomCursor/>

    <button className='absolute right-4 md:hidden flex flex-col justify-center items-center space-y-1' onClick={()=>setIsOpen(!isOpen)}>
    <span className='block w-6 h-0.5 bg-black'></span>
    <span className='block w-6 h-0.5 bg-black'></span>
    <span className='block w-6 h-0.5 bg-black'></span>
    </button>
      <div className='text- cursor-none font-roboto '>
        <img className="h-16 -mt-2 "src='https://entrancepreparationhub.com/wp-content/uploads/2025/05/GUPTA-JI-YT-3.png'></img>
        <nav className="-mt-12">
          <ul className=" hidden md:flex justify-end gap-9 !font-bold">
            <li><Link to="/" className="!text-black no-underline hover:!text-blue-600 !font-bold">Home</Link>
</li>
            <li><Link to="Courses" className='!text-black hover:!text-blue-600 !font-bold'>Courses</Link></li>
            <li><Link to="Courses" className='!text-black hover:!text-blue-600 !font-bold'>Pages</Link></li>
           <li className="relative group">
  <Link to="Entrance Exam" className="!text-black hover:!text-blue-600 !font-bold">
    Entrance Exam
    
  </Link>
  


  {/* Big dropdown div */}
  <div className="absolute top-full left-0 mt-2 hidden w-[500px] h-[300px] bg-white text-black shadow-lg group-hover:block z-50 transition-all">
    <div className="p-4 ">
      <h2 className="text-lg font-semibold mb-2">Exam Categories</h2>
      <ul className="grid grid-cols-2 gap-4">
        <li>Engineering</li>
        <li>Medical</li>
        <li>Law</li>
        <li>Management</li>
        <li>Design</li>
        <li>Others</li>
      </ul>
    </div>
  </div>
</li>
            {/* <li>Contact Us</li> */}
            <div> 
              <div className='rounded px-2 '>
               <div className="flex items-center justify-between border-2 border-gray-300 rounded-3xl px-2 py-1 w-130 h-12 max-w-2xl">
  {/* Left side: Dropdown + Input */}
  <div className="flex items-center space-x-2 flex-grow">
     <svg
      width="14"
      height="14"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12H6.85714V6.85714H12V12ZM5.14286 12H0V6.85714H5.14286V12ZM12 5.14286H6.85714V0H12V5.14286ZM5.14286 5.14286H0V0H5.14286V5.14286Z"
        fill="blue"
      />
    </svg>
    {/* Category Dropdown */}
    <select className="px-3 py-2 outline-none bg-white text-gray-700 ">
      
      <option value="">All Categories</option>
      <option value="programming">Programming</option>
      <option value="design">Design</option>
      <option value="marketing">Marketing</option>
      <option value="business">Business</option>
      
    </select>
   

    {/* Search Input */}
    <input
      type="text"
      placeholder="Search your favorite courses"
      className="flex-grow px-4 py-2 !outline-none !text-black text-ellipsis"
    />
  </div>

  {/* Right side: Button */}
 <button className="bg-blue-600 text-black rounded-b-full hover:bg-blue-700 border-none transition flex items-center space-x-1 ml-2 p-0">
  <span>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="black" 
      className="w-6 h-6"  // Tailwind width and height classes
    >
      <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
    </svg>
  </span>
</button>

</div>

              </div>
            </div>
            <button className='text-black bg-[#f5fffa] !border-2 !border-amber-900 hover:!bg-orange-600 !font-bold'>LogIn</button>
          </ul>
          
           <div className="relative">
  {isOpen && (
    <ul className="absolute right-4 z-50 top-16 flex flex-col gap-4 mt-4 md:hidden bg-white shadow-lg p-4 rounded-md">
      <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
      <li><Link to="/Courses" onClick={() => setIsOpen(false)}>Courses</Link></li>
      <li> <Link to="/E"  onClick={() => setIsOpen(false)}>Entrance Exam </Link></li>
      <li className="" onClick={()=>setIsOpen(false)}>Pages</li>
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
    </div>
    </>
  );
}

export default App;