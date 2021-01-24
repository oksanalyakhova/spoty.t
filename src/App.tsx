import React, {useEffect, useState} from 'react';
import Topbar from './app/topbar/topbar-view/topbar-view';
import Main from './app/main/main-view/main-view';
import CurrentTrack from './app/current-track/current-track-view/current-track-view';
import AppContext from './AppContext';

import './App.sass';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    });
  }, []);

  const globalSettings = {
    windowWidth,
    windowHeight,
    setWindowWidth,
    setWindowHeight,
  };

  return (
    <AppContext.Provider value={globalSettings}>
      <div className="app">
        <Topbar className="app__topbar"/>
        <Main className="app__main"/>
        <CurrentTrack className="app__current-track"/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
