import React from 'react'

// Context
import { Context } from '../../Context/ContextProvider'

export default function Burger () {
  // Context
  const { state, dispatch } = React.useContext(Context)

  return (
    <div
      className={`header-burger${state.sidebarIsOpen ? ' _sidebarIsOpen' : ''}`}
      onClick={() =>
        dispatch.setSidebarIsOpen((prev) => (prev !== true))
      }
    >
      <div className='header-burger__inner'>
        <span/>
      </div>
    </div>
  )
}
