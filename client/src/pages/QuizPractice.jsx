import React from 'react';
import { useParams } from "react-router";
import {useState,useEffect} from 'react';
import axios from 'axios';

const Practice = () => {
  const [questions, setQuestions] = useState(null);

  const { quizId } = useParams();

  useEffect(() => {
    async function fetchQuestion() {
      try {
        const result = await axios.get(`http://localhost:3000/question/${quizId}`);
        setQuestions(result?.data?.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchQuestion();
  }, [])

  return (
    <>
      {
        questions && questions.map((question) =>
          <div key={question.id}>
            <h1>{question.title}</h1>
            {
              question?.options?.map((option) =>
                <h3 key={option.id}>{option?.title}</h3>
              )
            }
          </div>
        )
      }
    </>
  )
}

export default Practice;