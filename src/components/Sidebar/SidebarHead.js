import React from 'react'

// Context
import { Context } from '../../Context/ContextProvider'

// Router
import { Link } from 'react-router-dom'

// Images
import Avatar from '../../images/Sidebar/smallAvatar.png'
import Instagram from '../../images/Sidebar/instagram.svg'
import Vk from '../../images/Sidebar/vk.svg'
import Pinterest from '../../images/Sidebar/pinterest.svg'

export default function SidebarHead() {
  // Context
  const { state } = React.useContext(Context)

  return (
    <div className='sidebar__head head-sidebar'>
      <Link to='/profile' className='head-sidebar__profile'>
        <div className='head-sidebar__avatar'>
          <img src={Avatar} alt='avatar' />
        </div>
        <div className='head-sidebar__info info-head-sidebar'>
          <h1 className='info-head-sidebar__name primary-title'>
            Дмитрий Валак
          </h1>
          <span className='info-head-sidebar__subname'>
            блог front-end разработчика
          </span>
        </div>
      </Link>
      {state.windowWidth > 991.98 && (
        <div className='head-sidebar__contacts contacts-head-sidebar'>
          <ul className='contacts-head-sidebar__list'>
            <li className='contacts-head-sidebar__item'>
              <a
                href='https://www.instagram.com/?hl=ru'
                className='contacts-head-sidebar__link'
                rel='noreferrer'
                target='_blank'
              >
                <img src={Instagram} alt='instagram contact link' />
              </a>
            </li>
            <li className='contacts-head-sidebar__item'>
              <a
                href='https://vk.com/'
                className='contacts-head-sidebar__link'
                rel='noreferrer'
                target='_blank'
              >
                <img src={Vk} alt='Vk contact link' />
              </a>
            </li>
            <li className='contacts-head-sidebar__item'>
              <a
                href='https://www.pinterest.ru/'
                className='contacts-head-sidebar__link'
                rel='noreferrer'
                target='_blank'
              >
                <img src={Pinterest} alt='Pinterest contact link' />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
