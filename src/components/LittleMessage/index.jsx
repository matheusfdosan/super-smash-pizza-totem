import React from "react"
import "./styles.css"

import plus from "../../assets/plus-icon.svg"

function LittleMessage({ value }) {
  return (
    <div id="little-message">
      <img src={plus} alt="plus" />
      <p>{value}</p>
    </div>
  )
}

export default LittleMessage
