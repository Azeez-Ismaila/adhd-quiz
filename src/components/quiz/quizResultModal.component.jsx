
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const QuizResultModal =({result})=>{
  const [finalComment, setFinalComment] = useState("")

  useEffect(()=>{
  
    if(result > 40){
   
      setFinalComment("likely")
    }
    if(result > 20 && result < 39){
    
      setFinalComment("possiblely")
    }
    if(result < 20 ){

      setFinalComment("unlikely")
    }
 
  },[result])
   
       
    
    return(
        <div>
           <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30 bg-white
           w-[75%] md:w-[40%] lg:w-[30%] rounded-[16px] p-6 text-[1.1rem]">
            <h2 className="text-center mb-2 font-semibold">Your results</h2>
            <h1 className="text-center mb-2 font-bold">ADHD {finalComment}</h1>
            <hr />
            <h2 className="mb-2 font-semibold">your total score is {result} out of 58</h2>
            <h3 className="mb-2 font-semibold">Result of your Quiz</h3>
            <p className="text-[1rem] smallheight:text-[14px]">
            You have answered this anxiety screening in such a way as to 
            suggest that you are {finalComment}  suffering from an anxiety disorder. 
            </p>
            {finalComment === "unlikely"?
            
  
             <p className="smallheight:text-[14px]">Remember that a little anxiety in normal, everyday life is to be expected and is a good thing. Nobody should be without any anxiety whatsoever, as anxiety is our body's way of telling us that we should pay closer attention to a situation, event or person in our lives (even if that person is ourselves). Scoring in this range suggests you have that normal level of anxiety but would not likely qualify for an anxiety disorder diagnosis.</p>:""} 
             {finalComment === "possiblely"?
             <p className="smallheight:text-[14px]"> Based upon your responses to this adult ADHD screening quiz, you may or may not have attention deficit disorder. People who have answered similarly to you sometimes qualify for a diagnosis of ADHD or ADD. Some people with scores similar to yours have sought professional treatment for this concern; others have not.</p>:""} 
            
             {finalComment === "likely"?
             <p className="smallheight:text-[14px]">Based upon your responses to this adult ADHD screening quiz, you may very well have an adult attention deficit disorder. People who have answered similarly to you typically qualify for a diagnosis of ADHD or ADD, and have sought professional treatment for this mental health concern.</p>:""} 
            
            
            <div className="flex justify-center">
            <Link to="/" className="bg-blue-400 text-white px-6 py-3 rounded-[16px] hover:bg-blue-600 mt-2 ">Homepage </Link>
            </div>
           
           </div>

            <div className="z-20 fixed top-0 left-0 bg-[#4040404d] blur w-full h-[100%] overflow-hidden"></div>
             
        </div>
    )
}

export default QuizResultModal;
