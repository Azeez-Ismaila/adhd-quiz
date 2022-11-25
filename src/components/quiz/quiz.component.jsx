import {questions, core_question} from "./adhdQuestions"
import { useState } from "react";
import CoreQuestion from "./core_question.component";
import QuestionDiv from "./question.component"
import QuizResultModal from "./quizResultModal.component";

const Quiz =()=>{
  let score = 0;
 
  const [showingResult, setShowingResult] = useState(false)
  const [totalScore, setTotalScore] = useState(0)



  
  const calculateScore =()=>{
   
    editableQuestions.forEach((question)=>{
      
      if(!question.answer)  return;
      if(question.answer === "Never")  return;
      if(question.answer === "Rarely")  score+=1;
      if(question.answer === "Sometimes") score+=2;
      if(question.answer === "Often") score+=3;
     
    })
    editableCoreQuestions.forEach((question)=>{
      if(!question.answer) return;
      if(question.answer === "No") return;
      if(question.answer === "Yes") score+=2;
      
    })
 
   setTotalScore(score)
   setShowingResult(true)

  }
 

   // cloning the array of questions
   const editableQuestions = questions.map(a=>Object.assign({}, a))
   const editableCoreQuestions = core_question.map(a=>Object.assign({}, a))

    return(
        <>
        <div className=" flex justify-center mb-6 mt-10 ">
          <div className="w-[95%] md:w-[90%] lg:w-[80%] bg-blue-200 text-[1.1rem] md:text-[1.5rem] font-bold p-3">
          <h2 className="underline">instructions</h2>
            <p>
            Simply answer the questions on how you have behaved and felt
             during the past 6 months.
             Take your time and answer truthfully for the most accurate results.
             Note: Any question skipped will have the answer tagged as <span>Never</span>
            </p>
          </div>
           
        </div>

    

        {editableQuestions.map((theQuestion, index)=>{
          return(
            <QuestionDiv theQuestion={theQuestion} 
            index={index} 
            key={index}
             editableQuestions={editableQuestions}
             ></QuestionDiv>
          )
        })}
        {editableCoreQuestions.map((theQuestion, index)=>{
          return(
            <CoreQuestion theQuestion={theQuestion} 
            index={index} 
            key={index}
             editableCoreQuestions={editableCoreQuestions}
           ></CoreQuestion>
          )
        })}
       <div className="flex justify-center">

        <button 
        className="   bg-blue-600 text-white rounded-[16px] py-3 px-20 m-3 md:m-4 md:px-20 md:py-4" 
        onClick={calculateScore}> submit </button>
       </div>
       {showingResult ? <QuizResultModal result={totalScore}></QuizResultModal> : ""}
        </>
    )
}

export default Quiz