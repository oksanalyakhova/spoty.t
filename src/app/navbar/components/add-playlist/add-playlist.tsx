import React, { FunctionComponent } from 'react';
import { IoAddCircleOutline } from "react-icons/all";

import './add-playlist.sass';

interface AddPlaylistProps {
    className?: string
}

const AddPlaylist: FunctionComponent<AddPlaylistProps> = ({
    className
}): JSX.Element => {
    return (
        <div className={className? `${className} add-playlist` : `add-playlist`}>
            <a href="some/page" className="add-playlist__link">
                <span className="icon">
                    <IoAddCircleOutline />
                </span>
                <span className="name">New Playlist</span>
            </a>
        </div>
    )
};

export default AddPlaylist;
