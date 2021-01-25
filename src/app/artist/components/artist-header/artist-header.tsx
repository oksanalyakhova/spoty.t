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
  const [isActive, setActive] = useState(false)
  const handleActive = () => {
    setActive(!isActive);
  };

  let verifiedIcon;
  if (isVerified === true) {
    verifiedIcon = <div className="icon-verified"><IoCheckmarkSharp/></div>
  }

  return (
    <div className="artist__header">
      <div className="artist__bg">
        <img src={artistBg} alt={artistName}/>
      </div>
      <div className="artist__info info">
        <div className="info__img">
          <img src={artistImg} alt={artistName}/>
          {verifiedIcon}
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
              isActive={isActive}
              onClick={handleActive}
            />
            <ButtonTheme
              text="follow"
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
