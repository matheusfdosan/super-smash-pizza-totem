import React from "react"
import { createContext, useState } from "react"
import kirby from "../assets/kirby.png"
export const SelectedItemContext = createContext()

export const SelectedItemProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "",
    img: kirby,
    description: "",
    price: "Selecione seu power-up e comece a aventura!",
    ingredients: "",
  })

  return (
    <SelectedItemContext.Provider value={{ data, setData }}>
      {children}
    </SelectedItemContext.Provider>
  )
}
