import React from "react";
import { Link } from "react-router-dom";
import CoverFlow from "./CoverFlow"
import Playsets from "./Playlists"
import Artists from "./Artists"
import Albums from "./Albums"
import Songs from "./Songs";
import Genres from "./Genres"


function Music() {
  return (
    <div className="menu">
    <Link to="/CoverFlow">  <h1 className="menu-item">Cover Flow</h1> </Link>
    <Link to= "/Playlists">  <h1 className="menu-item">Playlists</h1> </Link>
    <Link to="/Artists"> <h1 className="menu-item">Artists</h1> </Link>
   <Link to="/Albums">   <h1 className="menu-item">Albums</h1> </Link>
      <h1 className="menu-item">
        {" "}
        <Link to="/Songs">Songs </Link>{" "}
      </h1>
    <Link to="/Genres">  <h1 className="menu-item">Genres</h1> </Link>
    
      <h1 className="menu-item">AudioBooks</h1>
      <h1 className="menu-item">Search</h1>
    </div>
  );
}

export default Music;
