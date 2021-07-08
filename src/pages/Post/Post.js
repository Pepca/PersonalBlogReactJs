import React from 'react'

// Style
import './_post.scss'

// Router
import { NavLink } from 'react-router-dom'

// DATA
import { DATA_POSTS } from '../../components/Posts/DATA_POSTS'

// Redux
import { getSearchValue } from '../../Redux/action'
import { useDispatch } from 'react-redux'

// SecFunc
import { transformDateTime, openPopup, slicerSting } from '../../SecFunc/funcs'

// Components
import Share from '../../components/Popup/Share'
import Player from '../../components/Player/Player'

export default React.memo(function Post({ match, history }) {
  const post = DATA_POSTS.find(el => el.id === parseInt(match.params.id))

  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Share isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='post'>
        <div className='post__inner'>
          <div className='post-overhead'>
            <NavLink
              to='/'
              onClick={() => {
                history.goBack()
              }}
              className='post-overhead__comeback'
            >
              вернуться назад
            </NavLink>
            <button
              onClick={() => openPopup(setIsOpen)}
              className='post-overhead__share'
              type='button'
            >
              поделиться
            </button>
          </div>
          <div className='post-header'>
            <h1 className='post-header__title primary-title'>{post.title}</h1>
            <div className='post-header__info info-post-header'>
              <time
                className='info-post-header__date primary-time'
                dateTime={transformDateTime(post.dateTime)}
              >
                {post.dateTime}
              </time>
              <NavLink
                to='/search'
                onClick={e => dispatch(getSearchValue(e.target.text))}
                className='info-post-header__tag'
              >
                {post.tag.toLowerCase()}
              </NavLink>
            </div>
          </div>
          <div className='post-text primary-text'>
            <p>{post.text}</p>
            <p>{post.text}</p>
            {post.media.alt ? (
              <div className='post-picture'>
                <img src={post.media.src} alt={post.media.alt} />
              </div>
            ) : (
              <Player
                className='post-player'
                src={post.media.src}
                poster={post.media.poster}
              />
            )}
            <p>{post.text}</p>
          </div>
          <div className='post-extrainfo'>
            <h3 className='post-extrainfo__title post-title'>
              Интересно почитать
            </h3>
            <ul className='post-extrainfo__list'>
              {DATA_POSTS.slice(0, 7).map(
                post =>
                  post.title !== '' && (
                    <li key={post.id} className='post-extrainfo__item'>
                      <NavLink
                        to={`/post${post.id}`}
                        className='post-extrainfo__link'
                      >
                        {slicerSting(post.title, 31)}
                      </NavLink>
                      <time
                        className='post-extrainfo__date primary-time'
                        dateTime={transformDateTime(post.dateTime)}
                      >
                        {post.dateTime}
                      </time>
                    </li>
                  )
              )}
            </ul>
          </div>
          <div className='post-comments'>
            <h3 className='post-comments__title post-title'>Обсуждение</h3>
            <span style={{ fontSize: '15px' }}>Maintenance...</span>
          </div>
        </div>
      </div>
    </>
  )
})
