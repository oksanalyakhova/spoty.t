import React, { FunctionComponent } from 'react';
import Player from '../components/player/player';

import './current-track-view.sass';

interface CurrentTrackProps {
    className?: string,
}

const CurrentTrack: FunctionComponent<CurrentTrackProps> = ({
    className,
}): JSX.Element => {
    return (
        <div className={`${className ? className + " current-track" : "current-track"}`}>
            <Player className="current-track__player" />
        </div>
    )
};

export default CurrentTrack;
