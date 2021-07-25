import React from 'react'

// Style
import './_header.scss'

// Context
import { Context } from '../../Context/ContextProvider'

// Components
import Nav from './Nav'
import Burger from './Burger'
import FormSearch from './FormSearch'

export default function Header () {
  // State
  const { state } = React.useContext(Context)

  // Render
  return (
    <header className='header' id='fixed-element'>
      <div className='header__inner'>
        {state.windowWidth <= 991.98 && <Burger/>}
        {state.windowWidth > 991.98 && <Nav/>}
        <FormSearch/>
      </div>
    </header>
  )
}
