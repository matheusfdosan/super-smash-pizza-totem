import React, { useContext } from "react"
import "./styles.css"
import { SelectedItemContext } from "../../utils/SelectedItemContext"

function Item({ name, img, price, desc, ingredients }) {
  const context = useContext(SelectedItemContext)

  if (!context) {
    throw new Error("Item deve estar dentro de SelectedItemProvider")
  }

  const { setData } = context

  const handleClickItem = () => {
    setData({
      name,
      img,
      price,
      desc,
      ingredients,
    })
  }

  return (
    <div className="Item" onClick={handleClickItem}>
      <p>{name}</p>
      <img src={img} alt={name + " illustration"} />
      <p>{price}</p>
    </div>
  )
}

export default Item
