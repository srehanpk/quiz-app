import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { AnswersObj } from "../App";

type Props = {
  question: string;
  answers: string[];
  userAnswer: AnswersObj | undefined;
  questionNum: number;
  totalQuestions: number;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Qcard: React.FC<Props> = ({
  question,
  answers,
  userAnswer,
  questionNum,
  totalQuestions,
  callback,
}) => {
  return (
    <>
      <div className="container card-div col-lg-4 col-md-4 col-10 mx-auto mt-5">
        <p className="my-3 font-weight-bolder ">
          Questions: {questionNum} / {totalQuestions}
        </p>
        <p
          className=" font-weight-bolder "
          dangerouslySetInnerHTML={{ __html: question }}
        ></p>

        <div>
          {answers.map((answer) => (
            <button
              key={answer}
              disabled={userAnswer ? true : false}
              type="button"
              value={answer}
              onClick={callback}
              className="btn btn-info btn-lg btn-block font-weight-bolder text-truncate "
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />{" "}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Qcard;
