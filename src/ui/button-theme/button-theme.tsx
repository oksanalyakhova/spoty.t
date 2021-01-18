import React, { FunctionComponent } from 'react';

import './button-theme.sass';

interface ButtonThemeProps {
    text?: string,
    disable?: boolean,
    className?: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonTheme: FunctionComponent<ButtonThemeProps> = ({
    text,
    disable,
    className,
    onClick,
}): JSX.Element => {
    return (
        <button
            type="button"
            className={disable ? `${className} button button-theme is-disabled` : `${className} button button-theme`}
            onClick={(e) => onClick(e)}>
            <div className="button__top button-theme__top">
                {text}
            </div>
            <div className="button__bottom button-theme__bottom">
                {text}
            </div>
        </button>
    )
}

export default ButtonTheme;
