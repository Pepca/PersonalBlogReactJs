import React from 'react'

// Style
import './_sidebar.scss'

// Images
import bgPicture from '../../images/Sidebar/bgPicture.jpg'

// Router
import { Link } from 'react-router-dom'

// Helper Functions
import { openPopup } from '../../_helperFunctions'

// Components
import SidebarHead from './SidebarHead'
import SendMessage from '../../components/Popup/SendMessage'

export default function Sidebar() {
  // State
  const [isOpen, setIsOpen] = React.useState(false)

  // Render
  return (
    <>
      <SendMessage isOpen={isOpen} setIsOpen={setIsOpen} />
      <aside className='sidebar'>
        <div className='sidebar__inner'>
          <div className='sidebar-picture'>
            <img src={bgPicture} alt='bgPicture' />
          </div>
          <SidebarHead />
          <div className='sidebar-description'>
            <p>
              Front-end разработчик. Практик верстки сайтов. Созданием сайтов
              занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и
              наработал более 10 000 часов в создании сайтов различной
              сложности.
            </p>
          </div>
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
                onClick={() => openPopup(setIsOpen)}
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
