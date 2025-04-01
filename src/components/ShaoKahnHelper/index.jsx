import React, { useEffect, useRef, useState } from "react"
import "./styles.css"

import shaoKahn from "../../assets/shaokahn-talking.png"
import soundIcon from "../../assets/speaker.png"

function ShaoKahnHelper({ text, cancel, audioF }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const handleCloseShao = () => {
    cancel(!true)
  }

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Erro ao reproduzir o áudio:", error)
      })
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = () => {
        cancel(!true)
      }
    }
  }, [])

  return (
    <div id="shao-kahn-helper-page">
      <h1>Shao Kahn (Ajudante)</h1>
      <div>
        {isPlaying && <p>{text}</p>}
        <button
          onClick={handlePlay}
          disabled={isPlaying && true}
          style={{ filter: isPlaying && "brightness(9)" }}
        >
          <img src={soundIcon} alt="sound-btn" />
          <span>Clique*</span>
        </button>
      </div>

      <img src={shaoKahn} alt="shao-kahn-talking" />

      <button id="close-shao" onClick={handleCloseShao}>Fechar</button>

      <audio ref={audioRef} muted={false}>
        <source src={audioF} />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  )
}

export default ShaoKahnHelper
