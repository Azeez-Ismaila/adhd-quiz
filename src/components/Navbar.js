import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white p-3 font-bold flex flex-row justify-between md:justify-around items-center">
      <Link to="/" className='text-2xl'>ADHD Quiz</Link>
      <button className="rounded p-3 px-10 md:px-3 bg-white text-blue-600 md:w-1/4">
        <Link to="/quiz">Take Quiz</Link>
      </button>
    </div>
  );
}

export default Navbar
