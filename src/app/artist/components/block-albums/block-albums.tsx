import React, {FunctionComponent, useContext} from 'react';
import AppContext from '../../../../AppContext';
import CardTrack from '../card-track/card-track';
import {IoStopwatchOutline, IoThumbsUpSharp} from 'react-icons/io5';
import ButtonTheme from '../../../../ui/button-theme/button-theme';
import ButtonMore from '../../../../ui/button-more/button-more';

import './block-albums.sass';

interface CardSongsProps {
  id?: string | number;
  title?: string;
  featured?: string;
  featuredUrl?: string;
  added?: boolean;
  explicit?: string;
  length?: string;
  trend?: boolean;
}

interface BlockAlbumsHelpsProps {
  id?: string | number;
  src?: string;
  year?: string;
  name?: string;
}

interface BlockAlbumsProps {
  album: BlockAlbumsHelpsProps,
  tracks: Array<CardSongsProps>
}

const BlockAlbums: FunctionComponent<BlockAlbumsProps> = ({
  album,
  tracks,
}): JSX.Element => {
  const listTracks = tracks.map((track, index) =>
    <CardTrack
      className="track_albums"
      key={track.id}
      track={track}
      index={index}
    />
  );

  const myContext = useContext(AppContext);
  const breakpoint = myContext.windowWidth > 1200;

  return (
    <div className="album">
      <div className="album__info">
        <div className="album__info__art">
          <img src={album.src} alt={album.name}/>
        </div>
        <div className="album__info__meta">
          <div className="album__year">
            {album.year}
          </div>
          <div className="album__name">
            {album.name}
          </div>
          <div className="album__actions">
            <ButtonTheme
              text="save"
              isDisabled={false}
              onClick={() => {
                console.log("theme was clicked")
              }}
            />
            <ButtonMore onClick={() => {
              console.log("more was clicked")
            }}
            />
          </div>
        </div>
      </div>
      <div className="album__tracks">
        <div className="tracks__heading">
          <div className="tracks__heading__number">
            #
          </div>
          <div className="tracks__heading__title">
            Song
          </div>
          <div className="tracks__heading__length">
            <IoStopwatchOutline/>
          </div>
          {breakpoint &&
            <div className="tracks__heading__popularity">
              <IoThumbsUpSharp/>
            </div>
          }
        </div>
        <div className="tracks tracks_albums">
          {listTracks}
        </div>
      </div>
    </div>
  )
}

export default BlockAlbums;
