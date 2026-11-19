import React from 'react';
import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Practice = () => {
  const [questions, setQuestions] = useState(null);
  const [selected, setSelected] = useState({});
  const [evaluation, setEvaulation] = useState(null);

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

  function handleChange(e) {
    const { name, value } = e.target;
    setSelected({ ...selected, [name]: value });
  }

  async function handleSubmit() {
    try {
      const res = await axios.post("http://localhost:3000/submit/quiz/1",
        selected);
      console.log(res?.data?.data);
      setEvaulation(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {
        questions && questions.map((question) => {
          return <div key={question.id}>
            <h1>{question.title}</h1>
            {
              question?.options?.map((option) => {
                let color = "black";
                if (evaluation) {
                  const { isCorrect, selectedOptionId, correctOptionId } = evaluation.find((ques) => question.id == ques.questionId)
                  // color = (option.id == selectedOptionId && isCorrect==false) && "red";
                  // color = (option.id == correctOptionId && isCorrect) && "green";
                  if(option.id==correctOptionId || (option.id==selectedOptionId && isCorrect))
                    color="green";
                  else if(option.id==selectedOptionId)
                    color="red"
                }
                return <div key={option.id}>
                  <input
                    type="radio"
                    name={question.id}
                    value={option.id}
                    onChange={(e) => handleChange(e)}
                  />
                  <label style={{color:color}}>{option.title}</label>
                </div>
              })
            }
          </div>
        }
        )
      }
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Practice;