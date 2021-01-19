import React, { FunctionComponent } from 'react';
import { IoPlaySharp } from 'react-icons/io5';

import './card-related-artists.sass';

interface CardRelatedArtistsProps {
    artist: {
        id: string | number;
        url: string;
        src: string;
        name: string;
    },
    isSmall: boolean;
}

const CardRelatedArtists: FunctionComponent<CardRelatedArtistsProps> = ({
    artist,
    isSmall,
}): JSX.Element => {
    return (
        <a href={artist.url}
           className={`${isSmall ? "related-artist is-small" : "related-artist is-large"}`}>
            <span className="related-artist__img">
                <img src={artist.src} alt={artist.name} />
                {!isSmall
                    ? <IoPlaySharp />
                    : null
                }
            </span>
            <span className="related-artist__name">
                {artist.name}
            </span>
        </a>
    )
}

export default CardRelatedArtists;

