import React, {FunctionComponent} from 'react';
import {IoChevronBackSharp, IoChevronForwardSharp} from 'react-icons/io5';
import classNames from 'classnames';

import './topbar-nav-item.sass';

interface TopbarNavItemProps {
  disabled?: boolean;
  direction: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const TopbarNavItem: FunctionComponent<TopbarNavItemProps> = ({
  disabled,
  direction,
  onClick,
}): JSX.Element => {
  const classes = classNames('page-flows__item', {
    [`page-flows__item_${direction}`]: direction,
    'is-disabled': disabled
  });

  return (
    <div className={classes}
         onClick={(e) => onClick(e)}>
      {
        direction === 'prev'
        ? <IoChevronBackSharp/>
        : <IoChevronForwardSharp/>
      }
    </div>
  )
}

export default TopbarNavItem;

