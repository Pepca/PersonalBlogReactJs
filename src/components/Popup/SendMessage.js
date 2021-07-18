import React from 'react'

import './_popup.scss'

export default function SendMessage({ isOpen, setIsOpen }) {
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
        <form action='/' method='post' className='popup-form'>
          <div className='popup-form__inputs'>
            <input
              type='text'
              className='popup-form__input primary-input'
              placeholder='Ваше имя'
            />
            <input
              type='email'
              className='popup-form__input primary-input'
              placeholder='Ваш e-mail'
            />
            <input
              type='text'
              className='popup-form__input primary-input'
              placeholder='Текст сообщения'
            />
          </div>
          <div className='popup-form__btn'>
            <button className='popup-form__send primary-blue-btn' type='submit'>
              Отправить
            </button>
          </div>
          <div className='popup-form__contacts contacts-popup-form'>
            <ul className='contacts-popup-form__list'>
              <li className='contacts-popup-form__item'>
                <span>e-mail:</span>
                <a href='mailto:info@mywebsite.ru'>info@mywebsite.ru</a>
              </li>
              <li className='contacts-popup-form__item'>
                <span>тел:</span>
                <a href='tel:94323285622'>+943-232-856-22</a>
              </li>
            </ul>
          </div>
        </form>
      </main>
    </div>
  )
}
