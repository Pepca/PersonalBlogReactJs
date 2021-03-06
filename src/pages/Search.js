import React from 'react'

// Style
import '../components/Posts/_posts.scss'

// DATA
import { posts_API } from '../API/emulate_API'

// Helper Functions
import { transformDateTime } from '../_helperFunctions'

// Router
import { Link } from 'react-router-dom'

// Context
import { Context } from '../Context/ContextProvider'

// Helper Functions
import { searching } from '../_helperFunctions'

export default function Search () {
  // State Context
  const { state, dispatch } = React.useContext(Context)

  // Helper Variables
  const searchState = state.searchState

  // Render
  return (
    <section className='search'>
      {searchState.searchValue !== '' && (
        <h1 className='search-title title-route'>{`Результаты поиска: "${searchState.searchValue}"`}</h1>
      )}
      <div className='search__inner'>
        {!searchState.isFound && (
          <h1 style={{ fontSize: '17px' }}>Ничего не найдено...</h1>
        )}
        {posts_API.length > 0 &&
        posts_API.map(
          (post) =>
            post.title !== '' &&
            post.tag !== '' &&
            searching(post.title, post.tag, searchState.searchValue) && (
              <div key={post.id} className='post'>
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
                        <Link
                          to='/search'
                          onClick={(e) =>
                            dispatch.setSearchState({
                              ...searchState,
                              searchValue: e.target.text
                            })
                          }
                          className='info-control-post__tag'
                        >
                          {post.tag.toLocaleLowerCase()}
                        </Link>
                      )}
                    </div>
                    <Link
                      to={`/post${post.id}`}
                      className='control-post__link'
                    >
                      читать
                    </Link>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  )
}
