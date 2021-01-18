import React, { FunctionComponent } from 'react';
import { IoPlaySharp } from 'react-icons/io5';

import './button-play.sass';

interface ButtonPlayProps {
    text?: string,
    active?: boolean,
    className?: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonPlay: FunctionComponent<ButtonPlayProps> = ({
    text,
    active,
    className,
    onClick,
}): JSX.Element => {
    return (
        <button
            type="button"
            className={active ? `${className} button button-play is-active` : `${className} button button-play`}
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
