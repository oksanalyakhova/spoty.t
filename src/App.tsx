import React, {useEffect, useState, useRef} from 'react';
import Topbar from './app/topbar/topbar-view/topbar-view';
import Main from './app/main/main-view/main-view';
import CurrentTrack from './app/current-track/current-track-view/current-track-view';
import AppContext from './AppContext';

import './App.sass';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [topHeight, setTopHeight] = useState(0);
  const [trackHeight, setTrackHeight] = useState(0);

  const topRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(topRef.current){
      setTopHeight(topRef.current.offsetHeight);
    }
    if(trackRef.current){
      setTrackHeight(trackRef.current.offsetHeight);
    }

    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);

      if(topRef.current){
        setTopHeight(topRef.current.offsetHeight);
      }
      if(trackRef.current){
        setTrackHeight(trackRef.current.offsetHeight);
      }
    });
  }, []);

  const globalSettings = {
    windowWidth,
    windowHeight,
    setWindowWidth,
    setWindowHeight
  };

  return (
    <AppContext.Provider value={globalSettings}>
      <div className="app">
        <Topbar ref={topRef}/>
        <Main topHeight={topHeight} trackHeight={trackHeight}/>
        <CurrentTrack ref={trackRef}/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
