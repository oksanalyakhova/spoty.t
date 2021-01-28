import React, {FunctionComponent} from 'react';
import Navbar from '../../navbar/navbar-view/navbar-view';
import Artist from '../../artist/artist-view/artist-view';
import Sidebar from '../../sidebar/sidebar-view/sidebar-view';

import './main-view.sass';

interface MainProps {
  topHeight: number;
  trackHeight: number;
}

const Main: FunctionComponent<MainProps> = ({
  topHeight,
  trackHeight
}): JSX.Element => {
  return (
    <div className="main">
      <Navbar topHeight={topHeight} trackHeight={trackHeight}/>
      <Artist topHeight={topHeight} trackHeight={trackHeight}/>
      <Sidebar topHeight={topHeight} trackHeight={trackHeight}/>
    </div>
  );
}

export default Main;
