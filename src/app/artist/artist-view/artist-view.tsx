import React, {FunctionComponent, useContext} from 'react';
import AppContext from '../../../AppContext';
import ArtistHeader from '../components/artist-header/artist-header';
import TabOverview from '../components/tab-overview/tab-overview';
import TabRelatedArtists from '../components/tab-related-artists/tab-related-artists';

import {Tabs, TabList, Tab, TabPanels, TabPanel} from '@reach/tabs';

import artistBg from '@images/g-eazy.png';
import artistImg from '@images/artist.jpg';
import usersImg from '@images/users.png';
import releaseCover from '@images/whenDarkOut.jpg';
import album from '@images/whenDarkOut.jpg';
import artist1 from '@images/hoodie.jpg';
import artist2 from '@images/mikestud_large.jpg';
import artist3 from '@images/drake_large.jpg';
import artist4 from '@images/jcole_large.jpg';
import artist5 from '@images/bigSean_large.jpg';
import artist6 from '@images/wiz.jpg';
import artist7 from '@images/yonas.jpg';
import artist8 from '@images/childish.jpg';

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
  const isVerified = true;
  const friends = [
    {
      id: 1,
      url: 'some/page',
      src: `${usersImg}`,
      name: 'Some Name 1'
    },
    {
      id: 2,
      url: 'some/page',
      src: `${usersImg}`,
      name: 'Some Name 2'
    },
    {
      id: 3,
      url: 'some/page',
      src: `${usersImg}`,
      name: 'Some Name 3'
    }
  ]
  const tracks = [
    {
      id: 1,
      src: `${album}`,
      title: 'Me, Myself & I',
      isAdded: true,
      explicit: 'explicit',
      plays: '147,544,165'
    },
    {
      id: 2,
      src: `${artistImg}`,
      title: 'I Mean It',
      isAdded: false,
      explicit: 'explicit',
      plays: '74,568,782'
    },
    {
      id: 3,
      src: `${album}`,
      title: 'Calm Down',
      isAdded: false,
      explicit: 'explicit',
      plays: '13,737,506'
    },
    {
      id: 4,
      src: `${artistImg}`,
      title: 'Some Kind Of Drug',
      isAdded: true,
      explicit: 'explicit',
      plays: '12,234,881'
    },
    {
      id: 5,
      src: `${album}`,
      title: 'Let\'s Get Lost',
      isAdded: true,
      explicit: 'explicit',
      plays: '40,882,954'
    }
  ]
  const artists = [
    {
      id: 1,
      url: 'some/page',
      src: `${artist1}`,
      name: 'Hoodie Allen',
    },
    {
      id: 2,
      url: 'some/page',
      src: `${artist2}`,
      name: 'Hoodie Allen',
    },
    {
      id: 3,
      url: 'some/page',
      src: `${artist3}`,
      name: 'Hoodie Allen',
    },
    {
      id: 4,
      url: 'some/page',
      src: `${artist4}`,
      name: 'Hoodie Allen',
    },
    {
      id: 5,
      url: 'some/page',
      src: `${artist5}`,
      name: 'Hoodie Allen',
    },
    {
      id: 6,
      url: 'some/page',
      src: `${artist6}`,
      name: 'Hoodie Allen',
    },
    {
      id: 7,
      url: 'some/page',
      src: `${artist7}`,
      name: 'Hoodie Allen',
    },
    {
      id: 8,
      url: 'some/page',
      src: `${artist8}`,
      name: 'Hoodie Allen',
    }
  ]
  const oneRelease = {
    id: 1,
    src: `${releaseCover}`,
    url: 'some/page',
    year: '4 December 2015',
    name: 'Drifting (Track Commentary)',
  }
  const oneAlbum = {
    id: 1,
    src: `${releaseCover}`,
    year: '2015',
    name: 'When It\'s Dark Out',
  }
  const albumTracks = [
    {
      id: 1,
      title: 'Intro',
      isAdded: true,
      explicit: 'explicit',
      length: '1:11',
      isTrend: true
    },
    {
      id: 2,
      title: 'Random',
      isAdded: true,
      explicit: 'explicit',
      length: '3:00',
      isTrend: false
    },
    {
      id: 3,
      title: 'Me, Myself & I',
      featured: 'Bebe Rexha',
      featuredUrl: 'some/page',
      isAdded: true,
      explicit: 'explicit',
      length: '4:11',
      isTrend: true
    },
    {
      id: 4,
      title: 'One Of Them',
      featured: 'Big Sean',
      featuredUrl: 'some/page',
      isAdded: true,
      explicit: 'explicit',
      length: '3:20',
      isTrend: true
    },
    {
      id: 5,
      title: 'Drifting',
      featured: 'Chris Brown, Tory Lanez',
      featuredUrl: 'some/page',
      isAdded: false,
      explicit: 'explicit',
      length: '4:33',
      isTrend: true
    },
    {
      id: 6,
      title: 'Of All Things',
      featured: 'Too $hort',
      featuredUrl: 'some/page',
      isAdded: true,
      explicit: 'explicit',
      length: '3:34',
      isTrend: true
    },
    {
      id: 7,
      title: 'Order More',
      featured: 'Starrah',
      featuredUrl: 'some/page',
      isAdded: false,
      explicit: 'explicit',
      length: '3:29',
      isTrend: false
    },
    {
      id: 8,
      title: 'Calm Down',
      isAdded: true,
      explicit: 'explicit',
      length: '2:07',
      isTrend: true
    },
    {
      id: 9,
      title: 'Don\'t Let Me Go',
      featured: 'Grace',
      featuredUrl: 'some/page',
      isAdded: true,
      explicit: 'explicit',
      length: '3:11',
      isTrend: true
    },
    {
      id: 10,
      title: 'You Got Me',
      isAdded: true,
      explicit: 'explicit',
      length: '3:28',
      isTrend: true
    },
    {
      id: 11,
      title: 'What If',
      featured: 'Gizzle',
      featuredUrl: 'some/page',
      isAdded: false,
      explicit: 'explicit',
      length: '4:13',
      isTrend: true
    },
    {
      id: 12,
      title: 'Sad Boy',
      isAdded: true,
      explicit: 'explicit',
      length: '3:23',
      isTrend: false
    },
    {
      id: 13,
      title: 'Some Kind Of Drug',
      featured: 'Marc E. Bassy',
      featuredUrl: 'some/page',
      isAdded: true,
      explicit: 'explicit',
      length: '3:42',
      isTrend: false
    },
    {
      id: 14,
      title: 'Think About You',
      featured: 'Quin',
      featuredUrl: 'some/page',
      isAdded: true,
      explicit: 'explicit',
      length: '2:59',
      isTrend: true
    },
    {
      id: 15,
      title: 'Everything Will Be OK',
      featured: 'Kehlani',
      featuredUrl: 'some/page',
      isAdded: true,
      explicit: 'explicit',
      length: '5:11',
      isTrend: true
    },
    {
      id: 16,
      title: 'For This',
      featured: 'Iamnobodi',
      featuredUrl: 'some/page',
      isAdded: true,
      explicit: 'explicit',
      length: '4:11',
      isTrend: true
    },
    {
      id: 17,
      title: 'Nothing to Me',
      featured: 'Keyshia Cole, E-40',
      featuredUrl: 'some/page',
      isAdded: true,
      explicit: 'explicit',
      length: '5:30',
      isTrend: true
    }
  ]

  const myContext = useContext(AppContext);
  const breakpoint = 768;
  const condition = myContext.windowWidth > breakpoint && myContext.windowWidth > myContext.windowHeight;
  let artistHeight;
  if (condition) artistHeight = myContext.windowHeight - topHeight - trackHeight;

  const navFriends = friends.map((friend) =>
    <a key={friend.id} href={friend.url} className="friends__item">
      <img src={friend.src} alt={friend.name}/>
    </a>
  );

  return (
    <div className={`${isVerified ? "artist is-verified" : "artist"}`}
         style={{height: artistHeight}}>
      <div className="artist__wrapper">
        <ArtistHeader
          isVerified={isVerified}
          artistBg={artistBg}
          artistImg={artistImg}
          artistType="Artist"
          artistName="G-Eazy"
          artistListenersCount="15,662,810"
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
              <div className="navigation__friends friends">
                {navFriends}
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
