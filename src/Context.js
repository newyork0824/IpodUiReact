import React, {useContext,useState, useEffect} from "react"
 const Context = React.createContext()


function ContextProvider ({children}) {


useEffect(() => {




}, [])

 

  const[songData, setSongData] = useState([])
  const [playlist, setPlayset] = useState([])
  const[sideImg, setSideImg] = useState(true)
  const imgLinks = 
  [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1724px-Apple_logo_grey.svg.png",
  "https://w7.pngwing.com/pngs/376/34/png-transparent-itunes-music-apple-lanzzz-work-play-logo-apple-purple-text-trademark.png"]
  let sideImgUrl = imgLinks[0]
  
 
console.log(imgLinks[1])


return (

  <Context.Provider value={{sideImg, setSideImg, sideImgUrl, imgLinks}}>
  {children}
  </Context.Provider>
)

//set sideImg as an object with a url property 
// have a ref change the url img whenever the text is hovered on 
// sideImg {
   //On: true,
   //url: "www.example.com"
// }





}
export {ContextProvider, Context}