import React from "react"
import {Link} from "react-router-dom"

function Games() {

return (
<div className="menu">

      <Link to="/DiceGame"><h1  className="menu-item"> Dice Game </h1> </Link>
  <Link to="/Blackjack">    <h1  className="menu-item"> Blackjack </h1> </Link>
    </div>

)


}

export default Games