import React from "react"
import {Link} from "react-router-dom"


function Header() {


return (
<header>
    <div class="ipod-title">
     <Link to="/"> <h1 class="ipod"> iPod </h1> </Link>
    </div>

    <div class="pause-play-battery">
      <h3 class="play-pause-btn"> # </h3>
      <p class="battery"> </p>
      <p class="battery-left"> </p>
    </div>

  </header>




)



}

export default Header 