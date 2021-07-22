import React, { useEffect, useRef, useState } from 'react'

// Style
import './_player.scss'

// Helper Functions
import { formatTime } from '../../_helperFunctions'

// Components
import Loader from './Loader'
import VolumeSlider from './VolumeSlider'
import Timeline from './Timeline'

export default function Player({ className, src }) {
  // State
  const [isPlay, setIsPlay] = useState(false)
  const [isVideoLoading, setIsVideoLoading] = useState(true)
  const [isEnded, setIsEnded] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [HUDisHidden, setHUDisHidden] = useState(false)

  // Ref
  const refPlayer = useRef(null)
  const refVideo = useRef(null)
  const refPlayerDuration = useRef(null)
  const refTimeoutID = useRef(null)

  // Function
  const toggleHUD = () => {
    setHUDisHidden(() => false)

    if (refTimeoutID.current) {
      clearTimeout(refTimeoutID.current)

      refTimeoutID.current = null
    }

    refTimeoutID.current = setTimeout(() => {
      setHUDisHidden(() => true)
    }, 5000)
  }

  const toggleFullscreen = () => {
    const isElementFullscreen = Boolean(document.fullscreenElement)
    isElementFullscreen && document.exitFullscreen()
    !isElementFullscreen && refPlayer.current.requestFullscreen()
    setIsFullscreen((prev) => !prev)
  }

  const handlerCurrentTime = () => {
    const timeline = refPlayer.current.querySelector('.timeline-player')
    const handler = timeline.children[0]
    const currentLine = timeline.children[2]

    const widthTimeline = timeline.offsetWidth

    const halfHandlerWidth = handler.offsetWidth / 2

    const percents =
      Math.floor(refVideo.current.currentTime) /
      Math.floor(refVideo.current.duration)

    handler.style.left = `${
      ((percents * (widthTimeline - halfHandlerWidth)) / widthTimeline) * 100
    }%`
    currentLine.style.width = `${percents * 100}%`
  }

  const handlerVideoDuration = () => {
    refPlayerDuration.current.textContent = `${formatTime(
      Math.floor(refVideo.current.currentTime)
    )} / ${formatTime(Math.floor(refVideo.current.duration))}`
  }

  const bufferization = (event) => {
    const $this = event.target
    for (let i = 0; i < $this.buffered.length; i++) {
      if (
        $this.buffered.start($this.buffered.length - 1 - i) < $this.currentTime
      ) {
        const percents =
          ($this.buffered.end($this.buffered.length - 1 - i) / $this.duration) *
          100

        refPlayer.current.querySelector(
          '.timeline-player__line--ghost'
        ).style.width = `${percents}%`
        break
      }
    }
  }

  const videoPlay = () => {
    if (refVideo.current.paused && !isPlay) {
      refVideo.current.play().catch((err) => console.log(err))
    }
  }

  const videoPause = () => {
    if (!refVideo.current.paused && isPlay) {
      refVideo.current.pause()
    }
  }

  const togglePlay = () => {
    setIsPlay((prev) => !prev)
    !isPlay ? videoPlay() : videoPause()
  }

  const cancelSpaceScroll = (event) => {
    event.code === 'Space' && event.preventDefault()
  }

  const cancelDocDragStartEvent = (event) => {
    event.preventDefault()
  }

  // Hook
  useEffect(() => {
    document.addEventListener('keypress', cancelSpaceScroll)

    document.addEventListener('dragstart', cancelDocDragStartEvent)

    return () => {
      document.removeEventListener('keypress', cancelSpaceScroll)
      document.removeEventListener('dragstart', cancelDocDragStartEvent)

      clearTimeout(refTimeoutID.current)
    }
  }, [refTimeoutID])

  // Render
  return (
    <div
      className={className}
      ref={refPlayer}
      onMouseMove={() => toggleHUD()}
      onClick={() => toggleHUD()}
      onKeyPress={() => toggleHUD()}
    >
      <div className={`player__video${HUDisHidden ? ' HUDisHidden' : ''}`}>
        <video
          ref={refVideo}
          src={src}
          controlsList='nodownload'
          onPlaying={() => {
            setIsPlay(() => true)
            setIsEnded(() => false)
            setIsVideoLoading(() => false)
          }}
          onPause={() => setIsPlay(() => false)}
          onDoubleClick={() => toggleFullscreen()}
          onClick={() => {
            if (!isVideoLoading) isEnded ? videoPlay() : togglePlay()
            localStorage.setItem('prev-state-isPlay', `${isPlay}`)
          }}
          // onLoadedMetadata={(event) => {}}
          onLoadedData={() => {
            setIsVideoLoading(() => false)
            handlerCurrentTime()
            handlerVideoDuration()
          }}
          onTimeUpdate={() => {
            handlerCurrentTime()
            handlerVideoDuration()
          }}
          onCanPlay={() => isVideoLoading && setIsVideoLoading(() => false)}
          onWaiting={() => setIsVideoLoading(() => true)}
          onProgress={(event) => bufferization(event)}
          onEnded={() => setIsEnded(() => true)}
        />
      </div>

      {isVideoLoading && <Loader />}

      {!isVideoLoading && isEnded && (
        <div className='player-notify-icon notify-replay-icon'>
          <svg height='100%' version='1.1' viewBox='0 0 16 20' width='100%'>
            <title />
            <desc />
            <defs />
            <g fill='none' id='Page-1' stroke='none'>
              <g
                fill='#fff'
                id='Icons-AV'
                transform='translate(-2.000000, -127.000000)'
              >
                <g id='replay' transform='translate(2.000000, 127.000000)'>
                  <path
                    d='M8,4 L8,0 L3,5 L8,10 L8,6 C11.3,6 14,8.7 14,12 C14,15.3 11.3,18 8,18 C4.7,18 2,15.3 2,12 L0,12 C0,16.4 3.6,20 8,20 C12.4,20 16,16.4 16,12 C16,7.6 12.4,4 8,4 L8,4 Z'
                    id='Shape'
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
      <div
        className='player__panel'
        style={{
          opacity: HUDisHidden ? '0' : '1',
          visibility: HUDisHidden ? 'hidden' : 'visible',
        }}
      >
        <Timeline
          refVideo={refVideo}
          videoPlay={videoPlay}
          videoPause={videoPause}
        />

        <div className='player__controls'>
          <div className='player__controls-right'>
            <button
              className='player-button pause-play-control'
              onClick={() => {
                localStorage.setItem('prev-state-isPlay', `${isPlay}`)
                if (!isVideoLoading) isEnded ? videoPlay() : togglePlay()
              }}
            >
              <svg height='100%' width='100%' id='d' viewBox='0 0 300 300'>
                <polygon
                  id='shape1'
                  points={
                    isPlay
                      ? '0,0 110,0 110,300 0,300'
                      : '0,0 150,75 150,225 0,300'
                  }
                  style={{ fill: '#fff' }}
                />

                <polygon
                  id='shape2'
                  points={
                    isPlay
                      ? '190,0 300,0 300,300 190,300'
                      : '150,75 300,150 300,150 150,228'
                  }
                  style={{ fill: '#fff', transform: 'translateX(-7px)' }}
                />
              </svg>
            </button>

            <VolumeSlider refVideo={refVideo} />

            <div className='player-duration' ref={refPlayerDuration}/>
          </div>
          <div className='player__controls-left'>
            <button
              className='player-button fullscreen-control'
              title='fullscreen change player'
              onClick={(event) => {
                event.currentTarget.blur()
                toggleFullscreen()
              }}
            >
              {isFullscreen ? (
                <svg viewBox='0 0 96 96'>
                  <title />
                  <g fill='#fff'>
                    <path d='M30,60H6A6,6,0,0,0,6,72H24V90a6,6,0,0,0,12,0V66A5.9966,5.9966,0,0,0,30,60Z' />
                    <path d='M90,60H66a5.9966,5.9966,0,0,0-6,6V90a6,6,0,0,0,12,0V72H90a6,6,0,0,0,0-12Z' />
                    <path d='M66,36H90a6,6,0,0,0,0-12H72V6A6,6,0,0,0,60,6V30A5.9966,5.9966,0,0,0,66,36Z' />
                    <path d='M30,0a5.9966,5.9966,0,0,0-6,6V24H6A6,6,0,0,0,6,36H30a5.9966,5.9966,0,0,0,6-6V6A5.9966,5.9966,0,0,0,30,0Z' />
                  </g>
                </svg>
              ) : (
                <svg viewBox='0 0 96 96'>
                  <title />
                  <g fill='#fff'>
                    <path d='M30,0H6A5.9966,5.9966,0,0,0,0,6V30a6,6,0,0,0,12,0V12H30A6,6,0,0,0,30,0Z' />
                    <path d='M90,0H66a6,6,0,0,0,0,12H84V30a6,6,0,0,0,12,0V6A5.9966,5.9966,0,0,0,90,0Z' />
                    <path d='M30,84H12V66A6,6,0,0,0,0,66V90a5.9966,5.9966,0,0,0,6,6H30a6,6,0,0,0,0-12Z' />
                    <path d='M90,60a5.9966,5.9966,0,0,0-6,6V84H66a6,6,0,0,0,0,12H90a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,90,60Z' />
                  </g>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
