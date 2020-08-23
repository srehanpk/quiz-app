import axios from "axios";
import { Shuffle } from "../Component/Logic";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  answers: string[];
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const Fetch = async (amount: number, difficulty: Difficulty) => {
  const url = `https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficulty}&type=multiple`;

  const res: any = await axios.get(url);
  const data = await res.data.results;


  return data.map((question: Question) => ({
    ...question,
    answers: Shuffle([...question.incorrect_answers, question.correct_answer]),
  }));
};
