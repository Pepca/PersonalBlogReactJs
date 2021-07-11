import React from 'react'

// Style
import './_stories.scss'

// DATA
import { stories_API } from '../../API/emulate_API'

// Helper Functions
import { transformDateTime } from '../../_helperFunctions'

export default function Stories() {
  // Render
  return (
    <>
      {stories_API.length > 0 && (
        <div className='stories'>
          <ul className='stories__list'>
            {stories_API.map((story) => (
              <li key={story.id} className='stories__item item-stories'>
                <h1 className='item-stories__title'>{story.title}</h1>
                <div className='item-stories__img'>
                  <img src={story.img.src} alt={story.img.alt} />
                </div>
                <time
                  className='item-stories__date'
                  dateTime={transformDateTime(story.dateTime)}
                >
                  {story.dateTime}
                </time>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
