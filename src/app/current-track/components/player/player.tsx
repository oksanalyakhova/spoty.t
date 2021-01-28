import React, {FunctionComponent} from 'react';
import AudioPlayer, {RHAP_UI} from 'react-h5-audio-player';
import classNames from 'classnames';
import {
  BiRefresh,
  IoPlaySharp,
  IoPauseSharp,
  BiSkipPrevious,
  BiSkipNext,
  IoVolumeHighSharp,
  IoVolumeMuteSharp,
  IoMdMenu,
  TiArrowShuffle,
  IoIosPhonePortrait
} from "react-icons/all";

import 'react-h5-audio-player/lib/styles.css';
import './player.sass';

interface PlayerProps {
  className?: string;
}

const Player: FunctionComponent<PlayerProps> = ({
  className,
}): JSX.Element => {
  const lyrics = <button
    type="button"
    className="button button-lyrics">
    <span className="name">Lyrics</span>
  </button>

  const nav = <button
    type="button"
    className="button button-playlist-nav">
    <span className="icon"><IoMdMenu/></span>
  </button>

  const shuffle = <button
    type="button"
    className="button button-shuffle">
    <span className="icon"><TiArrowShuffle/></span>
  </button>

  const devices = <button
    type="button"
    className="button button-shuffle">
    <span className="icon"><IoIosPhonePortrait/></span>
    <span className="name">Devices Available</span>
  </button>

  const classes = classNames(className, 'player')

  return (
    <div className={classes}>
      <AudioPlayer
        showSkipControls={true}
        showJumpControls={false}
        autoPlay={false}
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
        onPlay={e => console.log("onPlay")}
        customIcons={{
          play: <IoPlaySharp/>,
          pause: <IoPauseSharp/>,
          next: <BiSkipNext/>,
          previous: <BiSkipPrevious/>,
          loopOff: <BiRefresh/>,
          volume: <IoVolumeHighSharp/>,
          volumeMute: <IoVolumeMuteSharp/>
        }}
        customAdditionalControls={[
          lyrics,
          nav,
          shuffle,
          RHAP_UI.LOOP,
          devices
        ]}
      />
    </div>
  )
};

export default Player;
