import React, { useEffect, useState } from "react"
import "./styles.css"
import logo from "../../assets/super-smash-pizza.svg"
import OnCart from "../../components/OnCart"

function Order() {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)

  const parsePrice = (price) => {
    const parsed = Number(price.replace("R$ ", "").replace(",", "."))
    return isNaN(parsed) ? 0 : parsed
  }

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("order")) || []
    setItems(storedOrder)

    const initialTotal = storedOrder.reduce((acc, item) => {
      const price = parsePrice(item.price)
      console.log(price);
      return acc + price
    }, 0)
    setTotal(initialTotal)
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
    </div>
  )
}

export default Order