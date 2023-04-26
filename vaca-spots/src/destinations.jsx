import { useState } from "react";


export default function destinations(cards) {
    return(
        <div className="cards">
            <h2>{cards.place}</h2>
            <h3>Best time to go- {cards.timeToGo}</h3>
            <h3>Price- ${cards.price}</h3>
            <hr className="break" />
        </div>
    )
}