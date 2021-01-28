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

  const classesDropdownButton = classNames('dropdown__button button button-dropdown', {
    'is-active': isActive,
  });
  const classesDropdownList = classNames('dropdown__list list', {
    'is-visible': isActive,
    'is-hidden': !isActive
  })

  return (
    <div className="dropdown"
         ref={dropRef}>
      <button type="button"
              className={classesDropdownButton}
              onClick={handleToggle}>
        <IoChevronDownSharp/>
      </button>
      <ul className={classesDropdownList}>
        {listItems}
      </ul>
    </div>
  )
};

export default Dropdown;
