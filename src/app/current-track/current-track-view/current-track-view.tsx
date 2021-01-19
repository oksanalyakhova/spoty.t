import React, { FunctionComponent } from 'react';
// import Actions from '../components/actions/actions';
// import Progress from '../components/progress/progress';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './current-track-view.sass';

interface CurrentTrackProps {
    className?: string
}

const CurrentTrack: FunctionComponent<CurrentTrackProps> = ({
    className
}): JSX.Element => {
    return (
        <div className={`${className ? className + " current-track" : "current-track"}`}>
            <AudioPlayer
                showSkipControls={true}
                showJumpControls={false}
                autoPlay
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
            />

            {/*<Actions className="current-track__actions"*/}
            {/*         onClickBackward={() => {console.log('backward was clicked')}}*/}
            {/*         onClickPlay={() => {console.log('play was clicked')}}*/}
            {/*         onClickForward={() => {console.log('forward was clicked')}} />*/}
            {/*<Progress className="current-track__progress" />*/}
        </div>
    )
};

export default CurrentTrack;
