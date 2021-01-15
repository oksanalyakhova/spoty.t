import React from 'react';
import './App.sass';
import Artist from "./app/artist/artist-view/artist-view";
import CurrentTrack from "./app/current-track/current-track-view/current-track-view";
import Navbar from "./app/navbar/navbar-view/navbar-view";
import Sidebar from "./app/sidebar/sidebar-view/sidebar-view";
import Topbar from "./app/topbar/topbar-view/topbar-view";

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <Topbar/>
      </div>
      <div className="App-content">
          <Navbar/>
          <Artist/>
          <Sidebar/>
      </div>
      <div className="App-current-track">
          <CurrentTrack/>
      </div>
    </div>
  );
}

export default App;
