import React, {FunctionComponent, useContext, useState} from 'react';
import AppContext from '../../../../AppContext';
import Tag from '../../../../ui/tag/tag';
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
  isAdded: boolean;
  explicit: string;
  length: string;
  isTrend: boolean;
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

  const [isAdded, setAdded] = useState(track.isAdded)
  const handleAdded = () => {
    setAdded(!isAdded);
  };

  return (
    <div className={`${className ? className + " track" : "track"}`}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}>
      <div className="track__number">
        {!isHover
          ? index + 1
          : <button className="track__play button-play-one"><IoPlaySharp/></button>
        }
      </div>
      <button className={`${isAdded ?
        'track__added track__added_active button-add-track' :
        'track__added button-add-track'}`}
              onClick={handleAdded}>
        {!isAdded
          ? <IoAddSharp/>
          : <IoCheckmarkSharp/>
        }
      </button>
      <div className={`${track.featured ? "track__title featured" : "track__title"}`}>
        <span className="title">{track.title}</span>
        {track.featured
          ? <span className="feature">{track.featured}</span>
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
          {!track.isTrend
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

