import { useState } from "react"


const QuestionDiv = ({theQuestion, index, editableQuestions})=>{
    const {question} = theQuestion

    const [clickedValue, setClickedValue] = useState("")
   
   const clickedChecker=(value)=>{
   
    if(value === "Never") setClickedValue("Never");
    if(value === "Rarely") setClickedValue("Rarely");
    if(value === "Sometimes") setClickedValue("Sometimes");
    if(value === "Often") setClickedValue("Often");

   }
    const clicked =(e)=>{
        
      const value =e.target.innerHTML
      clickedChecker(value);
      editableQuestions[index].answer = value
      
    }


  return(
    <>
    <div>
        <h2 className="font-medium  text-[1.2rem] md:text-[1.8rem] mx-4">{question}</h2>
        <div className="flex flex-wrap">
            <div onClick={clicked}
            className={clickedValue === "Never"? 
            "border border-blue-200  flex-[100%] sm:flex-[45%] bg-blue-400 text-white rounded-[16px] p-3 m-3 md:m-4 md:p-4 cursor-pointer ":
          "border border-blue-200  flex-[100%] sm:flex-[45%] rounded-[16px] p-3 m-3 md:m-4 md:p-4 hover:bg-blue-100 cursor-pointer"}
             
             >Never</div>
            <div onClick={clicked} 
            className={clickedValue === "Rarely"? 
            "border border-blue-200  flex-[100%] sm:flex-[45%] bg-blue-400 text-white rounded-[16px] p-3 m-3 md:m-4 md:p-4 cursor-pointer ":
            "border border-blue-200  flex-[100%] sm:flex-[45%] rounded-[16px] p-3 m-3 md:m-4 md:p-4 hover:bg-blue-100 cursor-pointer"}
            >Rarely</div>
            <div onClick={clicked} 
            className={clickedValue === "Sometimes"? 
            "border border-blue-200  flex-[100%] sm:flex-[45%] bg-blue-400 text-white rounded-[16px] p-3 m-3 md:m-4 md:p-4 cursor-pointer ":
            "border border-blue-200  flex-[100%] sm:flex-[45%] rounded-[16px] p-3 m-3 md:m-4 md:p-4 hover:bg-blue-100 cursor-pointer"}
            >Sometimes</div>
            <div onClick={clicked} 
            className={clickedValue === "Often"? 
            "border border-blue-200  flex-[100%] sm:flex-[45%] bg-blue-400 text-white rounded-[16px] p-3 m-3 md:m-4 md:p-4 cursor-pointer ":
            "border border-blue-200  flex-[100%] sm:flex-[45%] rounded-[16px] p-3 m-3 md:m-4 md:p-4 hover:bg-blue-100 cursor-pointer"}
            >Often</div>
        </div>
    </div>
    </>
  )

}

export default QuestionDiv;