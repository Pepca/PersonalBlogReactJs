import React from 'react'

// Style
import './_addPost.scss'

// Images
import Camera from '../../images/AddPost/camera.svg'
import Send from '../../images/AddPost/send.svg'

export default function AddPost() {
  // Refs
  const refTextarea = React.useRef(null)

  // State
  const [textareaHeight, setTextareaHeight] = React.useState(
    70 + 25 * ((window.innerWidth - 320) / 1600)
  )
  const [isFocus, setIsFocus] = React.useState(false)

  // Functions
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    event.target.style.height = `${textareaHeight}px`
    event.target.style.height = `${event.target.scrollHeight}px`
  }

  const resizeWindow = () => {
    setTextareaHeight(() => 70 + 25 * ((window.innerWidth - 320) / 1600))
  }

  const docBlur = (event) => {
    !event.target.closest('.addpost-form') &&
      refTextarea.current?.value === '' &&
      setIsFocus(() => false)
  }

  React.useEffect(() => {
    document.addEventListener('click', docBlur)

    window.addEventListener('resize', resizeWindow)

    return () => {
      document.removeEventListener('click', docBlur)
      window.removeEventListener('resize', resizeWindow)
    }
  }, [])

  // Render
  return (
    <form
      action='/'
      className={`addpost-form${isFocus ? ' _focused' : ''}`}
      method='post'
      encType='multipart/form-data'
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className='addpost-form__textarea'>
        <textarea
          name='decription-post'
          className='textarea-addpost'
          placeholder='Напишите что-нибудь'
          ref={refTextarea}
          onChange={(event) => handleChange(event)}
          onFocus={() => setIsFocus(() => true)}
          style={{
            height: `${textareaHeight}px`,
          }}
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
