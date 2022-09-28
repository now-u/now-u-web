import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import Elgars from '@/assets/images/elgars.png'
import { HeaderSubtitle } from '@/components/Header'

interface BlogTileProps {
  image: string
  title: string
  author: string
  filter_time: string
}

const blogs = [
  {
    id: 1,
    image: Elgars,
    title: 'Holidays & Hats with the',
    author: 'Elgars',
    filter_time: '1'
  },
  {
    id: 2,
    image: Elgars,
    title: 'Holidays & Hats with the',
    author: 'Elgars',
    filter_time: '1'
  },
  {
    id: 3,
    image: Elgars,
    title: 'Holidays & Hats with the',
    author: 'Elgars',
    filter_time: '1'
  },
  {
    id: 4,
    image: Elgars,
    title: 'Holidays & Hats with the',
    author: 'Elgars',
    filter_time: '1'
  },
  {
    id: 5,
    image: Elgars,
    title: 'Holidays & Hats with the',
    author: 'Elgars',
    filter_time: '1'
  }
]

// TODO: remove object-top, it's only there to see the hats

const BlogTile = (props: BlogTileProps): JSX.Element => {
  return (
    <div className="flex flex-col hover:-translate-y-1 active:translate-y-1 hover:drop-shadow-md active:drop-shadow-sm">
      <img
        src={props.image}
        alt="Blog Image"
        className="object-cover h-64 object-top"
      />
      <div className="flex bg-cream justify-between px-1">
        <div>
          <h2 className="font-bold">{props.title}</h2>
          <h2>{props.author}</h2>
        </div>
        <div className="grid grid-cols-2 place-content-center">
          <FontAwesomeIcon icon={faClock} size="1x" className="m-auto" />
          <h4>
            {props.filter_time} {props.filter_time === '1' ? 'min' : 'mins'}
          </h4>
        </div>
      </div>
    </div>
  )
}

export const Blog = (): JSX.Element => {
  const firstBlog = blogs[1]
  return (
    <div>
      <HeaderSubtitle
        title="Blog"
        subtitle="Include copy about sustainable development goals and that below you can see which causes are linked to which goals. We partner with trusted charities and social enterprises to bring you focused monthly campaigns with clear and attainable objectives. Each campaign contains informative resources and actions you can complete, curated to inform, involve and inspire..."
      />
      <div className="m-5 sm:mx-32 sm:my-10">
        <BlogTile
          image={firstBlog.image}
          title={firstBlog.title}
          author={firstBlog.author}
          filter_time={firstBlog.filter_time}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 m-5 sm:mx-32 sm:my-10">
        {blogs.slice(1).map((blog) => (
          <BlogTile
          key={blog.id}
            image={blog.image}
            title={blog.title}
            author={blog.author}
            filter_time={blog.filter_time}
          />
        ))}
      </div>
    </div>
  )
}
