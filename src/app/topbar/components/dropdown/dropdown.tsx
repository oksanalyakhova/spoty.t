import React, {FunctionComponent, useState, useRef} from 'react';
import {IoChevronDownSharp} from 'react-icons/all';
import classNames from 'classnames';
import useOutsideClick from '../../../../useOutsideClick';

import './dropdown.sass';

interface DropdownItemProps {
  id: string | number;
  url: string;
  text: string;
}

interface DropdownProps {
  items: Array<DropdownItemProps>;
}

const Dropdown: FunctionComponent<DropdownProps> = ({
  items
}): JSX.Element => {
  const listItems = items.map((item) =>
    <li key={item.id} className="list__item">
      <a href={item.url}>
        {item.text}
      </a>
    </li>
  );

  const [isActive, setActive] = useState(false)
  const handleToggle = () => {
    setActive(!isActive);
  };

  const dropRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropRef, () => {
    if (isActive) setActive(!isActive)
  });

  const classes = classNames('dropdown', {
    'is-active': isActive
  });

  return (
    <div className={classes}
         ref={dropRef}>
      <button type="button"
              className="dropdown__button button"
              onClick={handleToggle}>
        <IoChevronDownSharp/>
      </button>
      <ul className="dropdown__list list">
        {listItems}
      </ul>
    </div>
  )
};

export default Dropdown;
