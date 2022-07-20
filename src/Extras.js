import React from "react"

import {Link} from "react-router-dom"
import {Routes, Route} from "react-router-dom"
import Games from "./Games"




function Extras() {


return (

     <div className="menu">
  
    
    

      <h1 className="menu-item">Clocks</h1>
      <h1 className="menu-item">Calendars</h1>
      <h1 className="menu-item">Alarms</h1>
     <h1 className="menu-item"> <Link to="/Games"> Games </Link> </h1> 
      <h1 className="menu-item">Notes</h1>
      <h1 className="menu-item">Screen Lock</h1>
      <h1 className="menu-item">Stopwatch</h1>
      
    </div>

 
)



}

export default Extras