import React, {FunctionComponent, useContext, useState} from 'react';
import AppContext from '../../../../AppContext';
import Tag from '../../../../ui/tag/tag';
import {IoCheckmarkSharp, IoAddSharp, IoPlaySharp} from 'react-icons/io5';
import classNames from 'classnames';

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

  const [isHover, setHover] = useState(false);

  const [isAdded, setAdded] = useState(track.isAdded)
  const handleAdded = () => {
    setAdded(!isAdded);
  };

  const classes = classNames(className, 'track');
  const classesCardAdded = classNames('track__added', {
    'is-active': isAdded
  })

  return (
    <div className={classes}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}>
      <div className="track__art">
        <img src={track.src} alt={track.title}/>
      </div>
      <div className="track__number">
        {!isHover
          ? index + 1
          : <button type="button" className="track__play button-play-one"><IoPlaySharp/></button>
        }
      </div>
      <button type="button" className={classesCardAdded}
              onClick={handleAdded}>
        {!isAdded
          ? <IoAddSharp/>
          : <IoCheckmarkSharp/>
        }
      </button>
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

