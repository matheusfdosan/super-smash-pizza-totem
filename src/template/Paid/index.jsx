import React, { useEffect, useState } from "react"
import "./styles.css"

import logo from "../../assets/super-smash-pizza.svg"
import marioJackson from "../../assets/marioJackson.gif"
import TranscriptionTool from "../../components/TranscriptionTool"

function Paid() {
  const [username, setUsername] = useState("")

  useEffect(() => {
    const getUsername = localStorage.getItem("username")
    setUsername(getUsername)
  }, [])

  const handleCloseOrder = () => {
    localStorage.setItem("order", [])
    localStorage.setItem("username", "")
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

      <TranscriptionTool />

      <button onClick={handleCloseOrder}>Fechar</button>
    </div>
  )
}

export default Paid
