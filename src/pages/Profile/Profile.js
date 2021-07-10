import React from 'react'

// Style
import './_profile.scss'

export default function Profile() {
  // Render
  return (
    <section className='profile'>
      <h1 className='profile__title title-route'>Профиль</h1>
      <div className='profile__inner'>
        <form
          action='/'
          method='post'
          encType='multipart/form-data'
          className='form-profile'
        >
          <div className='form-profile__data data-form-profile'>
            <input
              name='user_name'
              type='text'
              placeholder='Ваше имя'
              className='data-form-profile__input primary-input'
            />
            <input
              name='user_email'
              type='email'
              placeholder='Вашь email'
              className='data-form-profile__input primary-input'
            />
            <input
              name='user_password'
              type='password'
              placeholder='Новый пароль'
              className='data-form-profile__input primary-input'
            />
            <input
              name='user_confirm_password'
              type='password'
              placeholder='Подтвердите пароль'
              className='data-form-profile__input primary-input'
            />
            <button
              className='data-form-profile__btn primary-blue-btn'
              type='submit'
            >
              Сохранить
            </button>
          </div>
          <div className='form-profile__avatar avatar-form-profiel'>
            <input
              name='user_avatar'
              id='user_avatar'
              type='file'
              className='avatar-form-profile__input'
            />
            <label
              htmlFor='user_avatar'
              className='avatar-form-profile__label label-form-avatar'
            >
              <div className='label-form-avatar__container'></div>
              <span className='label-form-avatar__btn'>выбрать аватар</span>
            </label>
          </div>
        </form>
      </div>
    </section>
  )
}
