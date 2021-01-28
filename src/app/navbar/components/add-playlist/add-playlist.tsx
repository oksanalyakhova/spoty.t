import React, {FunctionComponent} from 'react';
import {IoAddCircleOutline} from 'react-icons/all';
import classNames from 'classnames';

import './add-playlist.sass';

interface AddPlaylistProps {
  className?: string;
}

const AddPlaylist: FunctionComponent<AddPlaylistProps> = ({
  className
}): JSX.Element => {
  const classes = classNames(className, 'add-playlist')

  return (
    <div className={classes}>
      <a href="some/page" className="add-playlist__link">
        <span className="icon">
          <IoAddCircleOutline/>
        </span>
        <span className="name">New Playlist</span>
      </a>
    </div>
  )
};

export default AddPlaylist;
