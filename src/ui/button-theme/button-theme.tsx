import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './button-theme.sass';

interface ButtonThemeProps {
  text?: string;
  isDisabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonTheme: FunctionComponent<ButtonThemeProps> = ({
  text,
  isDisabled,
  onClick,
}): JSX.Element => {
  const classes = classNames('button button-theme', {
    'is-disabled': isDisabled,
  });

  return (
    <button type="button" className={classes} onClick={(e) => onClick(e)}>
      <span>{text}</span>
    </button>
  );
};

export default ButtonTheme;
