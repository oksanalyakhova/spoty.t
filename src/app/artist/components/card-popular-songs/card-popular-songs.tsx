import React, {FunctionComponent, useContext} from 'react';
import AppContext from '../../../../AppContext';
import Tag from '../../../../ui/tag/tag';
import {IoCheckmarkSharp, IoAddSharp} from 'react-icons/io5';

import './card-popular-songs.sass';

interface CardPopularSongsHelpsProps {
  id?: string | number;
  src?: string;
  title?: string;
  isAdded?: boolean;
  explicit?: string;
  plays?: string;
}

interface CardPopularSongsProps {
  className?: string;
  track: CardPopularSongsHelpsProps;
  index: number;
}

const CardPopularSongs: FunctionComponent<CardPopularSongsProps> = ({
  className,
  track,
  index
}): JSX.Element => {
  const myContext = useContext(AppContext);
  const breakpoint = 1200;
  const condition = myContext.windowWidth > breakpoint;

  return (
    <div className={`${className ? className + " track" : "track"}`}>
      <div className="track__art">
        <img src={track.src} alt={track.title}/>
      </div>
      <div className="track__number">
        {index + 1}
      </div>
      <div className="track__added">
        {!track.isAdded
          ? <IoAddSharp/>
          : <IoCheckmarkSharp/>
        }
      </div>
      <div className="track__title">
        {track.title}
      </div>
      {condition
        ? <div className="track__explicit"><Tag text={track.explicit}/></div>
        : null
      }
      <div className="track__plays">
        {track.plays}
      </div>
    </div>
  )
}

export default CardPopularSongs;

