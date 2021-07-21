import React from 'react'

// Style
import './_headerNav.scss'

// Helper Libraries
import { groupBy } from 'lodash'

// DATA
import { posts_API } from '../../API/emulate_API'

// Router
import { NavLink } from 'react-router-dom'

// Context
import { Context } from '../../Context/ContextProvider'

export default function Nav() {
  // Context
  const { state, dispatch } = React.useContext(Context)

  // Function
  const submenuTags = Object.keys(groupBy(posts_API, 'tag')).filter(
    (str) => str !== ''
  )

  // Render
  return (
    <nav className='header__nav nav-header'>
      <ul className='nav-header__list list-nav-header'>
        <div className='list-nav-header__left'>
          <li className='nav-header__item'>
            <NavLink to='/' className='nav-header__link'>
              Главная
            </NavLink>
          </li>
          <li
            className={`nav-header__item${
              posts_API.length > 0 && ' item-header-nav'
            }`}
          >
            <NavLink to='/search' className='nav-header__link'>
              Статьи
            </NavLink>
            {submenuTags.length > 0 && (
              <div className='item-header-nav__submenu submenu-nav-header'>
                <ul className='submenu-nav-header__list'>
                  {submenuTags.map((tag) => (
                    <li key={tag} className='submenu-nav-header__item'>
                      <NavLink
                        to='/search'
                        onClick={(e) =>
                          dispatch.setSearchState({
                            ...state.searchState,
                            searchValue: e.target.text,
                          })
                        }
                        className='submenu-nav-header__link'
                      >
                        {tag}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li className='nav-header__item'>
            <NavLink to='/' className='nav-header__link'>
              Обо мне
            </NavLink>
          </li>
          <li className='nav-header__item'>
            <NavLink to='/' className='nav-header__link'>
              Реклама
            </NavLink>
          </li>
        </div>
        <div className='list-nav-header__right'>
          <li className='nav-header__item'>
            <NavLink to='/profile' className='nav-header__link'>
              Профиль
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  )
}
