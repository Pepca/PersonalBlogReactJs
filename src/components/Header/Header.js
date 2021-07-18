import React from 'react'

// Style
import './_header.scss'

// Router
import { Link } from 'react-router-dom'

// Components
import Nav from './Nav'
import Burger from './Burger'
import FormSearch from './FormSearch'

export default function Header() {
  // Render
  return (
    <header className='header' id='fixed-element'>
      <div className='header__inner'>
        <div className='header__right'>
          <Burger />
          <Nav />
        </div>
        <div className='header__left'>
          <nav className='header__nav nav-header'>
            <ul className='nav-header__list'>
              <li className='nav-header__item'>
                <Link to='/profile' className='nav-header__link'>
                  Профиль
                </Link>
              </li>
            </ul>
          </nav>
          <FormSearch />
        </div>
      </div>
    </header>
  )
}
