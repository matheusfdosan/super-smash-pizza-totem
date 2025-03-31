import React, { useEffect, useRef, useState } from "react"
import "./styles.css"

import card from "../../assets/card.svg"
import pix from "../../assets/pix.svg"
import money from "../../assets/money.svg"

import logo from "../../assets/super-smash-pizza.svg"
import audioFile from "../../assets/audios/payment.mp3"

function Payment() {
  const [method, setMethod] = useState("")
  const [total, setTotal] = useState(0)
  const [msg, setMsg] = useState("")
  const audioRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const username = formData.get("Input")
    const paymentMethod = formData.get("payment")

    if (paymentMethod === null) {
      setMsg("Escolha o método de pagamento!")
    } else {
      localStorage.setItem("username", username)
      document.location.href = "/paid"
    }
  }

  useEffect(() => {
    const order = JSON.parse(localStorage.getItem("order"))

    const newTotal = order.reduce((total, item) => {
      const price = Number(item.price.replace("R$", "").replace(",", "."))
      return total + price
    }, 0)

    setTotal(newTotal)

    if (!JSON.parse(localStorage.getItem("sessions")).includes("payment")) {
      localStorage.setItem("sessions", JSON.stringify(["catalog", "order", "payment"]))
      
      if (audioRef.current) {
        setTimeout(() => {
          audioRef.current.play().catch((error) => {
            console.log("Erro ao reproduzir o áudio:", error)
          })
        }, 2000)
      }
    }
  }, [])

  return (
    <>
      <div id="Payment">
        <header>
          <img src={logo} alt="Logo" />
          <h1>Pagamento</h1>
        </header>

        <form onSubmit={handleSubmit} method="post">
          <div id="Input_name">
            <label htmlFor="Input">Digite o seu nome:</label>
            <input type="text" name="Input" required autoComplete="off" />
          </div>

          <div id="Payment_methods">
            <h2>Forma de Pagamento</h2>

            <div id="methods">
              <label
                htmlFor="card"
                className="pay-form"
                style={{
                  transform: method === "card" && "scale(1.1)",
                  borderColor: method === "card" && "var(--desc-payment-color)",
                }}
              >
                <input
                  type="radio"
                  name="payment"
                  id="card"
                  value="card"
                  onChange={() => setMethod("card")}
                />
                <img src={card} alt="cart-icon" />
                <p>Cartão</p>
              </label>
              <label
                htmlFor="pix"
                className="pay-form"
                style={{
                  transform: method === "pix" && "scale(1.1)",
                  borderColor: method === "pix" && "var(--desc-payment-color)",
                }}
              >
                <input
                  type="radio"
                  name="payment"
                  value="pix"
                  id="pix"
                  onChange={() => setMethod("pix")}
                />
                <img src={pix} alt="pix-icon" />
                <p>PIX</p>
              </label>
              <label
                htmlFor="money"
                className="pay-form"
                style={{
                  transform: method === "money" && "scale(1.1)",
                  borderColor:
                    method === "money" && "var(--desc-payment-color)",
                }}
              >
                <input
                  type="radio"
                  name="payment"
                  id="money"
                  value="money"
                  onChange={() => setMethod("money")}
                />
                <img src={money} alt="money-icon" />
                <p>Dinheiro</p>
              </label>
            </div>

            <span id="message">{msg}</span>

            <div id="options-btns">
              <button type="submit">
                Pagar{" "}
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </button>
              <div onClick={() => (document.location.href = "/order")}>
                Cancelar
              </div>
            </div>
          </div>
        </form>

        <audio ref={audioRef} src={audioFile} muted={false} />
      </div>
    </>
  )
}

export default Payment
