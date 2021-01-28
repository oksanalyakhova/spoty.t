import React, {FunctionComponent} from 'react';
import {IoPlaySharp, IoPauseSharp} from 'react-icons/io5';
import classNames from 'classnames';

import './button-play.sass';

interface ButtonPlayProps {
  text?: string;
  isActive?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonPlay: FunctionComponent<ButtonPlayProps> = ({
  text,
  isActive,
  onClick,
}): JSX.Element => {
  const classes = classNames('button button-play', {
    'is-active': isActive,
  })

  return (
    <button
      type="button"
      className={classes}
      onClick={(e) => onClick(e)}>
      <span>
      {isActive === false
        ? <IoPlaySharp/>
        : <IoPauseSharp/>
      }
        {text}
      </span>
    </button>
  )
}

export default ButtonPlay;
