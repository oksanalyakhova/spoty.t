import React, {FunctionComponent} from 'react';
import CardNavItem from '../card-nav-item/card-nav-item';
import {IoChevronDownSharp} from 'react-icons/all';

import './accordion.sass';

interface NavProps {
  id: string | number;
  url: string;
  icon?: JSX.Element;
  name: string;
}

interface AccordionProps {
  className?: string,
  name: string,
  nav: Array<NavProps>
}

const Accordion: FunctionComponent<AccordionProps> = ({
                                                        className,
                                                        name,
                                                        nav
                                                      }): JSX.Element => {
  const listNav = nav.map((item, index) =>
    <CardNavItem
      key={item.id}
      navItem={item}
    />
  );
  return (
    <div className={className ? `${className} accordion` : `accordion`}>
      <div className="accordion__header">
        {name}
        <IoChevronDownSharp/>
      </div>
      <div className="accordion__content">
        {listNav}
      </div>
    </div>
  )
};

export default Accordion;
