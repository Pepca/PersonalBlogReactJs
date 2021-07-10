import React from 'react'

// Helper Libraries
import { groupBy } from 'lodash'

// DATA
import { DATA_POSTS } from '../Posts/DATA_POSTS'

// Router
import { Link } from 'react-router-dom'

// Context
import { SearchContext } from '../../Context/ContextProvider'

export default function Nav() {
  // State Context
  const { searchState, setSearchState } = React.useContext(SearchContext)

  // Functions
  const submenuTags = Object.keys(groupBy(DATA_POSTS, 'tag')).filter(
    (str) => str !== ''
  )

  // Render
  return (
    <nav className='header__nav nav-header'>
      <ul className='nav-header__list'>
        <li className='nav-header__item'>
          <Link to='/' className='nav-header__link'>
            Главная
          </Link>
        </li>
        <li
          className={`nav-header__item${
            DATA_POSTS.length > 0 && ' item-header-nav'
          }`}
        >
          <Link to='/search' className='nav-header__link'>
            Статьи
          </Link>
          {submenuTags.length > 0 && (
            <div className='item-header-nav__submenu submenu-nav-header'>
              <ul className='submenu-nav-header__list'>
                {submenuTags.map((tag) => (
                  <li key={tag} className='submenu-nav-header__item'>
                    <Link
                      to='/search'
                      onClick={(e) =>
                        setSearchState({
                          ...searchState,
                          searchValue: e.target.text,
                        })
                      }
                      className='submenu-nav-header__link'
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li className='nav-header__item'>
          <Link to='/' className='nav-header__link'>
            Обо мне
          </Link>
        </li>
        <li className='nav-header__item'>
          <Link to='/' className='nav-header__link'>
            Реклама
          </Link>
        </li>
      </ul>
    </nav>
  )
}
