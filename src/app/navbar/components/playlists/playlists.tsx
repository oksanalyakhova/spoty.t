import React, { FunctionComponent } from 'react';

import './playlists.sass';

interface PlaylistsProps {
    className?: string
}

const Playlists: FunctionComponent<PlaylistsProps> = ({
    className
}): JSX.Element => {
    return (
        <div className={className? `${className} playlists` : `playlists`}>

        </div>
    )
};

export default Playlists;
