import React, { FunctionComponent, useRef, useState } from 'react';
import LatestRelease from '../latest-release/latest-release';
import BlockPopularSongs from '../block-popular-songs/block-popular-songs';
import ButtonTheme from '../../../../ui/button-theme/button-theme';
import BlockRelatedArtists from '../block-related-artists/block-related-artists';
import BlockAlbums from '../block-albums/block-albums';
import OverviewBox from '../overview-box/overview-box';
import {
  ITrack,
  IArtist,
  IOneRelease,
  IOneAlbum,
  IAlbumTrack,
} from '../../../../types/siteTypes';

import './tab-overview.sass';

interface OverviewProps {
  release: IOneRelease;
  album: IOneAlbum;
  tracks: Array<ITrack>;
  artists: Array<IArtist>;
  isCardArtistsSmall: boolean;
  forArtistsBlock: boolean;
  albumTracks: Array<IAlbumTrack>;
}

const TabOverview: FunctionComponent<OverviewProps> = ({
  release,
  album,
  tracks,
  artists,
  isCardArtistsSmall,
  forArtistsBlock,
  albumTracks,
}): JSX.Element => {
  const artistRef = useRef<HTMLDivElement>(null);

  const [showMore, setShowMore] = useState(true);
  const [total, setTotal] = useState(5);
  const handleMore = () => {
    setTotal(total + 5);
    if (total + 5 >= tracks.length) setShowMore(false);
  };
  const handleLess = () => {
    setTotal(5);
    scroll(artistRef);
    setShowMore(true);
  };

  const scroll = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="tab-overview">
      <div className="tab-overview__artist" ref={artistRef}>
        <OverviewBox
          title="Latest Release"
          children={<LatestRelease release={release} />}
        />
        <OverviewBox
          title="Popular"
          children={<BlockPopularSongs tracks={tracks} total={total} />}
        />
        {showMore ? (
          <ButtonTheme
            text="show 5 more"
            isDisabled={false}
            onClick={handleMore}
          />
        ) : (
          <ButtonTheme
            text="show less"
            isDisabled={false}
            onClick={handleLess}
          />
        )}
      </div>
      <div className="tab-overview__related">
        <OverviewBox
          title="Related Artists"
          children={
            <BlockRelatedArtists
              artists={artists}
              isCardSmall={isCardArtistsSmall}
              forBlock={forArtistsBlock}
              total={7}
            />
          }
        />
      </div>
      <div className="tab-overview__albums">
        <OverviewBox
          title="Albums"
          children={<BlockAlbums album={album} tracks={albumTracks} />}
        />
      </div>
    </div>
  );
};

export default TabOverview;
