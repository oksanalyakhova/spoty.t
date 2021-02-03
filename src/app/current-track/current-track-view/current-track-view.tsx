import React, {forwardRef} from 'react';
import Player from '../components/player/player';
import local from '../../../local.json';

import './current-track-view.sass';

const CurrentTrack = forwardRef<HTMLDivElement>((props, ref) => {
  const src = local.currentTrack.src;

  return (
    <div className="current-track" ref={ref}>
      <Player
        className="current-track__player"
        src={src}/>
    </div>
  );
});

export default CurrentTrack;
