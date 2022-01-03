import React, { FunctionComponent } from 'react';
import CardTrack from '../card-track/card-track';
import { ITrack } from '../../../../types/siteTypes';

import './block-popular-songs.sass';

interface BlockPopularSongsProps {
  tracks: Array<ITrack>;
  total?: number;
}

const BlockPopularSongs: FunctionComponent<BlockPopularSongsProps> = ({
  tracks,
  total,
}): JSX.Element => {
  const listTracks = tracks.map((track, index) => (
    <CardTrack
      className="track_popular-songs"
      key={track.id}
      track={track}
      index={index}
    />
  ));

  return (
    <div className="tracks tracks_popular-songs">
      {listTracks.splice(0, total)}
    </div>
  );
};

export default BlockPopularSongs;
