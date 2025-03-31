import React, { useEffect, useRef, useState } from "react"
import "./styles.css"
import logo from "../../assets/super-smash-pizza.svg"
import OnCart from "../../components/OnCart"
import audioFile from "../../assets/audios/order.mp3"

function Order() {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)
  const audioRef = useRef(null)

  const parsePrice = (price) => {
    const parsed = Number(price.replace("R$ ", "").replace(",", "."))
    return isNaN(parsed) ? 0 : parsed
  }

  useEffect(() => {
    if (!localStorage.getItem("order")) {
      JSON.parse(localStorage.setItem("order", JSON.stringify([])))
    }

    const storedOrder = JSON.parse(localStorage.getItem("order")) || []
    setItems(storedOrder)

    const initialTotal = storedOrder.reduce((acc, item) => {
      const price = parsePrice(item.price)
      console.log(price)
      return acc + price
    }, 0)
    setTotal(initialTotal)

    if (!JSON.parse(localStorage.getItem("sessions")).includes("order")) {
      localStorage.setItem("sessions", JSON.stringify(["catalog", "order"]))
      
      if (audioRef.current) {
        setTimeout(() => {
          audioRef.current.play().catch((error) => {
            console.log("Erro ao reproduzir o áudio:", error)
          })
        }, 2000)
      }
    }
  }, [])

  useEffect(() => {
    const theTotal = items.reduce((acc, item) => {
      const price = parsePrice(item.price)
      return acc + price
    }, 0)
    setTotal(theTotal)
  }, [items])

  const handleRemoveItem = (index) => {
    const updatedOrder = items.filter((_, i) => i !== index)
    setItems(updatedOrder)
    localStorage.setItem("order", JSON.stringify(updatedOrder))
  }

  const handlePayment = () => {
    if (total !== 0) {
      document.location.href = "/payment"
    }
  }

  return (
    <div id="order">
      <header>
        <img src={logo} alt="logo" />
        <h2>Seu Pedido</h2>
        <button onClick={() => (document.location.href = "/catalog")}>
          Voltar
        </button>
      </header>

      <main>
        {items.length > 0 ? (
          <div className="container">
            {items.map((item, i) => (
              <OnCart
                key={i}
                index={i}
                img={item.img}
                name={item.name}
                price={item.price}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>
        ) : (
          <p id="empty">Seu carrinho está vazio!</p>
        )}
      </main>

      <footer>
        <div className="container">
          <div id="total">
            <p>Total:</p>
            <p>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          <button onClick={handlePayment}>Pagar</button>
        </div>
      </footer>

      <audio ref={audioRef} src={audioFile} muted={false} />
    </div>
  )
}

export default Order
