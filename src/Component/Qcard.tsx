import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


type Props = {
  question: string;
  answers: string[];
  userAnswer: any;
  questionNum: number;
  totalQuestions: number;
  callback: any;
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
      <div className="card-div col-lg-4 col-md-4 col-10 mx-auto mt-5">
        <p className="my-3">
          Questions: {questionNum} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }}> Question Here</p>

        <div>
          {answers.map((answer) => (
            <button
              disabled={userAnswer}
              type="button"
              onClick={callback}
              className="btn btn-info btn-lg btn-block  "
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
