import React from 'react'

// Style
import './_sidebarNav.scss'

// Lodash
import { groupBy } from 'lodash'

// Router
import { NavLink } from 'react-router-dom'

// API
import { posts_API } from '../../API/emulate_API'

// Context
import { Context } from '../../Context/ContextProvider'

export default function SidebarNav() {
  // Context
  const { state, dispatch } = React.useContext(Context)

  // Function
  const submenuTags = Object.keys(groupBy(posts_API, 'tag')).filter(
    (str) => str !== ''
  )

  return (
    <nav className='sidebar__nav nav-sidebar'>
      <ul className='nav-sidebar__list'>
        <li className='nav-sidebar__item'>
          <NavLink to='/' className='nav-sidebar__link'>
            Главная
          </NavLink>
        </li>
        <li
          className={`nav-sidebar__item${
            posts_API.length > 0 && ' item-sidebar-nav'
          }`}
        >
          <NavLink to='/search' className='nav-sidebar__link'>
            Статьи
          </NavLink>
          {submenuTags.length > 0 && (
            <div className='item-sidebar-nav__submenu submenu-nav-sidebar'>
              <ul className='submenu-nav-sidebar__list'>
                {submenuTags.map((tag) => (
                  <li key={tag} className='submenu-nav-sidebar__item'>
                    <NavLink
                      to='/search'
                      onClick={(e) =>
                        dispatch.setSearchState({
                          ...state.searchState,
                          searchValue: e.target.text,
                        })
                      }
                      onTouchEnd={(e) =>
                        dispatch.setSearchState({
                          ...state.searchState,
                          searchValue: e.target.text,
                        })
                      }
                      className='submenu-nav-sidebar__link'
                    >
                      {tag}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li className='nav-sidebar__item'>
          <NavLink to='/' className='nav-sidebar__link'>
            Обо мне
          </NavLink>
        </li>
        <li className='nav-sidebar__item'>
          <NavLink to='/' className='nav-sidebar__link'>
            Реклама
          </NavLink>
        </li>
        <li className='nav-sidebar__item'>
          <NavLink to='/profile' className='nav-sidebar__link'>
            Профиль
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
