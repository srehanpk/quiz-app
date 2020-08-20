import React,{useState} from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Qcard from '../src/Component/Qcard';
import {Fetch} from '../src/Component/Api';
import {Difficulty} from '../src/Component/Api';


const TOTAL_QUESTION = 10;

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  console.log(Fetch(TOTAL_QUESTION, Difficulty.EASY ));
  

  const startQuiz = async () => {

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }
  const nextQuestion = () => {

  }


  return (
    <div className="App">
      <h1 className="header">Quiz App</h1>
      <div>
        <button type="button" onClick={startQuiz} className="btn btn-warning start-btn">Start Quiz</button>
        <p className="score">Your Score</p>
        <p>Loading...</p>
      </div>

      {/* <Qcard
      questionNum={number + 1}
      totalQuestions = {TOTAL_QUESTION}
      question = {questions[number].questions}
      answers = {questions[number].answers}
      userAnswer = {userAnswers? userAnswers[number] : undefined}
      callback = {checkAnswer}
      /> */}

      <button type="button" onClick={nextQuestion} className="btn btn-warning start-btn">Next Question</button>
    </div>
  );
}

export default App;
