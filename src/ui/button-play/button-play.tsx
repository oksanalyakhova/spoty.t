import React, {FunctionComponent} from 'react';
import {IoPlaySharp, IoPauseSharp} from 'react-icons/io5';

import './button-play.sass';

interface ButtonPlayProps {
  text?: string;
  isActive?: boolean;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonPlay: FunctionComponent<ButtonPlayProps> = ({
  text,
  isActive,
  className,
  onClick,
}): JSX.Element => {
  return (
    <button
      type="button"
      className={`${className ? className + " button button-play" : "button button-play"}
                ${isActive ? "is-active" : ""}`}
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
