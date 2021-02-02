import React, {FunctionComponent} from 'react';
import LatestRelease from '../latest-release/latest-release';
import BlockPopularSongs from '../block-popular-songs/block-popular-songs';
import ButtonTheme from '../../../../ui/button-theme/button-theme';
import BlockRelatedArtists from '../block-related-artists/block-related-artists';
import BlockAlbums from '../block-albums/block-albums';

import './tab-overview.sass';

interface ReleaseProps {
  id: string | number;
  src: string;
  url: string;
  year: string;
  name: string;
}

interface AlbumsProps {
  id: string | number;
  src: string;
  year: string;
  name: string;
}

interface PopularSongProps {
  id: string | number;
  src: string;
  title: string;
  added: boolean;
  explicit: string;
  plays: string;
}

interface RelatedArtistProps {
  id: string | number;
  url: string;
  src: string;
  name: string;
}

interface AlbumSongProps {
  id: string | number;
  title: string;
  featured?: string;
  featuredUrl?: string;
  added: boolean;
  explicit: string;
  length: string;
  trend: boolean;
}

interface OverviewProps {
  release: ReleaseProps;
  album: AlbumsProps;
  tracks: Array<PopularSongProps>;
  artists: Array<RelatedArtistProps>;
  isCardArtistsSmall: boolean;
  forArtistsBlock: boolean;
  albumTracks: Array<AlbumSongProps>;
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
  return (
    <div className="tab-overview">
      <div className="tab-overview__artist">
        <div className="section-title">
          Latest Release
        </div>
        <LatestRelease
          release={release}
        />
        <div className="section-title">
          Popular
        </div>
        <BlockPopularSongs
          tracks={tracks}
        />
        <ButtonTheme
          text="show 5 more"
          isDisabled={false}
          onClick={() => {
            console.log("theme was clicked")
          }}
        />
      </div>
      <div className="tab-overview__related">
        <div className="section-title">
          Related Artists
        </div>
        <BlockRelatedArtists
          artists={artists}
          isCardSmall={isCardArtistsSmall}
          forBlock={forArtistsBlock}
          total={7}
        />
      </div>
      <div className="tab-overview__albums">
        <div className="tab-overview__albums__head">
          <div className="section-title">
            Albums
          </div>
          <BlockAlbums
            album={album}
            tracks={albumTracks}
          />
        </div>
      </div>
    </div>
  )
};

export default TabOverview;
