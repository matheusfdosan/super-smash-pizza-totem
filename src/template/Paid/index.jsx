import React, { useEffect, useRef, useState } from "react"
import "./styles.css"

import logo from "../../assets/super-smash-pizza.svg"
import marioJackson from "../../assets/marioJackson.gif"
import audioFile from "../../assets/audios/paid.mp3"

function Paid() {
  const [username, setUsername] = useState("")
  const audioRef = useRef(null)

  useEffect(() => {
    const getUsername = localStorage.getItem("username")
    setUsername(getUsername)

    if (audioRef.current) {
      setTimeout(() => {
        audioRef.current.play().catch((error) => {
          console.log("Erro ao reproduzir o áudio:", error)
        })
      }, 2000)
    }
  }, [])

  const handleCloseOrder = () => {
    localStorage.setItem("order", JSON.stringify([]))
    localStorage.setItem("username", "")
    localStorage.setItem("sessions", JSON.stringify([]))
    document.location.href = "/"
  }

  return (
    <div id="paid-page">
      <img src={logo} alt="logo" />

      <h2>Pedido Realizado com Sucesso!</h2>
      <p>Aguarde até seu pedido estar pronto</p>
      <p>
        <span>{username} </span>enquanto isso:{" "}
      </p>

      <img id="mario-jackson" src={marioJackson} alt="mario-jackson-dancing" />

      <button onClick={handleCloseOrder}>Fechar</button>

      <audio ref={audioRef} src={audioFile} muted={false} />
    </div>
  )
}

export default Paid
