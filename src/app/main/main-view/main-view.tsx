import React, {FunctionComponent} from 'react';
import Navbar from '../../navbar/navbar-view/navbar-view';
import Artist from '../../artist/artist-view/artist-view';
import Sidebar from '../../sidebar/sidebar-view/sidebar-view';
import {ISiteTypes} from '../../../types/siteTypes';

import './main-view.sass';

interface NavProps {
  id: string | number;
  url: string;
  icon?: JSX.Element;
  name: string;
}

interface MainHelpsProps {
  id: number | string,
  name: string,
  items: Array<NavProps>
}

interface MainProps {
  topHeight: number;
  trackHeight: number;
  nav: Array<MainHelpsProps>;
  local: ISiteTypes;
  data?: ISiteTypes;
}

const Main: FunctionComponent<MainProps> = ({
  topHeight,
  trackHeight,
  nav,
  local,
  data,
}): JSX.Element => {
  return (
    <div className="main">
      <Navbar
        topHeight={topHeight}
        trackHeight={trackHeight}
        nav={nav}
        local={local}/>
      <Artist
        topHeight={topHeight}
        trackHeight={trackHeight}
        local={local}
        data={data}/>
      <Sidebar
        topHeight={topHeight}
        trackHeight={trackHeight}
        local={local}/>
    </div>
  );
}

export default Main;
