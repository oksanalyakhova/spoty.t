import React, { FunctionComponent } from 'react';
import { IoEllipsisHorizontal } from 'react-icons/io5';

import './button-more.sass';

interface ButtonMoreProps {
    active?: boolean,
    className?: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonMore: FunctionComponent<ButtonMoreProps> = ({
    active,
    className,
    onClick,
}): JSX.Element => {
    return (
        <button
            type='button'
            className={active ? `${className} button button-more is-active` : `${className} button button-more`}
            onClick={(e) => onClick(e)}>
                <IoEllipsisHorizontal />
        </button>
    )
}

export default ButtonMore;
