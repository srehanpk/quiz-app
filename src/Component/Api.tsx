import { useEffect, useState } from "react";
import axios from "axios";

export const Fetch = () => {

  const [quizData, setQuizData] = useState([]);
 

  useEffect(() => {
    const url = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`;
   
    async function FetchApi() {
      
      const {data} = await axios.get(url);
      const qData = await data.results;


      console.log(qData);
      

      
      setQuizData(qData);
      
    }

    FetchApi();
    
  }, [setQuizData]);

  return {quizData};
};
