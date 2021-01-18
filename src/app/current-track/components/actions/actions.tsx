import React, { FunctionComponent } from 'react';
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoPlaySharp } from 'react-icons/io5';

import './actions.sass';

interface ActionsProps {
    className: string,
    onClickBackward: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onClickPlay: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onClickForward: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Actions: FunctionComponent<ActionsProps> = ({
    className,
    onClickBackward,
    onClickPlay,
    onClickForward,
}): JSX.Element => {
    return (
        <div className={`${className ? className + " actions" : "actions"}`}>
            <button type="button" className="actions__backward backward"
                    onClick={(e) => onClickBackward(e)}>
                <IoPlaySkipBackSharp />
            </button>
            <button type="button" className="actions__play play"
                    onClick={(e) => onClickPlay(e)}>
                <IoPlaySharp />
            </button>
            <button type="button" className="actions__forward forward"
                    onClick={(e) => onClickForward(e)}>
                <IoPlaySkipForwardSharp />
            </button>
        </div>
    )
}

export default Actions;

