import React from 'react'

// Style
import './_post.scss'

// Router
import { NavLink } from 'react-router-dom'

// DATA
import { posts_API } from '../../API/emulate_API'

// Helper Functions
import {
  transformDateTime,
  slicerSting,
  openPopup
} from '../../_helperFunctions'

// Components
import Share from '../../components/Popup/Share'

// Context
import { Context } from '../../Context/ContextProvider'

export default React.memo(function Post ({ match, history }) {
  // State
  const [isOpen, setIsOpen] = React.useState(false)

  // State Context
  const { state, dispatch } = React.useContext(Context)

  // Functions
  const post = posts_API.find((el) => el.id === parseInt(match.params.id))

  // Render
  return (
    <>
      <Share isOpen={isOpen} setIsOpen={setIsOpen}/>
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
                onClick={(e) =>
                  dispatch.setSearchState({
                    ...state.searchState,
                    searchValue: e.target.text
                  })
                }
                className='info-post-header__tag'
              >
                {post.tag.toLowerCase()}
              </NavLink>
            </div>
          </div>
          <div className='post-text primary-text'>
            {post.text !== '' && <p>{post.text}</p>}
            {post.text !== '' && <p>{post.text}</p>}
            <div className='post-picture'>
              <img src={post.media.src} alt={post.media.alt}/>
            </div>
            {post.text !== '' && <p>{post.text}</p>}
          </div>
          <div className='post-extrainfo'>
            <h3 className='post-extrainfo__title post-title'>
              Интересно почитать
            </h3>
            <ul className='post-extrainfo__list'>
              {posts_API.slice(0, 7).map(
                (post) =>
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
        </div>
      </div>
    </>
  )
})
