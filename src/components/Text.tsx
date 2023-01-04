import React from 'react'

export const HeaderText = (props: { text: string }): JSX.Element => {
  return <h1 className="text-5xl pb-3 font-black font-heading"> {props.text} </h1>
}

export const TitleText = (props: { text: string }): JSX.Element => {
  return <h1 className="text-3xl pb-3 font-black font-heading"> {props.text} </h1>
}

export const SubtitleText = (props: { text: string }): JSX.Element => {
  return <p className="text-md lg:text-lg font-subheading">{props.text}</p>
}

export const BodyText = (props: { text: string[] }): JSX.Element => {
  const paragraphs = props.text.map((paragraph, index) => {
    return (
      <p className="text-md lg:text-lg py-2 text-center font-sans" key={index}>
        {' '}
        {paragraph}{' '}
      </p>
    )
  })
  return <> {paragraphs} </>
}
