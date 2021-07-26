import React from 'react'

// Style
import './_sidebar.scss'

// Images
import bgPicture from '../../images/Sidebar/bgPicture.jpg'

// Router
import { Link } from 'react-router-dom'

// Helper Functions
import { openPopup } from '../../_helperFunctions'

// Context
import { Context } from '../../Context/ContextProvider'

// Components
import SidebarHead from './SidebarHead'
import SendMessage from '../../components/Popup/SendMessage'
import SidebarNav from './SidebarNav'

export default function Sidebar() {
  // Ref
  const refSidebar = React.useRef(null)

  // State
  const [isOpen, setIsOpen] = React.useState(false)

  // Context
  const { state, dispatch } = React.useContext(Context)

  // Hook
  React.useEffect(() => {
    refSidebar.current.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () =>
        dispatch.setSidebarIsOpen(() => false)
      )
    })
  }, [refSidebar, dispatch])

  // Render
  return (
    <>
      <SendMessage isOpen={isOpen} setIsOpen={setIsOpen} />
      {state.windowWidth <= 991.98 && (
        <div
          className='sidebar__mask'
          onClick={() => dispatch.setSidebarIsOpen(() => false)}
          style={{
            opacity: state.sidebarIsOpen ? '1' : '0',
            visibility: state.sidebarIsOpen ? 'visible' : 'hidden',
          }}
        />
      )}
      <aside
        ref={refSidebar}
        className={`sidebar${state.sidebarIsOpen ? ' _sidebarIsOpen' : ''}`}
      >
        <div className='sidebar__inner'>
          <div className='sidebar-picture'>
            <img src={bgPicture} alt='bgPicture' />
          </div>
          <SidebarHead />
          {state.windowWidth > 991.98 && (
            <div className='sidebar-description'>
              <p>
                Front-end разработчик. Практик верстки сайтов. Созданием сайтов
                занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и
                наработал более 10 000 часов в создании сайтов различной
                сложности.
              </p>
            </div>
          )}
          {state.windowWidth <= 991.98 && <SidebarNav />}
          <div className='sidebar__controls controls-sidebar'>
            <div className='controls-sidebar__item'>
              <Link
                to='/works'
                className='controls-sidebar__btn red-btn'
                type='button'
              >
                Мои работы
              </Link>
            </div>
            <div className='controls-sidebar__item'>
              <button
                className='controls-sidebar__btn blue-btn'
                onClick={() => {
                  openPopup(setIsOpen)
                  dispatch.setSidebarIsOpen(() => false)
                }}
                type='button'
              >
                Написать мне
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
