import { useState } from 'react'
import Data from "./data.js"
import Destinations from "./destinations.jsx"

import Header from "./header.jsx"
export default function App() {
    const cardElements = Data.map(cards =>{
      return < Destinations place={cards.place} timeToGo={cards.timeToGo} price={cards.price} />
    })
  return(
  <div>
    <Header />
    {cardElements}
  </div>
  )
}