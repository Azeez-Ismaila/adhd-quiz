import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>What is ADHD</h1>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure libero
        praesentium asperiores laudantium quam adipisci ipsam est, culpa
        corrupti sit nostrum consequatur officia incidunt sunt laborum, labore
        sint optio fugit, dolore recusandae in modi? Aperiam odio laboriosam ex
        delectus natus commodi, nam voluptatibus accusamus debitis? Voluptatibus
        ipsam placeat sed non.
      </p>
      <button>
        <Link to="/quiz">Take Quiz</Link>
      </button>
    </div>
  );
}

export default Home
