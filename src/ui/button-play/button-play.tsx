import React, { FunctionComponent } from 'react';
import { IoPlaySharp } from 'react-icons/io5';

import './button-play.sass';

interface ButtonPlayProps {
    text?: string,
    isActive?: boolean,
    className?: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonPlay: FunctionComponent<ButtonPlayProps> = ({
    text,
    isActive,
    className,
    onClick,
}): JSX.Element => {
    return (
        <button
            type="button"
            className={`${className? className + " button button-play" : "button button-play"} 
        ${isActive ? "is-active" : ""}`}
            onClick={(e) => onClick(e)}>
            <IoPlaySharp />
            <div className="button__top button-play__top">
                {text}
            </div>
            <div className="button__bottom button-play__bottom">
                {text}
            </div>
        </button>
    )
}

export default ButtonPlay;
