import React from "react"
import "./styles.css"

import loadingMario from "../../assets/mario-loading.gif"

function Loading() {
  return <div id="loading">
    <img src={loadingMario} alt="loading-mario" />
  </div>
}

export default Loading