import React, {FunctionComponent, useState, useRef} from 'react';
import {IoChevronDownSharp} from 'react-icons/all';
import classNames from 'classnames';
import DropdownItem from '../dropdown-item/dropdown-item';
import useOutsideClick from '../../../../useOutsideClick';
import {IAccountMenu} from '../../../../types/siteTypes';

import './dropdown.sass';

interface DropdownProps {
  items: Array<IAccountMenu>;
}

const Dropdown: FunctionComponent<DropdownProps> = ({
  items
}): JSX.Element => {
  const listItems = items.map((item) =>
    <DropdownItem
      className="dropdown__list__item"
      key={item.id}
      url={item.url}
      text={item.text}/>
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
      <ul className="dropdown__list">
        {listItems}
      </ul>
    </div>
  )
};

export default Dropdown;
