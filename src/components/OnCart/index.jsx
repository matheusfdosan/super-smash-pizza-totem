import React, { useEffect, useState } from "react"
import "./styles.css"

function OnCart({ index, img, name, price, onRemove }) {
  const [paid, setPaid] = useState(false)

  useEffect(() => {
    if (
      localStorage.getItem("username") &&
      localStorage.getItem("username").trim() !== ""
    ) {
      setPaid(true)
    }
  }, [])

  const handleRemoveItem = () => {
    onRemove(index)
  }

  return (
    <div className="item" id={"item-" + index}>
      <div>
        <img src={img} alt={name + " Illustration"} />
        <p>{name}</p>
        <span>{price}</span>
      </div>
      {!paid && <button onClick={handleRemoveItem}>Remover</button>}
    </div>
  )
}

export default OnCart
