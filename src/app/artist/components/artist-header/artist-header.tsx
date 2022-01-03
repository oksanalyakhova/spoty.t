import React, { FunctionComponent, useState } from 'react';
import ButtonTheme from '../../../../ui/button-theme/button-theme';
import ButtonPlay from '../../../../ui/button-play/button-play';
import ButtonMore from '../../../../ui/button-more/button-more';
import { IoCheckmarkSharp } from 'react-icons/all';
import { IMainArtist } from '../../../../types/siteTypes';

import './artist-header.sass';

const ArtistHeader: FunctionComponent<IMainArtist> = ({
  verified,
  bg,
  img,
  type,
  name,
  listeners,
}): JSX.Element => {
  const [isPlayActive, setPlayActive] = useState(false);
  const handlePlayActive = () => {
    setPlayActive(!isPlayActive);
  };

  const [isMoreActive, setMoreActive] = useState(false);
  const handleMoreActive = () => {
    setMoreActive(!isMoreActive);
  };

  return (
    <div className="artist__header">
      <div className="artist__bg">
        <img src={bg} alt={name} />
      </div>
      <div className="artist__info info">
        <div className="info__img">
          <img src={img} alt={name} />
          {verified && (
            <div className="icon-verified">
              <IoCheckmarkSharp />
            </div>
          )}
        </div>
        <div className="info__meta">
          <div className="info__type">{type}</div>
          <div className="info__name">{name}</div>
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
                console.log('theme was clicked');
              }}
            />
            <ButtonMore isActive={isMoreActive} onClick={handleMoreActive} />
          </div>
        </div>
      </div>
      <div className="artist__listeners listeners">
        <div className="listeners__count">{listeners}</div>
        <div className="listeners__label">Monthly Listeners</div>
      </div>
    </div>
  );
};

export default ArtistHeader;
