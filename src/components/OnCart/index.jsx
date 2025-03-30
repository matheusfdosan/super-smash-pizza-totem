import React from "react";
import "./styles.css";

function OnCart({ index, img, name, price, onRemove }) {
  const handleRemoveItem = () => {
    onRemove(index);
  };

  return (
    <div
      className="item"
      id={"item-" + index}

    >
      <div>
        <img src={img} alt={name + " Illustration"} />
        <p>{name}</p>
        <span>{price}</span>
      </div>
      <button onClick={handleRemoveItem}>Remover</button>
    </div>
  );
}

export default OnCart;