import React, { useState, useRef } from 'react'

// SecFunc
import { formatTime } from '../../_helperFunctions'

export default React.memo(function Timeline({
  refVideo,
  videoPlay,
  videoPause,
}) {
  // State
  const [isDragging, setIsDragging] = useState(false)

  // Ref
  const refTimeline = useRef(null)
  const refHandler = useRef(null)
  const refHint = useRef(null)
  const refCurrentLine = useRef(null)

  // Func
  const calcPositionX = (event) => {
    const { left } = refTimeline.current.getBoundingClientRect()

    let pixels = event.clientX - left

    const widthTimeLine =
      refTimeline.current.offsetWidth - refHandler.current.offsetWidth / 2

    if (pixels > widthTimeLine) pixels = widthTimeLine
    if (pixels <= 0) pixels = 0

    const percensts = pixels / widthTimeLine

    return {
      getPixels: () => pixels,
      getPercents: () => percensts,
    }
  }

  const positionX = (event, type) => {
    if (type === 'devided')
      return Math.ceil(
        calcPositionX(event).getPixels() - refHandler.current.offsetWidth / 2
      )
    return Math.ceil(
      calcPositionX(event).getPixels() - refHandler.current.offsetWidth
    )
  }

  const setCurrentTime = (event) => {
    refVideo.current.currentTime =
      refVideo.current.duration * calcPositionX(event).getPercents()
  }

  const cancelDragging = (event) => {
    if (isDragging) {
      setCurrentTime(event)
      setIsDragging(() => false)
      localStorage.getItem('prev-state-isPlay') === 'false' && videoPlay()
    }
  }

  const mouseMoveHintActions = (event) => {
    refHint.current.style.left = `${positionX(event)}px`
    refHint.current.textContent = formatTime(
      Math.floor(refVideo.current.duration * calcPositionX(event).getPercents())
    )
  }

  const mouseMoveDragging = (event) => {
    if (isDragging) {
      refHandler.current.style = `left: ${positionX(event, 'devided')}px`
      refCurrentLine.current.style.width = `${positionX(event, 'devided')}px`
    }
  }

  const mouseMoveEvent = (event) => {
    mouseMoveHintActions(event)
    mouseMoveDragging(event)
  }

  const mouseDownEvent = (event) => {
    videoPause()
    setIsDragging(() => true)
    setCurrentTime(event)
  }

  // Render
  return (
    <div
      className='timeline-player'
      ref={refTimeline}
      onMouseDown={(event) => mouseDownEvent(event)}
      onMouseMove={(event) => mouseMoveEvent(event)}
      onMouseUp={(event) => cancelDragging(event)}
      onMouseLeave={(event) => cancelDragging(event)}
    >
      <div className='timeline-player__handler' ref={refHandler} />
      <div className='timeline-player__hint' ref={refHint} />
      <div
        className='timeline-player__line timeline-player__line--current'
        ref={refCurrentLine}
      />
      <div className='timeline-player__line timeline-player__line--ghost' />
      <div className='timeline-player__line timeline-player__line--full' />
    </div>
  )
})
