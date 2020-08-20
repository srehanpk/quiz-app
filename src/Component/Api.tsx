import { useEffect, useState } from "react";
import axios from "axios";

export type Question = {

category:          string;
correct_answer:    string;
difficulty:        string;
incorrect_answers: string[]
question:          string;
type:              string;
}

export type questionState = Question & {answers: string[]}

export enum Difficulty {

  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}

export const Fetch = async (amount: number, difficulty: Difficulty ) => {

 
    
  useEffect(() => {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficulty}&type=multiple`;
   
    async function FetchApi() {
      
      const res: any = await axios.get(url);
      const data = await res.data.results;
     

      console.log(data);
      
      
     
      
    }
    
    
    FetchApi();
    
  }, []);
    
  return {};
}