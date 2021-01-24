import React, {FunctionComponent} from 'react';
import {IoEllipsisHorizontal} from 'react-icons/io5';

import './button-more.sass';

interface ButtonMoreProps {
  isActive?: boolean,
  className?: string,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonMore: FunctionComponent<ButtonMoreProps> = ({
                                                          isActive,
                                                          className,
                                                          onClick,
                                                        }): JSX.Element => {
  return (
    <button
      type='button'
      className={`${className ? className + " button button-more" : "button button-more"}
        ${isActive ? "is-active" : ""}`}
      onClick={(e) => onClick(e)}>
      <IoEllipsisHorizontal/>
    </button>
  )
}

export default ButtonMore;
