import React, {FunctionComponent} from 'react';
import {IoAddSharp, IoCheckmarkSharp} from 'react-icons/io5';

import './playing.sass';

interface PlayingNamesProps {
  name?: string;
  url?: string;
}

interface PlayingHelpsProps {
  className?: string;
  id?: string | number;
  src?: string;
  title?: PlayingNamesProps;
  artist?: PlayingNamesProps;
  isAdded?: boolean;
}

interface PlayingProps {
  className?: string;
  playing: PlayingHelpsProps;
}

const Playing: FunctionComponent<PlayingProps> = ({
  className,
  playing
}): JSX.Element => {
  return (
    <div className={className ? `${className} playing` : `playing`}>
      <div className="playing__art">
        <img src={playing.src} alt={playing.title?.name}/>
      </div>
      <div className="playing__song">
        <a href={playing.title?.url} className="playing__title">
          {playing.title?.name}
        </a>
        <a href={playing.artist?.url} className="playing__artist">
          {playing.artist?.name}
        </a>
      </div>
      <div className="playing__add">
        {!playing.isAdded
          ? <button type="button" className="button button-add-song"><IoAddSharp/></button>
          : <IoCheckmarkSharp/>
        }
      </div>
    </div>
  )
};

export default Playing;
