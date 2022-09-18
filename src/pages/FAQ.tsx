import React from "react";

import { TitleText } from "@/components/Text";

const AnswerTile = (props: { answer: string }): JSX.Element => {
  return (
    <div className="bg-slate-50 my-5 h-32 text-center flex flex-col justify-center">
      {props.answer}
    </div>
  );
};

interface QuestionTileProps {
  questionIndex: string;
  currentQuestionIndex: string;
  question: string;
  settingFunction: Function;
}

const QuestionTile = (props: QuestionTileProps): JSX.Element => {
  return (
    <button
      value={props.questionIndex}
      onClick={(event) => {
        props.settingFunction(
          parseInt((event.target as HTMLButtonElement).value)
        );
      }}
      className="bg-cream h-32 justify-center hover:-translate-y-1 hover:drop-shadow-lg active:translate-y-0 active:drop-shadow-none"
    >
      {props.question}
    </button>
  );
};

export const FAQPage = (): JSX.Element => {
  const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const questionAndAnswers = [
    {
      Q: "q0",
      A: "Click a question below and your answer will appear here!",
    },
    { Q: "q1", A: "A1" },
    { Q: "q2", A: "A2" },
    { Q: "q3", A: "A3" },
    { Q: "q4", A: "A4" },
    { Q: "q5", A: "A5" },
    { Q: "q6", A: "A6" },
    { Q: "q7", A: "A7" },
    { Q: "q8", A: "A8" },
    { Q: "q9", A: "A9" },
    { Q: "q10", A: "A10" },
  ];

  const questions = questionAndAnswers.map((el) => el.Q);
  const answers = questionAndAnswers.map((el) => el.A);

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

  return (
    <div>
      <div className="bg-gradient-to-b from-gradlight to-graddark grid place-items-center px-5 py-20">
        <TitleText text="FAQs" />
      </div>
      <AnswerTile answer={answers[currentQuestionIndex]} />
      <div className="grid grid-rows-2 gap-4 grid-cols-5 mb-5">
        {numList.slice(1).map((num) => (
          <QuestionTile
            currentQuestionIndex={currentQuestionIndex.toString()}
            questionIndex={num.toString()}
            question={questions[num]}
            settingFunction={setCurrentQuestionIndex}
          />
        ))}
      </div>
    </div>
  );
};
