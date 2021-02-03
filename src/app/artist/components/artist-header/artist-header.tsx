import React, {FunctionComponent, useState} from 'react';
import ButtonTheme from '../../../../ui/button-theme/button-theme';
import ButtonPlay from '../../../../ui/button-play/button-play';
import ButtonMore from '../../../../ui/button-more/button-more';
import {IoCheckmarkSharp} from 'react-icons/all';

import './artist-header.sass';

interface ArtistHeaderProps {
  isVerified?: boolean;
  artistBg?: string;
  artistImg?: string;
  artistType?: string;
  artistName?: string;
  artistListenersCount?: string;
}

const ArtistHeader: FunctionComponent<ArtistHeaderProps> = ({
  isVerified,
  artistBg,
  artistImg,
  artistType,
  artistName,
  artistListenersCount,
}): JSX.Element => {
  const [isPlayActive, setPlayActive] = useState(false)
  const handlePlayActive = () => {
    setPlayActive(!isPlayActive);
  };

  const [isMoreActive, setMoreActive] = useState(false)
  const handleMoreActive = () => {
    setMoreActive(!isMoreActive);
  };

  return (
    <div className="artist__header">
      <div className="artist__bg">
        <img src={artistBg} alt={artistName}/>
      </div>
      <div className="artist__info info">
        <div className="info__img">
          <img src={artistImg} alt={artistName}/>
          {isVerified && <div className="icon-verified"><IoCheckmarkSharp/></div>}
        </div>
        <div className="info__meta">
          <div className="info__type">
            {artistType}
          </div>
          <div className="info__name">
            {artistName}
          </div>
          <div className="info__actions">
            <ButtonPlay
              text="play"
              isActive={isPlayActive}
              onClick={handlePlayActive}
            />
            <ButtonTheme
              text="follow"
              isDisabled={false}
              onClick={() => {
                console.log("theme was clicked")
              }}
            />
            <ButtonMore
              isActive={isMoreActive}
              onClick={handleMoreActive}
            />
          </div>
        </div>
      </div>
      <div className="artist__listeners listeners">
        <div className="listeners__count">
          {artistListenersCount}
        </div>
        <div className="listeners__label">
          Monthly Listeners
        </div>
      </div>
    </div>
  )
};

export default ArtistHeader;
