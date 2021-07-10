import React from 'react'

// Components
import Stories from '../components/Stories/Stories'
import AddPost from '../components/AddPost/AddPost'
import Posts from '../components/Posts/Posts'

export default function Home() {
  // Render
  return (
    <>
      <section className='home'>
        <div className='home__inner'>
          <Stories />
          <AddPost />
          <Posts />
        </div>
      </section>
    </>
  )
}
