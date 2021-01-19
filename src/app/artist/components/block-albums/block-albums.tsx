import React, { FunctionComponent } from 'react';
import CardAlbums from '../card-albums/card-albums';

import './block-albums.sass';

interface CardAlbumsProps {
    id: string | number;
    title: string;
    featured?: string;
    isAdded: boolean;
    explicit: string;
    length: string;
    isTrend: boolean;
}

interface BlockAlbumsProps {
    tracks: Array<CardAlbumsProps>
}

const BlockAlbums: FunctionComponent<BlockAlbumsProps> = ({
    tracks,
}): JSX.Element => {
    const listTracks = tracks.map((track, index) =>
        <CardAlbums
            className="track_albums"
            key={track.id}
            track={track}
            index={index}
        />
    );
    return (

        <div className="tracks tracks_albums">
            {listTracks}
        </div>
    )
}

export default BlockAlbums;
