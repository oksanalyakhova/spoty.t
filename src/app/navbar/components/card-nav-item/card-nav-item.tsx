import React, {FunctionComponent, useContext} from 'react';
import AppContext from '../../../../AppContext';
import {IoMusicalNotesSharp} from 'react-icons/all';
import classNames from 'classnames';

import './card-nav-item.sass';

interface CardNavItemHelpsProps {
  id: string | number;
  url: string;
  icon?: JSX.Element;
  name: string;
}

interface CardNavItemProps {
  className?: string;
  navItem: CardNavItemHelpsProps;
}

const CardNavItem: FunctionComponent<CardNavItemProps> = ({
  className,
  navItem
}): JSX.Element => {
  const myContext = useContext(AppContext);
  const breakpoint = 768;
  const condition = myContext.windowWidth > breakpoint;

  const classes = classNames(className, 'card-nav')

  return (
    <a href={navItem.url} className={classes}>
      {condition
        ? <span className="icon">
          {
            navItem.icon
              ? navItem.icon
              : <IoMusicalNotesSharp/>
          }
        </span>
        : null
      }
      <span className="name">
        {navItem.name}
      </span>
    </a>
  )
};

export default CardNavItem;
