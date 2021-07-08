import React from 'react'

// Style
import './_addPost.scss'

// Images
import Camera from '../../images/AddPost/camera.svg'
import Send from '../../images/AddPost/send.svg'

export default function AddPost() {
  const textarea = React.useRef(null)

  const [textareaInitH] = React.useState(95)
  const [isFocus, setIsFocus] = React.useState(false)

  const handleSubmit = event => {
    event.preventDefault()
  }

  const handleChange = event => {
    event.target.style.height = `${textareaInitH}px`
    event.target.style.height = `${event.target.scrollHeight}px`
  }

  return (
    <form
      action='/'
      className='addpost-form'
      method='post'
      encType='multipart/form-data'
      onSubmit={event => handleSubmit(event)}
    >
      <div
        className='addpost-form__textarea'
        style={isFocus ? { width: '100%', marginBottom: '60px' } : {}}
      >
        <textarea
          name='decription-post'
          className='textarea-addpost'
          placeholder='Напишите что-нибудь'
          ref={textarea}
          onFocus={() => setIsFocus(true)}
          onBlur={event => {
            event.target.scrollHeight === textareaInitH && setIsFocus(false)
          }}
          onChange={event => handleChange(event)}
        />
      </div>
      <input
        name='file-loader-addpost'
        id='addpost-fileloader'
        type='file'
        className='adddpost-from__input input-fileloader-addpost'
      />
      <div className='addpost-form__buttons buttons-addpost'>
        <div className='buttons-addpost__item'>
          <label
            htmlFor='addpost-fileloader'
            className='buttons-addpost__btn btn-fileloader'
          >
            <img src={Camera} alt='camera loader' />
          </label>
        </div>
        <div className='buttons-addpost__item'>
          <button className='buttons-addpost__btn btn-send' type='submit'>
            <img src={Send} alt='send post' />
          </button>
        </div>
      </div>
    </form>
  )
}
