import React, { useContext, useState } from "react"
import "./styles.css"

import logo from "../../assets/super-smash-pizza.svg"
import sonic from "../../assets/waiting-slow.gif"
import cart from "../../assets/Cart.svg"
import Pizza from "../../assets/Pizza_img.svg"
import Drink from "../../assets/Drink_img.svg"
import Combo from "../../assets/Combo_img.svg"
import Dessert from "../../assets/Desserts_img.svg"
import Accompaniment from "../../assets/accompaniment.svg"

import {
  pizzas,
  accompaniment,
  combos,
  desserts,
  drinks,
} from "../../utils/products"

import Menu from "../../components/Menu"
import { SelectedItemContext } from "../../utils/SelectedItemContext"
import Details from "../../components/Details"
import LittleMessage from "../../components/LittleMessage"

export default function Catalog() {
  const [order, setOrder] = useState("Pizza")
  const [showDetails, setShowDetails] = useState(false)
  const [message, setMessage] = useState(false)

  const { data } = useContext(SelectedItemContext)

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
    }, 900);
  }

  return (
    <div className="catalog">
      <header>
        <img src={sonic} alt="Sonic_img" className="Sonic_img" />
        <img src={logo} alt="Logo_img" className="Logo_img" />
        <button
          className="ViewOrders_btn"
          onClick={() => (document.location.href = "/order")}
        >
          <img src={cart} alt="" />
          <p>Ver meu Pedido</p>
        </button>
      </header>
      <div className="catalog_container">
        <div className="OrderSelection">
          <div
            className="Menu_item"
            style={{
              borderColor:
                order == "Pizza"
                  ? "var(--select-price-color)"
                  : "var(--border-text-color)",
            }}
            onClick={() => setOrder("Pizza")}
          >
            <img src={Pizza} alt="" />
          </div>
          <div
            className="Menu_item"
            style={{
              borderColor:
                order == "Drink"
                  ? "var(--select-price-color)"
                  : "var(--border-text-color)",
            }}
            onClick={() => setOrder("Drink")}
          >
            <img src={Drink} alt="" />
          </div>
          <div
            className="Menu_item"
            style={{
              borderColor:
                order == "Combo"
                  ? "var(--select-price-color)"
                  : "var(--border-text-color)",
            }}
            onClick={() => setOrder("Combo")}
          >
            <img src={Combo} alt="" />
          </div>
          <div
            className="Menu_item"
            style={{
              borderColor:
                order == "Accompaniement"
                  ? "var(--select-price-color)"
                  : "var(--border-text-color)",
            }}
            onClick={() => setOrder("Accompaniement")}
          >
            <img src={Accompaniment} alt="" />
          </div>
          <div
            className="Menu_item"
            style={{
              borderColor:
                order == "Dessert"
                  ? "var(--select-price-color)"
                  : "var(--border-text-color)",
            }}
            onClick={() => setOrder("Dessert")}
          >
            <img src={Dessert} alt="" />
          </div>
        </div>

        {order === "Pizza" ? <Menu data={pizzas} /> : null}
        {order === "Drink" ? <Menu data={drinks} /> : null}
        {order === "Combo" ? <Menu data={combos} /> : null}
        {order === "Accompaniement" ? <Menu data={accompaniment} /> : null}
        {order === "Dessert" ? <Menu data={desserts} /> : null}
      </div>

      <div id="select-item">
        <div className="container">
          <div id="selected-item">
            <img src={data?.img} alt={data?.name + "illustration"} />

            <div id="info">
              <h2>{data?.name}</h2>
              <p>{data?.price}</p>
            </div>
          </div>

          {data.price !== "Selecione seu power-up e comece a aventura!" && (
            <div id="add-details-button">
              <button onClick={handleAddItem}>Adicionar</button>
              <button onClick={() => setShowDetails(!showDetails)}>
                Detalhes
              </button>
            </div>
          )}
        </div>
      </div>

      {message && <LittleMessage value="Item Adicionado"/>}

      {showDetails && <Details isDetailsOn={setShowDetails} />}
    </div>
  )
}
