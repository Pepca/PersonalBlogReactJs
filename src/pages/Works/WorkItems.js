import React from 'react'

// DATA
import { DATA_WORKS } from './DATA_WORKS'

export default function WorkItems() {
  // Render
  return (
    <>
      {DATA_WORKS.length > 0 &&
        DATA_WORKS.map((item) => (
          <div key={item.id} className='works__item item-works'>
            <div className='item-works__picture'>
              <img src={item.img.src} alt={item.img.alt} />
            </div>
            <div className='item-works__info'>
              <div className='item-works__description description-works-item'>
                <h1 className='description-works-item__title'>{item.title}</h1>
                <p className='description-works-item__text'>{item.text}</p>
              </div>
              {item.tags.length > 0 && (
                <div className='item-works__tags tags-works-item'>
                  <ul className='tags-works-item__list'>
                    {item.tags.map((tag, index) => (
                      <li key={index} className='tags-works-item__li'>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className='item-works__link'>
                <a
                  className='primary-blue-btn'
                  href={item.href}
                  target='_blank'
                  rel='noreferrer'
                >
                  Перейти на сайт
                </a>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}
