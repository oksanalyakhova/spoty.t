import React, {useEffect, useState, useRef} from 'react';
import Topbar from './app/topbar/topbar-view/topbar-view';
import Main from './app/main/main-view/main-view';
import CurrentTrack from './app/current-track/current-track-view/current-track-view';
import AppContext from './AppContext';
import local from './local.json';
import useFetch from './useFetch';
import {ISiteTypes} from './types/siteTypes';
import {
  AiOutlineFile,
  FaHeadphones,
  ImUser,
  ImUsers,
  IoIosBrowsers,
  IoRadio} from 'react-icons/all';

import './App.sass';

const navMain = [
  {
    id: 11,
    url: 'some/page',
    icon: <IoIosBrowsers/>,
    name: 'Browse'
  },
  {
    id: 12,
    url: 'some/page',
    icon: <ImUsers/>,
    name: 'Activity'
  },
  {
    id: 13,
    url: 'some/page',
    icon: <IoRadio/>,
    name: 'Radio'
  }
]
const navMusic = [
  {
    id: 21,
    url: 'some/page',
    icon: <FaHeadphones/>,
    name: 'Songs'
  },
  {
    id: 22,
    url: 'some/page',
    name: 'Albums'
  },
  {
    id: 23,
    url: 'some/page',
    icon: <ImUser/>,
    name: 'Artists'
  },
  {
    id: 24,
    url: 'some/page',
    icon: <AiOutlineFile/>,
    name: 'Local Files'
  }
]
const navPlaylists = [
  {
    id: 31,
    url: 'some/page',
    name: 'Doo Wop'
  },
  {
    id: 32,
    url: 'some/page',
    name: 'Pop Classics'
  },
  {
    id: 33,
    url: 'some/page',
    name: 'Love $ongs'
  },
  {
    id: 34,
    url: 'some/page',
    name: 'Hipster'
  },
  {
    id: 35,
    url: 'some/page',
    name: 'New Music Friday'
  },
  {
    id: 36,
    url: 'some/page',
    name: 'Techno Poppers'
  },
  {
    id: 37,
    url: 'some/page',
    name: 'Summer Soothers'
  },
  {
    id: 38,
    url: 'some/page',
    name: 'Hard Rap'
  },
  {
    id: 39,
    url: 'some/page',
    name: 'Pop Rap'
  },
  {
    id: 40,
    url: 'some/page',
    name: '5 Stars'
  },
  {
    id: 41,
    url: 'some/page',
    name: 'Dope Dancin'
  },
  {
    id: 42,
    url: 'some/page',
    name: 'Sleep'
  }
]
const nav = [
  {
    id: 1,
    name: 'main',
    items: navMain
  },
  {
    id: 2,
    name: 'your music',
    items: navMusic
  },
  {
    id: 3,
    name: 'playlists',
    items: navPlaylists
  }
]

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

  // data fetch example
  const url = `https://raw.githubusercontent.com/oksanalyakhova/spoty.t/main/src/local.json`;
  const {data} = useFetch<ISiteTypes>(url);

  return (
    <AppContext.Provider value={globalSettings}>
      <div className="app">
        <Topbar
          ref={topRef}
          local={local}/>
        <Main
          topHeight={topHeight}
          trackHeight={trackHeight}
          nav={nav}
          local={local}
          data={data}/>
        <CurrentTrack
          ref={trackRef}
          local={local}/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
