import React from 'react'

// Redux
import { getSearchValue, setIsFound } from '../../Redux/action'
import { useDispatch, useSelector } from 'react-redux'

// DATA
import { DATA_POSTS } from '../Posts/DATA_POSTS'

// Router
import { withRouter, Link } from 'react-router-dom'

export default React.memo(
  withRouter(function FormSearch({ history }) {
    const search = React.useRef(null)

    const [isFocused, setIsFocused] = React.useState(false)

    const dispatch = useDispatch()
    const reduxState = useSelector(state => {
      return {
        searchValue: state.search.searchValue,
        isFound: state.search.isFound
      }
    })

    const handleChange = event => {
      const result = DATA_POSTS.findIndex(
        el =>
          el.title !== '' &&
          (el.title
            .toUpperCase()
            .search(event.target.value.toUpperCase().trim()) !== -1 ||
            el.tag
              .toUpperCase()
              .search(event.target.value.toUpperCase().trim()) !== -1)
      )

      result !== -1 ? dispatch(setIsFound(true)) : dispatch(setIsFound(false))

      dispatch(getSearchValue(event.target.value))

      event.target.value !== '' ? setIsFocused(true) : setIsFocused(false)
    }

    return (
      <form
        action='/'
        className='header__form from-header'
        onSubmit={e => {
          e.preventDefault()
          history.push('/search')
          search.current.blur()
          search.current.value = ''
        }}
      >
        <input
          ref={search}
          type='text'
          className='from-header__search'
          placeholder='Поиск по блогу'
          onChange={event => handleChange(event)}
          onFocus={event => event.target.value !== '' && setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {history.location.pathname !== '/search' && DATA_POSTS.length > 0 && (
          <div
            className={`from-header__submenu submenu-form-header${
              isFocused ? ' submenu-form-header-show' : ''
            }`}
          >
            <ul className='submenu-form-header__list'>
              {!reduxState.isFound && (
                <li className='submenu-form-header__item error'>
                  Ничего не найдено...
                </li>
              )}
              {DATA_POSTS.map(
                post =>
                  reduxState.searchValue.trim().toUpperCase() !== '' &&
                  (post.title
                    .toUpperCase()
                    .search(reduxState.searchValue.trim().toUpperCase()) !==
                    -1 ||
                    post.tag
                      .toUpperCase()
                      .search(reduxState.searchValue.trim().toUpperCase()) !==
                      -1) &&
                  post.title && (
                    <li key={post.id} className='submenu-form-header__item'>
                      <Link
                        to={`/post${post.id}`}
                        className='submenu-form-header__link'
                        onClick={() => (search.current.value = '')}
                      >
                        {post.title}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        )}
      </form>
    )
  })
)
