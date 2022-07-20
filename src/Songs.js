import React, { useContext } from "react";
import { Context } from "./Context";
import { Link } from "react-router-dom";

function Songs() {
  const { setSideImg } = React.useContext(Context);
  setSideImg(false);

  return (
    <div className="menu">
      <Link to="/MusicPlayer">
        {" "}
        <h1 className="menu-item">placeHolder</h1>{" "}
      </Link>
      <h1 className="menu-item">placeHolder</h1>
      <h1 className="menu-item">placeHolder</h1>
      <h1 className="menu-item">placeHolder</h1>
      <h1 className="menu-item">placeHolder</h1>
      <h1 className="menu-item">placeHolder</h1>
    </div>
  );
}

export default Songs;
