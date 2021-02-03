import React, {FunctionComponent} from 'react';
import classNames from 'classnames';

import './dropdown-item.sass';

interface DropdownItemProps {
  className?: string;
  url: string;
  text: string;
}

const DropdownItem: FunctionComponent<DropdownItemProps> = ({
  className,
  url,
  text,
}): JSX.Element => {
  const classes = classNames(className, 'list-item');

  return (
    <li className={classes}>
      <a href={url}>
        {text}
      </a>
    </li>
  )
};

export default DropdownItem;
