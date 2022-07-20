import React, { useContext } from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import MainMenu from "./MainMenu";
import Music from "./Music";
import CoverFlow from "./CoverFlow"
import Playlists from "./Playlists"
import Artists from "./Artists"
import Albums from "./Albums"
import Songs from "./Songs";
import MusicPlayer from "./MusicPlayer"
import Genres from "./Genres"
import Videos from "./Videos";
import Photos from "./Photos";
import Podcasts from "./Podcasts";
import Extras from "./Extras";
import Settings from "./Settings";
import Games from "./Games";
import DiceGame from "./DiceGame";
import Blackjack from "./Blackjack";
import { Context } from "./Context";


export default function App() {
  const { sideImg, sideImgUrl } = React.useContext(Context);

  //move sideImgUrl
  // have the sideImg go in the commont that needs it

  return (
    <div className="App">
      <Header />
      <div className="content-container ">
        <div className={sideImg ? "selected-menu" : "full-size-menu" }>
          <Routes>
            <Route exact path="/" element={<MainMenu />} />
            <Route path="/Music" element={<Music />} />
                  <Route path="/CoverFlow" element={<CoverFlow />} />
                  <Route path="/Playlists" element={<Playlists />} />
                  <Route path="/Artists" element={<Artists />} />
                  <Route path="/Albums" element={<Albums />} />
                  <Route path="/Songs" element={<Songs />} />
                   <Route path="/MusicPlayer" element={<MusicPlayer />} />
                  <Route path="/Genres" element={<Genres />} />
            <Route path="/Videos" element={<Videos />} />
            <Route path="/Photos" element={<Photos />} />
            <Route path="/Podcasts" element={<Podcasts />} />
            <Route path="/Extras" element={<Extras />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Games" element={<Games />} />
            <Route path="/DiceGame" element={<DiceGame />} />
            <Route path="/Blackjack" element={<Blackjack />} />
          </Routes>
        </div>

        {sideImg ? (
          <div className="logo-container">
            <img className="logo-img" src={sideImgUrl} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
