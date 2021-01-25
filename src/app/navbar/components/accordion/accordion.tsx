import React, {FunctionComponent, useState, useRef, useEffect} from 'react';
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

  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect ( () => {
    if(contentRef.current){
      const contentHeight = contentRef.current.offsetHeight;
      setHeight(contentHeight);
    }
  }, [contentRef]);

  return (
    <div className={className ? `${className} accordion` : `accordion`}>
      <div className={`${isActive ? 'accordion__header is-active' : 'accordion__header'}`}
           onClick={handleToggle}>
        {name}
        <IoChevronDownSharp/>
      </div>
      <div className="accordion__content" style={isActive ? {height: 0} : {height: height}}>
        <div className="nav-cards" ref={contentRef}>
          {listNav}
        </div>
      </div>
    </div>
  )
};

export default Accordion;
