import React from 'react';
import Topbar from './app/topbar/topbar-view/topbar-view';
import Main from './app/main/main-view/main-view';
import CurrentTrack from './app/current-track/current-track-view/current-track-view';

import './App.sass';

const App = () => {
  return (
    <div className="app">
      <Topbar className="app__topbar" />
      <Main className="app__main" />
      <CurrentTrack className="app__current-track" />
    </div>
  );
}

export default App;
