import React from 'react'

export const HeaderText = (props: { text: string }): JSX.Element => {
  return <h1 className="text-4xl pb-3 font-bold "> {props.text} </h1>
}

export const TitleText = (props: { text: string }): JSX.Element => {
  return <h1 className="text-2xl pb-3 font-bold "> {props.text} </h1>
}

export const SubtitleText = (props: { text: string }): JSX.Element => {
  return <p className="text-md lg:text-lg">{props.text}</p>
}

export const BodyText = (props: { text: string[] }): JSX.Element => {
  const paragraphs = props.text.map((paragraph, index) => {
    return (
      <p className="text-md lg:text-lg py-2 text-center" key={index}>
        {' '}
        {paragraph}{' '}
      </p>
    )
  })
  return <> {paragraphs} </>
}
