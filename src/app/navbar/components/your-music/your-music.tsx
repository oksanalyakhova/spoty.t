import React, { FunctionComponent } from 'react';

import './your-music.sass';

interface YourMusicProps {
    className?: string
}

const YourMusic: FunctionComponent<YourMusicProps> = ({
    className
}): JSX.Element => {
    return (
        <div className={className? `${className} your-music` : `your-music`}>

        </div>
    )
};

export default YourMusic;
