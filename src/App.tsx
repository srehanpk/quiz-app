import React,{useState} from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Qcard from '../src/Component/Qcard';
import {Fetch} from '../src/Component/Api';
import {QuestionState, Difficulty} from '../src/Component/Api';


export type AnswersObj = {

  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string
}


const TOTAL_QUESTION = 10;

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswersObj[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

//  async function api (){
   
   
//   }
//   api();
  const startQuiz = async () => {
    
    
    setLoading(true);
    setGameOver(false);
    
    const newQuestions = await Fetch(TOTAL_QUESTION, Difficulty.EASY );
    
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    if (!gameOver) {
      
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if (correct) setScore(prev => prev + 1);

      const answerObject = {

        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers(prev => [...prev, answerObject])
    }

  }
  const nextQuestion = () => {

    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTION) {
      
      setGameOver(true);
    }
    else {
      setNumber(nextQuestion);
    }

  }

 console.log(questions);

  return (
    <div className="App">
      <h1 className="header">Quiz App</h1>
      
      <div>
        {gameOver || userAnswers.length === TOTAL_QUESTION ?
        (<button type="button" onClick={startQuiz} className="btn btn-warning start-btn">Start Quiz</button>): null}
        
        {!gameOver ? <p className="score">Your Score = {score}</p> : null }

        {loading &&  <p><img className="loading" src="./loading.gif" alt="loading..." /> </p> }
        
        
      </div>

       {!loading && !gameOver && (   
      <Qcard
      questionNum={number + 1}
      totalQuestions = {TOTAL_QUESTION}
      question = {questions[number].question}
      answers = {questions[number].answers}
      userAnswer = {userAnswers? userAnswers[number] : undefined}
      callback = {checkAnswer}
      />
      )}

        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTION - 1 ? (

          <button type="button" onClick={nextQuestion} className="btn btn-warning start-btn">Next Question</button>

        ): null}
    </div>
  );
}

export default App;
