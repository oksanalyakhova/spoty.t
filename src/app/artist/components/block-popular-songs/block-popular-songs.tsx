import React, {FunctionComponent} from 'react';
import CardPopularSongs from '../card-popular-songs/card-popular-songs';

import './block-popular-songs.sass';

interface PopularSongProps {
  id: string | number;
  src: string;
  title: string;
  isAdded: boolean;
  explicit: string;
  plays: string;
}

interface BlockPopularSongsProps {
  tracks: Array<PopularSongProps>
}

const BlockPopularSongs: FunctionComponent<BlockPopularSongsProps> = ({
                                                                        tracks,
                                                                      }): JSX.Element => {
  const listTracks = tracks.map((track, index) =>
    <CardPopularSongs
      className="track_popular-songs"
      key={track.id}
      track={track}
      index={index}
    />
  );
  return (
    <div className="tracks tracks_popular-songs">
      {listTracks}
    </div>
  )
}

export default BlockPopularSongs;
