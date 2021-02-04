import React, {forwardRef} from 'react';
import Player from '../components/player/player';
import {ISiteTypes} from '../../../types/siteTypes';

import './current-track-view.sass';

interface CurrentTrackProps {
  local: ISiteTypes;
}

const CurrentTrack = forwardRef<HTMLDivElement, CurrentTrackProps>(
  (props, ref
) => {
  const src = props.local.currentTrack.src;

  return (
    <div className="current-track" ref={ref}>
      <Player
        className="current-track__player"
        src={src}/>
    </div>
  );
});

export default CurrentTrack;
