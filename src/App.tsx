import React from 'react';
import Artist from './app/artist/artist-view/artist-view';
import CurrentTrack from './app/current-track/current-track-view/current-track-view';
import Navbar from './app/navbar/navbar-view/navbar-view';
import Sidebar from './app/sidebar/sidebar-view/sidebar-view';
import Topbar from './app/topbar/topbar-view/topbar-view';

import './App.sass';

const App = () => {
  return (
    <div className="app">
      <Topbar className="app__topbar" />
      <div className="app__content">
          <Navbar className="app__navbar" />
          <Artist className="app__artist" isVerified={true} />
          <Sidebar className="app__sidebar" />
      </div>
      <CurrentTrack className="app__current-track" />
    </div>
  );
}

export default App;
