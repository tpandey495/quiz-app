import { useState } from 'react'
import './App.css'
import Landing from './pages/Landing';
import {Routes,Route} from 'react-router';
import QuizPractice from './pages/QuizPractice';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/practice/:quizId" element={<QuizPractice />} />

    </Routes>
    
    </>
  )
}

export default App
