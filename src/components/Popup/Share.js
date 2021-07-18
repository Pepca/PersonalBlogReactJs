import React from 'react'

// Media
import Facebook from '../../images/Share/facebook.svg'
import Twitter from '../../images/Share/twitter.svg'
import Vk from '../../images/Share/vk.svg'
import Copy from '../../images/Share/copy.svg'

export default function Share({ isOpen, setIsOpen }) {
  return (
    <div
      className={`popup${isOpen ? ' popup-open' : ''}`}
      onClick={() => setIsOpen(() => false)}
    >
      <main className='popup-content' onClick={(e) => e.stopPropagation()}>
        <div className='popup-close'>
          <button
            className='btn-close-popup'
            type='button'
            onClick={() => setIsOpen(() => false)}
          />
        </div>
        <ul className='popup-list'>
          <li className='popup-item'>
            <a href='/' target='_blank' className='popup-link'>
              <img src={Facebook} alt={Facebook} />
            </a>
          </li>
          <li className='popup-item'>
            <a href='/' target='_blank' className='popup-link'>
              <img src={Twitter} alt={Twitter} />
            </a>
          </li>
          <li className='popup-item'>
            <a href='/' target='_blank' className='popup-link'>
              <img src={Vk} alt={Vk} />
            </a>
          </li>
          <li className='popup-item'>
            <a href='/' target='_blank' className='popup-link'>
              <img src={Copy} alt={Copy} />
            </a>
          </li>
        </ul>
      </main>
    </div>
  )
}
