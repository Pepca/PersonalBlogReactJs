import React from 'react'

// DATA
import { posts_API } from '../../API/emulate_API'

// Router
import { withRouter, Link } from 'react-router-dom'

// Context
import { SearchContext } from '../../Context/ContextProvider'

// Helper Functions
import { searching } from '../../_helperFunctions'

export default React.memo(
  withRouter(function FormSearch({ history }) {
    // Refs
    const search = React.useRef(null)

    // State
    const [isFocused, setIsFocused] = React.useState(false)

    // State Context
    const { searchState, setSearchState } = React.useContext(SearchContext)

    // Functions

    const handleChange = (event) => {
      const result = posts_API.findIndex((el) => {
        if (el.title !== '') {
          return searching(el.title, el.tag, event.target.value)
        }
      })

      if (result !== -1) {
        setSearchState((searchState.isFound = true))
      } else {
        setSearchState((searchState.isFound = false))
      }

      setSearchState({ ...searchState, searchValue: event.target.value })

      if (event.target.value !== '') {
        setIsFocused(() => true)
      } else {
        setIsFocused(() => false)
      }
    }

    const handlerSubmit = (event) => {
      event.preventDefault()
      history.push('/search')
      search.current.blur()
      search.current.value = ''
    }

    // Render
    return (
      <form
        action='/'
        className='header__form form-header'
        onSubmit={(event) => handlerSubmit(event)}
      >
        <input
          ref={search}
          type='text'
          className='form-header__search'
          placeholder='Поиск по блогу'
          onChange={(event) => handleChange(event)}
          onFocus={(event) =>
            event.target.value !== '' && setIsFocused(() => true)
          }
          onBlur={() => setIsFocused(() => false)}
        />
        {history.location.pathname !== '/search' && posts_API.length > 0 && (
          <div
            className={`form-header__submenu submenu-form-header${
              isFocused ? ' submenu-form-header-show' : ''
            }`}
          >
            <ul className='submenu-form-header__list'>
              {!searchState.isFound && (
                <li className='submenu-form-header__item error'>
                  Ничего не найдено...
                </li>
              )}
              {posts_API.map(
                (post) =>
                  searchState.searchValue.trim().toUpperCase() !== '' &&
                  searching(post.title, post.tag, searchState.searchValue) &&
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
