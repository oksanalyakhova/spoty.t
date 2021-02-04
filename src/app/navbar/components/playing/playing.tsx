import React, {FunctionComponent} from 'react';
import {IoAddSharp, IoCheckmarkSharp} from 'react-icons/io5';
import classNames from 'classnames';
import {ISiteTypes} from "../../../../types/siteTypes";

import './playing.sass';

interface PlayingProps {
  className?: string;
  local: ISiteTypes;
}

const Playing: FunctionComponent<PlayingProps> = ({
  className,
  local
}): JSX.Element => {
  const img = local.currentTrack.meta.img;
  const trackTitle = local.currentTrack.meta.title?.name;
  const trackUrl = local.currentTrack.meta.title?.url;
  const artistTitle = local.currentTrack.meta.artist?.name;
  const artistUrl = local.currentTrack.meta.artist?.url;
  const added = local.currentTrack.meta.added;

  const classes = classNames(className, 'playing');

  return (
    <div className={classes}>
      <div className="playing__art">
        <img src={img} alt={trackTitle}/>
      </div>
      <div className="playing__song">
        <a href={trackUrl} className="playing__title">
          {trackTitle}
        </a>
        <a href={artistUrl} className="playing__artist">
          {artistTitle}
        </a>
      </div>
      <div className="playing__add">
        {!added
          ? <button type="button" className="button button-add-song"><IoAddSharp/></button>
          : <IoCheckmarkSharp/>
        }
      </div>
    </div>
  )
};

export default Playing;
