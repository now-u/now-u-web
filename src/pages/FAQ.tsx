import React, { MouseEventHandler } from 'react'

import { Header } from '@/components/Header'

const AnswerTile = (props: { answer: string }): JSX.Element => {
  return (
    <div className="bg-slate-50 my-5 h-32 text-center flex flex-col justify-center">
      {props.answer}
    </div>
  )
}

interface QuestionTileProps {
  isActive: boolean
  question: string
  onClick: MouseEventHandler
}

const QuestionTile = (props: QuestionTileProps): JSX.Element => {
  return (
    <button
      onClick={props.onClick}
      className="bg-cream h-32 justify-center hover:-translate-y-1 hover:drop-shadow-lg active:translate-y-0 active:drop-shadow-none"
    >
      {props.question}
    </button>
  )
}

export const FAQPage = (): JSX.Element => {
  const questionsAndAnswers = [
    { Q: 'q1', A: 'A1' },
    { Q: 'q2', A: 'A2' },
    { Q: 'q3', A: 'A3' },
    { Q: 'q4', A: 'A4' },
    { Q: 'q5', A: 'A5' },
    { Q: 'q6', A: 'A6' },
    { Q: 'q7', A: 'A7' },
    { Q: 'q8', A: 'A8' },
    { Q: 'q9', A: 'A9' },
    { Q: 'q10', A: 'A10' }
  ]

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState<number | null>(null)

  return (
    <div>
      <Header title='FAQs' />
      <AnswerTile answer={currentQuestionIndex !== null ? questionsAndAnswers[currentQuestionIndex].A : 'Click a question below and your answer will appear here!'} />
      <div className="grid grid-rows-2 gap-4 grid-cols-5 mb-5">
        {questionsAndAnswers.map(({ Q: question }, index) => (
          <QuestionTile
            key={question}
            isActive={index === currentQuestionIndex}
            question={question}
            onClick={() => {
              setCurrentQuestionIndex(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}
