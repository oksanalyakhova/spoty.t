import React, {FunctionComponent, useContext, useState} from 'react';
import AppContext from '../../../../AppContext';
import Tag from '../../../../ui/tag/tag';
import classNames from 'classnames';
import {
  IoCheckmarkSharp,
  IoAddSharp,
  IoTrendingDownSharp,
  IoTrendingUpSharp, IoPlaySharp
} from 'react-icons/io5';

import './card-albums.sass';

interface CardAlbumsHelpsProps {
  id: string | number;
  title: string;
  featured?: string;
  featuredUrl?: string;
  added: boolean;
  explicit: string;
  length: string;
  trend: boolean;
}

interface CardAlbumsProps {
  className?: string;
  track: CardAlbumsHelpsProps;
  index: number;
}

const CardAlbums: FunctionComponent<CardAlbumsProps> = ({
  className,
  track,
  index
}): JSX.Element => {
  const myContext = useContext(AppContext);
  const breakpoint = 1200;
  const condition = myContext.windowWidth > breakpoint;

  const [isHover, setHover] = useState(false);

  const [isAdded, setAdded] = useState(track.added)
  const handleAdded = () => {
    setAdded(!isAdded);
  };

  const classesCard = classNames(className, 'track');
  const classesCardAdded = classNames('track__added button-add-track', {
    'track__added_active': isAdded
  })
  const classesCardTitle = classNames('track__title', {
    'featured': track.featured
  })

  return (
    <div className={classesCard}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}>
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
        {track.featured
          ? <a href={track.featuredUrl} className="feature">{track.featured}</a>
          : null
        }
      </div>
      {condition
        ? <div className="track__explicit"><Tag text={track.explicit}/></div>
        : null
      }
      <div className="track__length">
        {track.length}
      </div>
      {condition
        ? <div className="track__popularity">
          {!track.trend
            ? <IoTrendingDownSharp/>
            : <IoTrendingUpSharp/>
          }
        </div>
        : null
      }
    </div>
  )
}

export default CardAlbums;

