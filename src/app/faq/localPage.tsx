"use client";

import React, { useState } from "react";

import { type Faq } from "@/services/api";

const AnswerTile = ({ answer }: { answer: string | null }): JSX.Element => {
  return (
    <div
      className={`bg-slate-50 my-5 px-5 h-72 md:h-32 text-center rounded-lg flex flex-col justify-center ${
        answer === null ? "text-gray-400" : ""
      }`}
    >
      {answer ??
        "Hover over a question below and your answer will appear here!"}
    </div>
  );
};

interface QuestionTileProps {
  isActive: boolean;
  question: string;
  setAnswer: () => void;
  clearAnswer: () => void;
}

const QuestionTile = (props: QuestionTileProps): JSX.Element => {
  return (
    <button
      onMouseEnter={props.setAnswer}
      onMouseLeave={props.clearAnswer}
      className="bg-cream rounded-lg h-32 sm:p-10 justify-center hover:-translate-y-1 hover:drop-shadow-lg active:translate-y-0 active:drop-shadow-none"
    >
      {props.question}
    </button>
  );
};

export function FAQDisplay({ faqs }: { faqs: Faq[] }): JSX.Element {
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(
    null,
  );

  function getCurrentAnswer(): string | null {
    if (selectedQuestionId === null) {
      return null;
    }
    return faqs.find((faq) => faq.id === selectedQuestionId)?.answer ?? null;
  }

  // TODO Mobile support, clicking is really strange
  return (
    <div className="m-10">
      <AnswerTile answer={getCurrentAnswer()} />
      <div className="grid grid-rows-2 gap-6 grid-cols-1 md:grid-cols-3 xl:grid-cols-5 mb-5">
        {faqs.map(({ id, question }) => (
          <QuestionTile
            key={question}
            isActive={id === selectedQuestionId}
            question={question}
            setAnswer={() => {
              setSelectedQuestionId(id);
            }}
            clearAnswer={() => {
              setSelectedQuestionId(null);
            }}
          />
        ))}
      </div>
    </div>
  );
}
