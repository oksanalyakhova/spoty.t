import React, {FunctionComponent, useContext} from 'react';
import AppContext from '../../../AppContext';
import Accordions from '../components/accordions/accordions';
import AddPlaylist from '../components/add-playlist/add-playlist';
import Playing from '../components/playing/playing';
import local from '../../../local.json';

import './navbar-view.sass';

interface NavbarProps {
  topHeight: number;
  trackHeight: number;
}

const Navbar: FunctionComponent<NavbarProps> = ({
  topHeight,
  trackHeight
}): JSX.Element => {
  const playing = local.currentTrack.meta;

  const myContext = useContext(AppContext);
  const breakpoint = 768;
  const condition = myContext.windowWidth > breakpoint;

  return (
    <div className="navbar">
      <Accordions className="navbar__accordions" topHeight={topHeight} trackHeight={trackHeight}/>
      {
        condition
        ? <AddPlaylist className="navbar__add-playlist"/>
        : null
      }
      <Playing className="navbar__playing" playing={playing}/>
    </div>
  )
};

export default Navbar;
