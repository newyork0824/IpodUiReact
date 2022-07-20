import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";
import useImgPics from "./useImgPics";

function MainMenu() {
  const { setSideImg } = React.useContext(Context);
  setSideImg(true);

  return (
    <div className=" menu">
      <Link to="/Music">
        {" "}
        <h1 id={1} className="menu-item">
          {" "}
          Music{" "}
        </h1>{" "}
      </Link>
      <Link to="/Videos">
        {" "}
        <h1 id={2} className="menu-item">
          Videos
        </h1>{" "}
      </Link>
      <Link to="/Photos">
        {" "}
        <h1 id={3} className="menu-item">
          Photos
        </h1>{" "}
      </Link>
      <Link to="/Podcasts">
        {" "}
        <h1 id={4} className="menu-item">
          Podcasts
        </h1>{" "}
      </Link>
      <Link to="/Extras">
        {" "}
        <h1 id={5} className="menu-item">
          Extras
        </h1>{" "}
      </Link>
      <Link to="/Settings">
        {" "}
        <h1 id={6} className="menu-item">
          Settings
        </h1>{" "}
      </Link>
      <h1 className="menu-item">Shuffle Songs</h1>
      <h1 className="menu-item">Now Playing</h1>
    </div>
  );
}

export default MainMenu;
