import React, { FunctionComponent } from 'react';

import './add-playlist.sass';

interface AddPlaylistProps {
    className?: string
}

const AddPlaylist: FunctionComponent<AddPlaylistProps> = ({
    className
}): JSX.Element => {
    return (
        <div className={className? `${className} add-playlist` : `add-playlist`}>

        </div>
    )
};

export default AddPlaylist;
