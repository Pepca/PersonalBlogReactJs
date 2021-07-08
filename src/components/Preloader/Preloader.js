import React from 'react'

// Style
import './_preloader.scss'

export default function Preloader() {
  return (
    <div className='preloader'>
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
