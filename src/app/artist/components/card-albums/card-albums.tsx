import React, {FunctionComponent, useContext} from 'react';
import AppContext from '../../../../AppContext';
import Tag from '../../../../ui/tag/tag';
import {
  IoCheckmarkSharp,
  IoAddSharp,
  IoTrendingDownSharp,
  IoTrendingUpSharp
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

  return (
    <div className={`${className ? className + " track" : "track"}`}>
      <div className="track__number">
        {index + 1}
      </div>
      <div className="track__added">
        {!track.isAdded
          ? <IoAddSharp/>
          : <IoCheckmarkSharp/>
        }
      </div>
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

