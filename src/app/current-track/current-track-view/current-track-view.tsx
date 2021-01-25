import React, {forwardRef} from 'react';
import Player from '../components/player/player';

import './current-track-view.sass';

const CurrentTrack = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="current-track" ref={ref}>
      <Player className="current-track__player"/>
    </div>
  );
});

export default CurrentTrack;
