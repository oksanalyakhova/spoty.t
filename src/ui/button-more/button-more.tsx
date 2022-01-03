import React, { FunctionComponent } from 'react';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import classNames from 'classnames';

import './button-more.sass';

interface ButtonMoreProps {
  isActive?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonMore: FunctionComponent<ButtonMoreProps> = ({
  isActive,
  onClick,
}): JSX.Element => {
  const classes = classNames('button button-more', {
    'is-active': isActive,
  });

  return (
    <button type="button" className={classes} onClick={(e) => onClick(e)}>
      <IoEllipsisHorizontal />
    </button>
  );
};

export default ButtonMore;
