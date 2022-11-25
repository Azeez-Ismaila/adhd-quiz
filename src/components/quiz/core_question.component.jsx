import { useState } from "react";


const CoreQuestion =({theQuestion, index, editableCoreQuestions})=>{
    const {question} = theQuestion;

    const [clickedValue, setClickedValue] = useState("")
   
    const clickedChecker=(value)=>{
    
     if(value === "No") setClickedValue("No");
     if(value === "Yes") setClickedValue("Yes");
   
 
    }

    const clicked =(e)=>{
  
      const value =e.target.innerHTML
      clickedChecker(value)
      editableCoreQuestions[index].answer = value
  
    }
    return(
        <>
        <div>
            <h2 className="font-medium  text-[1.2rem] md:text-[1.8rem] mx-4">{question}</h2>
            <div className="flex flex-wrap">
                <div onClick={clicked} 
                  className={clickedValue === "Yes"? 
                  "border border-blue-200  flex-[100%] sm:flex-[45%] bg-blue-400 text-white rounded-[16px] p-3 m-3 md:m-4 md:p-4 cursor-pointer ":
                  "border border-blue-200  flex-[100%] sm:flex-[45%] rounded-[16px] p-3 m-3 md:m-4 md:p-4 hover:bg-blue-100 cursor-pointer"}
                   
                >Yes</div>
                <div onClick={clicked} 
                  className={clickedValue === "No"? 
                  "border border-blue-200  flex-[100%] sm:flex-[45%] bg-blue-400 text-white rounded-[16px] p-3 m-3 md:m-4 md:p-4 cursor-pointer ":
                  "border border-blue-200  flex-[100%] sm:flex-[45%] rounded-[16px] p-3 m-3 md:m-4 md:p-4 hover:bg-blue-100 cursor-pointer"}
                   
                >No</div>
           
            </div>
        </div>
        </>
      )

}

export default CoreQuestion