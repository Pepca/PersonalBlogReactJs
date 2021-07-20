import React from 'react'

// Style
import './_header.scss'

// Router
import { NavLink } from 'react-router-dom'

// Context
import { Context } from '../../Context/ContextProvider'

// Components
import Nav from './Nav'
import Burger from './Burger'
import FormSearch from './FormSearch'

export default function Header() {
  // State
  const { state } = React.useContext(Context)

  // Render
  return (
    <header className='header'>
      <div className='header__inner'>
        <div className='header__right'>
          {state.windowWidth <= 991.98 && <Burger />}
          {state.windowWidth > 991.98 && <Nav />}
        </div>
        <div className='header__left'>
          {state.windowWidth > 991.98 && (
            <nav className='header__nav nav-header'>
              <ul className='nav-header__list'>
                <li className='nav-header__item'>
                  <NavLink to='/profile' className='nav-header__link'>
                    Профиль
                  </NavLink>
                </li>
              </ul>
            </nav>
          )}
          <FormSearch />
        </div>
      </div>
    </header>
  )
}
