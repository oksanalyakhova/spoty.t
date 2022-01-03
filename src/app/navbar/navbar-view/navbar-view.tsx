import React, { FunctionComponent, useContext } from 'react';
import AppContext from '../../../AppContext';
import Accordions from '../components/accordions/accordions';
import AddPlaylist from '../components/add-playlist/add-playlist';
import Playing from '../components/playing/playing';
import { ISiteTypes } from '../../../types/siteTypes';

import './navbar-view.sass';

interface NavProps {
  id: string | number;
  url: string;
  icon?: JSX.Element;
  name: string;
}

interface NavbarHelpsProps {
  id: number | string;
  name: string;
  items: Array<NavProps>;
}

interface NavbarProps {
  topHeight: number;
  trackHeight: number;
  nav: Array<NavbarHelpsProps>;
  local: ISiteTypes;
}

const Navbar: FunctionComponent<NavbarProps> = ({
  topHeight,
  trackHeight,
  nav,
  local,
}): JSX.Element => {
  const myContext = useContext(AppContext);
  const breakpoint = myContext.windowWidth > 768;

  return (
    <div className="navbar">
      <Accordions
        className="navbar__accordions"
        topHeight={topHeight}
        trackHeight={trackHeight}
        nav={nav}
      />
      {breakpoint && <AddPlaylist className="navbar__add-playlist" />}
      <Playing className="navbar__playing" local={local} />
    </div>
  );
};

export default Navbar;
