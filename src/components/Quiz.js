import React from 'react'
import { Link } from "react-router-dom";
const Quiz = () => {
  return (
    <div className='flex flex-col'>
      Quiz
      <button>
        {" "}
        <Link to="/score">Submit</Link>
      </button>
    </div>
  );
}

export default Quiz