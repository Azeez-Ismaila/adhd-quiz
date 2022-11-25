import React from 'react'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col p-4 gap-6 md:w-2/4 mx-auto ">
      <h1 className=" text-4xl font-bold text-blue-600">What is ADHD</h1>

      <p>
        Attention deficit hyperactivity disorder (ADHD) is a common
        neurodevelopmental condition that can affect how you think, process
        emotions, and respond to your environment. Though ADHD is commonly
        diagnosed in children and teens, it can be diagnosed in adults, too.
      </p>
      <p>
        Not everyone has the same ADHD symptoms or experiences them in the same
        way. In some instances, symptoms may not be as intense, while you could
        also experience bad ADHD days for many reasons. ADHD can look different
        for everyone. For example, symptoms of ADHD in children might look and
        feel different than in adults. Your symptoms will also depend on the
        type of ADHD you have. The major symptoms of ADHD include inattention
        and hyperactivity or impulsivity.
      </p>
      <p>
        But showing these symptoms doesn’t necessarily mean you or your child
        has ADHD. If you think you might have ADHD, consider taking our ADHD
        test. This brief test will help determine if you may need to see a
        mental health professional for diagnosis and treatment of ADHD. Only a
        mental health professional or psychiatrist can accurately diagnose ADHD,
        and if needed, recommend a treatment plan.
      </p>
      
        <Link to="/quiz" className="rounded p-3 bg-blue-600 text-white md:w-1/4 mt-2">Take Quiz</Link>
      
    </div>
  );
}

export default Home
