import React, { FunctionComponent, useContext } from 'react';
import AppContext from '../../../../AppContext';
import Accordion from '../accordion/accordion';
import classNames from 'classnames';

import './accordions.sass';

interface NavProps {
  id: string | number;
  url: string;
  icon?: JSX.Element;
  name: string;
}

interface AccordionsHelpsProps {
  id: number | string;
  name: string;
  items: Array<NavProps>;
}

interface AccordionsProps {
  className?: string;
  topHeight: number;
  trackHeight: number;
  nav: Array<AccordionsHelpsProps>;
}

const Accordions: FunctionComponent<AccordionsProps> = ({
  className,
  topHeight,
  trackHeight,
  nav,
}): JSX.Element => {
  const myContext = useContext(AppContext);
  const breakpoint =
    myContext.windowWidth > 768 &&
    myContext.windowWidth > myContext.windowHeight;
  let navHeight;
  if (breakpoint)
    navHeight = myContext.windowHeight - topHeight - trackHeight - 117;

  const listsNav = nav.map((item, index) => (
    <Accordion key={item.id} name={item.name} nav={item.items} />
  ));

  const classes = classNames(className, 'accordions');
  return (
    <div className={classes} style={{ height: navHeight }}>
      {listsNav}
    </div>
  );
};

export default Accordions;
