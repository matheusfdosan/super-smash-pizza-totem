import React from "react"
import "./styles.css"

import Item from "../../components/Item"

function Menu({ data }) {
  return (
    <div className="Menu">
      {data.map((item, index) => {
        return <Item key={index} name={item.name} price={item.price} img={item.img} desc={item.description} ingredients={item.ingredients} />
      })}
    </div>
  )
}

export default Menu
