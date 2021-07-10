import React from 'react'

// Style
import './_works.scss'

// Components
import WorkItems from './WorkItems'

export default function Works() {
  // Render
  return (
    <section className='works'>
      <div className='works__title title-route'>Мои работы</div>
      <div className='works__inner'>
        <WorkItems />
      </div>
    </section>
  )
}
