import React, { FunctionComponent } from 'react';

import './button-theme.sass';

interface ButtonThemeProps {
    text?: string,
    isDisabled?: boolean,
    className?: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonTheme: FunctionComponent<ButtonThemeProps> = ({
    text,
    isDisabled,
    className,
    onClick,
}): JSX.Element => {
    return (
        <button
            type="button"
            className={`${className? className + " button button-theme" : "button button-theme"} 
        ${isDisabled ? "is-disabled" : ""}`}
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
