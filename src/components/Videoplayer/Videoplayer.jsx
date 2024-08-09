import React, { useRef } from 'react'
import './Videoplayer.css'
import video from '../../assets/video.mp4'

const Videoplayer = ({playState, setPlayState}) => {

  const player = useRef(null)
  const closePlayer = (e)=>{
    if(e.target === player.current){
      setPlayState(flase)

    }

  }
  return (
    <div className={`Videoplayer ${playState?'':'hide'}` } ref={player}
    onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default Videoplayer
