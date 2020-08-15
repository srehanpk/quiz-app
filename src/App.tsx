import React from 'react';
import './App.css';
import Qcard from '../src/Component/Qcard';
// import { Fetch } from '../src/Component/Api';

// type Props = {
  
//   totalQuestion: Number;
//   questionNum: Number;
//   question: String;
//   answer: String[];
//   userAnswer: String;
//   callBack: any;
  
// };


const App  = () => {
  
  // const [quizData, setQuizData] = useState([]);
  
  // // const qData = Fetch();
  
  
  // async function api  (){
    
  //   const fetchApi = await Fetch();
    
  //   setQuizData(fetchApi);

  // }

  // api();
  // console.log(quizData);
  

  return (
    <div className="App">
      <h1 className="header">Quiz App</h1>
      <div>
      <button type="button" className="btn btn-warning start-btn">Start Quiz</button>
      </div>

     <Qcard  />

     <button type="button" className="btn btn-warning start-btn">Next Question</button>
    </div>
  );
}

export default App;
