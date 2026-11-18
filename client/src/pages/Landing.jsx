import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import '../css/quiz.css';
import {useNavigate} from 'react-router';

const Landing = () => {
  const [quizzes,setQuizzes] =useState(null);
  const navigate=useNavigate();

  useEffect(()=>{
   const fetchQuiz=async()=>{
         try{
          const res = await axios.get("http://localhost:3000/quiz/all");
          setQuizzes(res?.data?.data)
          // console.log(res);
         }catch(error){
           console.log(error);
         }
   }

   fetchQuiz();
  },[])

  return (
    <div className="card-wrapper">
      {
       quizzes && quizzes.map((quiz)=>
        <div className="quiz-card" 
        key={quiz.id}
        onClick={()=>navigate(`/practice/${quiz.id}`)}
        >
             <h1>{quiz.title}</h1>
             <img src={quiz.img} alt="quiz-img" />
        </div>
       )
      }
    </div>
  )
}

export default Landing