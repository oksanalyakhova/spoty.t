import React, {FunctionComponent, useContext} from 'react';
import {Tabs, TabList, Tab, TabPanels, TabPanel} from '@reach/tabs';
import classNames from 'classnames';
import AppContext from '../../../AppContext';
import useFetch from '../../../useFetch';
import ArtistHeader from '../components/artist-header/artist-header';
import TabOverview from '../components/tab-overview/tab-overview';
import TabRelatedArtists from '../components/tab-related-artists/tab-related-artists';
import Friends from '../components/friends/friends';
import {ISiteTypes} from '../../../types/siteTypes';
import local from '../../../db.json';

import '@reach/tabs/styles.css';
import './artist-view.sass';

interface ArtistProps {
  topHeight: number;
  trackHeight: number;
}

const Artist: FunctionComponent<ArtistProps> = ({
  topHeight,
  trackHeight
}): JSX.Element => {
  // fetch data example
  const url = `https://raw.githubusercontent.com/oksanalyakhova/spoty.t/main/src/db.json`;
  const {data} = useFetch<ISiteTypes>(url);
  const artist = data?.artist;

  // local json data
  const friends = local.friends;
  const tracks = local.tracks;
  const artists = local.artists;
  const oneRelease = local.oneRelease;
  const oneAlbum = local.oneAlbum;
  const albumTracks = local.albumTracks;

  const myContext = useContext(AppContext);
  const breakpoint = 768;
  const condition = myContext.windowWidth > breakpoint && myContext.windowWidth > myContext.windowHeight;
  let artistHeight;
  if (condition) artistHeight = myContext.windowHeight - topHeight - trackHeight;

  const classes = classNames('artist', {
    'is-verified': artist?.verified,
  })

  return (
    <div className={classes}
         style={{height: artistHeight}}>
      <div className="artist__wrapper">
        <ArtistHeader
          isVerified={artist?.verified}
          artistBg={artist?.bg}
          artistImg={artist?.img}
          artistType={artist?.type}
          artistName={artist?.name}
          artistListenersCount={artist?.listeners}
        />
        <div className="artist__content">
          <Tabs className="artist__tabs tabs">
            <div className="artist__navigation navigation">
              <TabList className="navigation__tabs-list tabs-list">
                <Tab className="tabs-list__item">
                  <div className="label">Overview</div>
                </Tab>
                <Tab className="tabs-list__item">
                  <div className="label">Related Artists</div>
                </Tab>
              </TabList>
              <div className="navigation__friends">
                <Friends friends={friends} />
              </div>
            </div>
            <TabPanels className="tabs__panels">
              <TabPanel>
                <TabOverview
                  tracks={tracks}
                  artists={artists}
                  isCardArtistsSmall={true}
                  forArtistsBlock={true}
                  release={oneRelease}
                  album={oneAlbum}
                  albumTracks={albumTracks}
                />
              </TabPanel>
              <TabPanel>
                <TabRelatedArtists
                  artists={artists}
                  isCardArtistsSmall={false}
                  forArtistsBlock={false}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  )
};

export default Artist;
