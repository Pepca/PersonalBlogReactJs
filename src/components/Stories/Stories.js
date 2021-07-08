import React from 'react'

// Style
import './_stories.scss'

// DATA
import { STORIES_DATA } from './SOTRIES_DATA'

// SecFunc
import { transformDateTime } from '../../SecFunc/funcs'

export default function Stories() {
  return (
    <>
      {STORIES_DATA.length > 0 && (
        <div className='stories'>
          <ul className='stories__list'>
            {STORIES_DATA.map(story => (
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
