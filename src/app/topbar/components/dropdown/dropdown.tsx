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

  const dropRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listHeight = listRef?.current?.offsetHeight;


  const [isActive, setActive] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState('0px')
  const toggleActive = () => {
    setActive(!isActive);
    isActive ? setDropdownHeight('0px') : setDropdownHeight(`${listHeight}px`);

  };

  useOutsideClick(dropRef, () => {
    if (isActive) {
      setActive(!isActive);
      setDropdownHeight('0px');
    }
  });

  const classes = classNames('dropdown', {
    'is-active': isActive
  });

  return (
    <div className={classes}
         ref={dropRef}>
      <button type="button"
              className="dropdown__button button"
              onClick={toggleActive}>
        <IoChevronDownSharp/>
      </button>
      <div className="dropdown__list-wrapper" style={{height: dropdownHeight}}>
        <ul className="dropdown__list" ref={listRef}>
          {listItems}
        </ul>
      </div>
    </div>
  )
};

export default Dropdown;
