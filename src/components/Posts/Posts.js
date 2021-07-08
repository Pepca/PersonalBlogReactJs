import React from 'react'

// Style
import './_posts.scss'

// DATA
import { DATA_POSTS } from './DATA_POSTS'

// SecFunc
import { transformDateTime } from '../../SecFunc/funcs'

// Router
import { NavLink } from 'react-router-dom'

// Redux
import { getSearchValue } from '../../Redux/action'
import { useDispatch } from 'react-redux'

export default function Posts() {
  const dispatch = useDispatch()

  return (
    <>
      {DATA_POSTS.length > 0 && (
        <div className='posts'>
          <div className='posts__inner'>
            {DATA_POSTS.map(post => (
              <div key={post.id} className='post'>
                {post.media.src !== '' && (
                  <NavLink to={`/post${post.id}`}>
                    <div className='post__head'>
                      <div className='post__picture'>
                        <img
                          src={
                            !post.media.alt ? post.media.poster : post.media.src
                          }
                          alt={
                            !post.media.alt ? post.media.poster : post.media.alt
                          }
                        />
                      </div>
                    </div>
                  </NavLink>
                )}
                <div className='post__body'>
                  <div className='post__description description-post'>
                    {post.title !== '' && (
                      <h1 className='description-post__title primary-title'>
                        {post.title}
                      </h1>
                    )}
                    {post.text !== '' && (
                      <p className='description-post__text primary-text'>
                        {post.text}
                      </p>
                    )}
                  </div>
                  <div className='post__control control-post'>
                    <div className='control-post__info info-control-post'>
                      <time
                        className='info-control-post__date primary-time'
                        dateTime={transformDateTime(post.dateTime)}
                      >
                        {post.dateTime}
                      </time>
                      {post.tag !== '' && (
                        <NavLink
                          to='/search'
                          onClick={e => dispatch(getSearchValue(e.target.text))}
                          className='info-control-post__tag'
                        >
                          {post.tag.toLowerCase()}
                        </NavLink>
                      )}
                    </div>
                    {post.title !== '' && post.tag !== '' && (
                      <NavLink
                        to={`/post${post.id}`}
                        className='control-post__link'
                      >
                        читать
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
