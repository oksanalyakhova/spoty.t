import React, { FunctionComponent, useState, useEffect } from 'react';
import Tag from '../../../../ui/tag/tag';
import { IoCheckmarkSharp, IoAddSharp } from 'react-icons/io5';

import './card-popular-songs.sass';

interface CardPopularSongsProps {
    className?: string,
    track: {
        id?: string | number;
        src?: string;
        title?: string;
        isAdded?: boolean;
        explicit?: string;
        plays?: string;
    },
    index: number
}

const CardPopularSongs: FunctionComponent<CardPopularSongsProps> = ({
    className,
    track,
    index
}): JSX.Element => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 1200;
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <div className={`${className ? className + " track" : "track"}`}>
            <div className="track__art">
                <img src={track.src} alt={track.title} />
            </div>
            <div className="track__number">
                {index + 1}
            </div>
            <div className="track__added">
                {!track.isAdded
                    ? <IoAddSharp />
                    : <IoCheckmarkSharp />
                }
            </div>
            <div className="track__title">
                {track.title}
            </div>
            {width > breakpoint
                ? <div className="track__explicit"><Tag text={track.explicit} /></div>
                : null
            }
            <div className="track__plays">
                {track.plays}
            </div>
        </div>
    )
}

export default CardPopularSongs;

