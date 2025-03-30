import React, { useContext, useState } from "react"
import "./styles.css"
import { SelectedItemContext } from "../../utils/SelectedItemContext"
import LittleMessage from "../LittleMessage"

function Details({ isDetailsOn }) {
  const [message, setMessage] = useState(false)

  const { data } = useContext(SelectedItemContext)

  const handleCloseDescription = () => {
    isDetailsOn(false)
  }

  const handleAddItem = () => {
    if (!localStorage.getItem("order")) {
      localStorage.setItem("order", JSON.stringify([]))
    }

    const order = JSON.parse(localStorage.getItem("order"))

    const newOrder = {
      name: data.name,
      img: data.img,
      description: data.description,
      price: data.price,
      ingredients: data.ingredients,
    }

    order.push(newOrder)
    localStorage.setItem("order", JSON.stringify(order))

    setMessage(true)

    setTimeout(() => {
      setMessage(false)
    }, 900)
  }

  return (
    <div id="details">
      <div id="item-detail">
        <div id="left-side">
          <div id="basic-info">
            <img src={data.img} alt={data.name + " Illustration"} />

            <div id="name-price">
              <h2>{data.name}</h2>
              <p>{data.price}</p>
            </div>
          </div>
          <div id="description">
            <span>{data.ingredients}</span>
            <p>{data.desc}</p>
          </div>
        </div>

        <div id="right-side">
          <button onClick={handleCloseDescription}>Fechar</button>
          <button onClick={handleAddItem}>Adicionar</button>
        </div>
      </div>

      {message && <LittleMessage value="Item Adicionado" />}
    </div>
  )
}

export default Details
