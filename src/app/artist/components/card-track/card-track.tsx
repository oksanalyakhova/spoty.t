import React, {FunctionComponent, useContext, useState} from 'react';
import AppContext from '../../../../AppContext';
import Tag from '../../../../ui/tag/tag';
import {IoCheckmarkSharp, IoAddSharp, IoPlaySharp, IoTrendingDownSharp, IoTrendingUpSharp} from 'react-icons/io5';
import classNames from 'classnames';

import './card-track.sass';

interface CardTrackHelpsProps {
  id?: string | number;
  src?: string;
  title?: string;
  added?: boolean;
  featured?: string;
  featuredUrl?: string;
  explicit?: string;
  plays?: string;
  length?: string;
  trend?: boolean;
}

interface CardTrackProps {
  className?: string;
  track: CardTrackHelpsProps;
  index: number;
}

const CardTrack: FunctionComponent<CardTrackProps> = ({
  className,
  track,
  index
}): JSX.Element => {
  const myContext = useContext(AppContext);
  const breakpoint = myContext.windowWidth > 1200;

  const [isHover, setHover] = useState(false);

  const [isAdded, setAdded] = useState(track.added)
  const handleAdded = () => {
    setAdded(!isAdded);
  };

  const classes = classNames(className, 'track');
  const classesCardAdded = classNames('track__added', {
    'is-active': isAdded
  })
  const classesCardTitle = classNames('track__title', {
    'featured': track.featured
  })

  return (
    <div className={classes}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}>
      {track.src &&
        <div className="track__art">
          <img src={track.src} alt={track.title}/>
        </div>
      }
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
      <div className={classesCardTitle}>
        <span className="title">{track.title}</span>
        {track.featured &&
          <a href={track.featuredUrl} className="feature">{track.featured}</a>
        }
      </div>
      {breakpoint &&
        <div className="track__explicit"><Tag text={track.explicit}/></div>
      }
      {track.length &&
        <div className="track__length">
          {track.length}
        </div>
      }
      {breakpoint && !track.src &&
        <div className="track__popularity">
          {!track.trend
            ? <IoTrendingDownSharp/>
            : <IoTrendingUpSharp/>
          }
        </div>
      }
      {track.src &&
        <div className="track__plays">
          {track.plays}
        </div>
      }
    </div>
  )
}

export default CardTrack;

