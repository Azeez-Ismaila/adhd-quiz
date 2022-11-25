import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white p-3 font-bold flex flex-row justify-between md:justify-around items-center">
      <Link to="/" className='text-2xl'>ADHD Quiz</Link>
      
        <Link to="/quiz" className="rounded p-3 px-10 md:px-3 bg-white text-blue-600 md:w-1/4 text-center" >Take Quiz</Link>
      
    </div>
  );
}

export default Navbar
