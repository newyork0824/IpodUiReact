import React from "react"
import {Context} from "./Context"

function Podcasts() {
const {setSideImg} = React.useContext(Context)
setSideImg(false)

return (
 <div class="podcasts">
        <img className="podcast-img" src="https://2edqwqjiapp3k7t413ovb0bj-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/How-to-design-a-great-podcast-logo.jpg" />
        <div className="podcast-container">
          <p className="bullet"> </p>
        <div className="podcast-info">
         <h1 className="podcast-title"> Random Podcast </h1>
          <p className="num-of-pod-episodes">2 Episodes</p>

          </div>
          </div>

        </div>




)



}
export default Podcasts 