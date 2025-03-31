import React, { useEffect, useRef } from "react"
import "./styles.css"

import logo from "../../assets/super-smash-pizza.svg"
import mario from "../../assets/mario.svg"
import pizza_png from "../../assets/pizza_png.svg"
import whiteBorderBg from "../../assets/white-border-bg.svg"
import bigPizza from "../../assets/big-pizza.svg"
import pizzaBox from "../../assets/pizza-box.svg"
import footerLine from "../../assets/footer-line.svg"
import audioFile from "../../assets/audios/initial.mp3"

function Inital() {
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      setTimeout(() => {
        audioRef.current.play().catch((error) => {
          console.log("Erro ao reproduzir o áudio:", error)
        })
      }, 2000)
    }
  }, [])

  const handleChangePage = () => {
    document.location.href = "/catalog"
  }

  return (
    <div id="initial-page">
      <img id="white-border" src={whiteBorderBg} alt="white-border-bg" />
      <header>
        <img src={mario} alt="mario-icon" />
        <img src={logo} alt="super-smash-pizza-logo" />
        <img src={pizza_png} alt="pizza-pixeled" />
      </header>

      <main>
        <p>Seja Bem-vindo(a)</p>
        <p>Escolha:</p>

        <div id="choose">
          <div id="eat-here" onClick={handleChangePage}>
            <img src={bigPizza} alt="big-pizza" />
            <p>Comer Aqui</p>
          </div>

          <div id="eat-out" onClick={handleChangePage}>
            <img src={pizzaBox} alt="big-pizza" />
            <p>Levar</p>
          </div>
        </div>
      </main>

      <footer>
        <img src={footerLine} alt="footer-line" />
      </footer>

      <audio ref={audioRef} src={audioFile} muted={false} />
    </div>
  )
}

export default Inital
