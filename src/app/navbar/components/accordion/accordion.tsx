import React, {FunctionComponent, useState, useRef, useEffect, useContext} from 'react';
import AppContext from '../../../../AppContext';
import CardNavItem from '../card-nav-item/card-nav-item';
import {IoChevronDownSharp} from 'react-icons/all';
import classNames from 'classnames';

import './accordion.sass';

interface NavProps {
  id: string | number;
  url: string;
  icon?: JSX.Element;
  name: string;
}

interface AccordionProps {
  className?: string;
  name: string;
  nav: Array<NavProps>;
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

  const buttonRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect ( () => {
    if(contentRef.current){
      const contentHeight = contentRef.current.offsetHeight;
      setHeight(contentHeight);
    }
  }, [contentRef]);

  const myContext = useContext(AppContext);
  const breakpoint = 769;
  const condition = myContext.windowWidth < breakpoint;

  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  const classesAccordion = classNames(className, 'accordion');
  const classesAccordionHeader = classNames('accordion__header', {
    'is-active': isActive,
  })

  return (
    <div className={classesAccordion}>
      <div className={classesAccordionHeader}
           onClick={handleToggle}
           ref={buttonRef}>
        {name}
        <IoChevronDownSharp/>
      </div>
      {condition
        ? <div className="accordion__content"
               style={isActive ? {height: height} : {height: 0}}>
            <div className="nav-cards" ref={contentRef}>
              {listNav}
            </div>
          </div>
        : <div className="accordion__content"
               style={isActive ? {height: 0} : {height: height}}>
          <div className="nav-cards" ref={contentRef}>
            {listNav}
          </div>
        </div>
      }

    </div>
  )
};

export default Accordion;
