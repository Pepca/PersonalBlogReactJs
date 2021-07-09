import React from 'react'

// Style
import '../components/Posts/_posts.scss'

// Redux
import { getSearchValue } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux'

// DATA
import { DATA_POSTS } from '../components/Posts/DATA_POSTS'

// SecFunc
import { transformDateTime } from '../_helperFunctions'

// Router
import { Link } from 'react-router-dom'

export default function Search() {
  const dispatch = useDispatch()

  const reduxState = useSelector((state) => {
    return {
      searchValue: state.search.searchValue,
      isFound: state.search.isFound,
    }
  })

  return (
    <section className='search'>
      <h1 className='search-title title-route'>{`Результаты поиска “${reduxState.searchValue}”`}</h1>
      <div className='search__inner'>
        {!reduxState.isFound && (
          <h1 style={{ fontSize: '17px' }}>Ничего не надено...</h1>
        )}
        {DATA_POSTS.length > 0 &&
          DATA_POSTS.map(
            (post) =>
              post.title !== '' &&
              post.tag !== '' &&
              (post.title
                .toUpperCase()
                .search(reduxState.searchValue.trim().toUpperCase()) !== -1 ||
                post.tag
                  .toUpperCase()
                  .search(reduxState.searchValue.trim().toUpperCase()) !==
                  -1) && (
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
                              dispatch(getSearchValue(e.target.text))
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
