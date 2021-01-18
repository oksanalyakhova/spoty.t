import React, { FunctionComponent } from 'react';
import Actions from '../components/actions/actions';
import Progress from '../components/progress/progress';

import './current-track-view.sass';

interface CurrentTrackProps {
    className?: string
}

const CurrentTrack: FunctionComponent<CurrentTrackProps> = ({
    className
}): JSX.Element => {
    return (
        <div className={`${className ? className + " current-track" : "current-track"}`}>
            <Actions className="current-track__actions"
                     onClickBackward={() => {console.log('backward was clicked')}}
                     onClickPlay={() => {console.log('play was clicked')}}
                     onClickForward={() => {console.log('forward was clicked')}} />
            <Progress className="current-track__progress" />
        </div>
    )
};

export default CurrentTrack;
